import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Building, Phone, Mail, ChevronDown } from 'lucide-react';

// Menu data structure with routing paths
const menuData = {
    'Thiết kế': [
        { name: 'Quy trình thiết kế', path: '/design/quy-trinh-thiet-ke' },
        { name: 'Thiết kế kiến trúc', path: '/design/thiet-ke-kien-truc' },
        { name: 'Thiết kế nội thất', path: '/design/thiet-ke-noi-that' }
    ],
    'Thi công': [
        { name: 'Quy trình thi công', path: '/construction/quy-trinh-thi-cong' },
        { name: 'Thi công trọn gói kiến trúc', path: '/construction/thi-cong-tron-goi-kien-truc' },
        { name: 'Thi công trọn gói nội thất', path: '/construction/thi-cong-tron-goi-noi-that' },
        { name: 'Thi công hạng mục', path: '/construction/thi-cong-hang-muc' },
        { name: 'Thi công sửa chữa cải tạo', path: '/construction/sua-chua-cai-tao' }
    ],
    'Báo giá': [
        { name: 'Báo giá thiết kế, thi công nhà', path: '/pricing/thiet-ke-thi-cong-nha' },
        { name: 'Báo giá thiết kế, thi công nội thất', path: '/pricing/thiet-ke-thi-cong-noi-that' },
        { name: 'Báo giá thiết kế, thi công tự đường', path: '/pricing/thiet-ke-thi-cong-tu-duong' },
        { name: 'Báo giá sửa chữa cải tạo', path: '/pricing/sua-chua-cai-tao' },
        { name: 'Báo giá thiết kế, thi công sân vườn', path: '/pricing/thiet-ke-thi-cong-san-vuon' },
        { name: 'Báo giá cửa composite', path: '/pricing/cua-composite' },
        { name: 'Báo giá cửa nhôm kính', path: '/pricing/cua-nhom-kinh' },
        { name: 'Báo giá điện mặt trời', path: '/pricing/dien-mat-troi' },
        { name: 'Báo giá điện thông minh', path: '/pricing/dien-thong-minh' },
        { name: 'Báo giá đá ốp lát', path: '/pricing/da-op-lat' },
        { name: 'Báo giá sàn gỗ', path: '/pricing/san-go' },
        { name: 'Báo giá rèm cửa', path: '/pricing/rem-cua' },
        { name: 'Báo giá trần, vách thạch cao', path: '/pricing/tran-vach-thach-cao' },
        { name: 'Báo giá phào chỉ PU', path: '/pricing/phao-chi-pu' },
        { name: 'Báo giá chống thấm', path: '/pricing/chong-tham' }
    ],
    'Tin tức': [
        { name: 'Vật liệu xây dựng', path: '/news/vat-lieu-xay-dung' },
        { name: 'Phong thủy', path: '/news/phong-thuy' },
        { name: 'Mẫu nhà đẹp', path: '/news/mau-nha-dep' },
        { name: 'Bản vẽ mặt bằng', path: '/news/ban-ve-mat-bang' },
        { name: 'Tuyển dụng', path: '/news/tuyen-dung' },
        { name: 'Cẩm nang xây nhà', path: '/news/cam-nang-xay-nha' },
        { name: 'Kiến trúc', path: '/news/kien-truc' },
        { name: 'Nội thất', path: '/news/noi-that' },
        { name: 'Dự án thiết kế', path: '/news/du-an-thiet-ke' },
        { name: 'Luật xây dựng', path: '/news/luat-xay-dung' }
    ],
    'Ứng dụng': [
        { name: 'Ứng dụng Tính chi phí xây dựng', path: '/apps/tinh-chi-phi-xay-dung' },
        { name: 'Ứng dụng xem Tuổi làm nhà', path: '/apps/xem-tuoi-lam-nha' },
        { name: 'Ứng dụng xem Thước lỗ ban trực tuyến', path: '/apps/thuoc-lo-ban-truc-tuyen' },
        { name: 'Ứng dụng xem Hướng nhà hợp tuổi', path: '/apps/xem-huong-lam-nha' },
        { name: 'Ứng dụng xem Màu hợp tuổi', path: '/apps/xem-mau-hop-tuoi' },
        { name: 'Ứng dụng thiết kế 3D', path: '/apps/thiet-ke-3d' }
    ]
};

const Header = () => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [router.pathname]);

    // Check if current path matches any menu item
    const isActiveRoute = (path) => {
        return router.pathname === path;
    };

    // Check if any submenu item is active
    const isActiveSection = (section) => {
        return menuData[section]?.some(item => isActiveRoute(item.path));
    };

    // Handle dropdown hover
    const handleDropdownHover = (section) => {
        setActiveDropdown(section);
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/98 backdrop-blur-md shadow-lg'
                    : 'bg-white/95 backdrop-blur-sm'
            }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-slate-800 hover:text-primary-500 transition-colors">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white"
                        >
                            <Building size={20} />
                        </motion.div>
                        LIN HOME
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {/* Home */}
                        <Link
                            href="/"
                            className={`px-4 py-2 font-medium transition-all duration-300 relative ${
                                router.pathname === '/'
                                    ? 'text-primary-500'
                                    : 'text-slate-600 hover:text-primary-500'
                            }`}
                        >
                            Trang chủ
                            {router.pathname === '/' && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                                />
                            )}
                        </Link>

                        {/* Menu with dropdowns */}
                        {Object.keys(menuData).map((section, index) => (
                            <div
                                key={index}
                                className="relative group"
                                onMouseEnter={() => handleDropdownHover(section)}
                                onMouseLeave={handleDropdownLeave}
                            >
                                <button
                                    className={`px-4 py-2 font-medium transition-all duration-300 relative flex items-center gap-1 ${
                                        isActiveSection(section)
                                            ? 'text-primary-500'
                                            : 'text-slate-600 hover:text-primary-500'
                                    }`}
                                >
                                    {section}
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-300 ${
                                            activeDropdown === section ? 'rotate-180' : ''
                                        }`}
                                    />
                                    {isActiveSection(section) && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                                        />
                                    )}
                                </button>

                                {/* Dropdown Menu */}
                                <div className={`absolute top-full left-0 min-w-[280px] bg-white rounded-2xl shadow-xl border border-slate-100 p-2 transition-all duration-300 ${
                                    activeDropdown === section
                                        ? 'opacity-100 visible translate-y-0'
                                        : 'opacity-0 invisible translate-y-2'
                                }`}>
                                    {menuData[section].map((item, idx) => (
                                        <Link
                                            key={idx}
                                            href={item.path}
                                            className={`block px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
                                                isActiveRoute(item.path)
                                                    ? 'text-primary-500 bg-primary-50'
                                                    : 'text-slate-600 hover:text-primary-500 hover:bg-slate-50'
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Contact */}
                        <Link
                            href="/contact"
                            className={`px-4 py-2 font-medium transition-all duration-300 relative ${
                                router.pathname === '/contact'
                                    ? 'text-primary-500'
                                    : 'text-slate-600 hover:text-primary-500'
                            }`}
                        >
                            Liên hệ
                            {router.pathname === '/contact' && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                                />
                            )}
                        </Link>
                    </nav>

                    {/* Contact Info - Desktop */}
                    <div className="hidden xl:flex items-center gap-6 text-sm">
                        <a
                            href="tel:0963459288"
                            className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-all duration-200"
                        >
                            <Phone size={16} />
                            <span className="font-semibold">Hotline:</span>
                            <span>0963 459 288</span>
                        </a>
                        <a
                            href="mailto:info@linhome.vn"
                            className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-all duration-200"
                        >
                            <Mail size={16} />
                            <span className="font-semibold">Email:</span>
                            <span>info@linhome.vn</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`w-4 h-0.5 bg-slate-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`} />
                            <span className={`w-4 h-0.5 bg-slate-600 mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-4 h-0.5 bg-slate-600 mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
                    className="lg:hidden overflow-hidden"
                >
                    <div className="py-4 border-t border-slate-200">
                        <nav className="flex flex-col gap-2">
                            <Link
                                href="/"
                                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                                    router.pathname === '/'
                                        ? 'bg-primary-50 text-primary-500'
                                        : 'text-slate-600 hover:bg-slate-50'
                                }`}
                            >
                                Trang chủ
                            </Link>

                            {Object.keys(menuData).map((section, index) => (
                                <div key={index}>
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === section ? null : section)}
                                        className={`w-full px-4 py-3 rounded-lg font-medium transition-colors flex justify-between items-center ${
                                            isActiveSection(section)
                                                ? 'bg-primary-50 text-primary-500'
                                                : 'text-slate-600 hover:bg-slate-50'
                                        }`}
                                    >
                                        {section}
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                                            activeDropdown === section ? 'rotate-180' : ''
                                        }`} />
                                    </button>

                                    {/* Mobile submenu */}
                                    <motion.div
                                        initial={false}
                                        animate={{ height: activeDropdown === section ? 'auto' : 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="ml-4 mt-2 space-y-1">
                                            {menuData[section].map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={item.path}
                                                    className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                                                        isActiveRoute(item.path)
                                                            ? 'bg-primary-50 text-primary-500'
                                                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                                                    }`}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            ))}

                            <Link
                                href="/contact"
                                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                                    router.pathname === '/contact'
                                        ? 'bg-primary-50 text-primary-500'
                                        : 'text-slate-600 hover:bg-slate-50'
                                }`}
                            >
                                Liên hệ
                            </Link>

                            {/* Mobile Contact Info */}
                            <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
                                <a
                                    href="tel:0963459288"
                                    className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:text-primary-500"
                                >
                                    <Phone size={16} />
                                    <span>0963 459 288</span>
                                </a>
                                <a
                                    href="mailto:info@linhome.vn"
                                    className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:text-primary-500"
                                >
                                    <Mail size={16} />
                                    <span>info@linhome.vn</span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </motion.div>
            </div>
        </motion.header>
    );
};

export default Header;