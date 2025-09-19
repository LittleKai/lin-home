import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building, Phone, Mail } from 'lucide-react';

// Menu data structure from original file
const menuData = {
    'Thiết kế': [
        'Quy trình thiết kế',
        'Thiết kế kiến trúc',
        'Thiết kế nội thất'
    ],
    'Thi công': [
        'Quy trình thi công',
        'Thi công trọn gói kiến trúc',
        'Thi công trọn gói nội thất',
        'Thi công hạng mục',
        'Thi công sửa chữa cải tạo'
    ],
    'Báo giá': [
        'Báo giá thiết kế, thi công nhà',
        'Báo giá thiết kế, thi công nội thất',
        'Báo giá thiết kế, thi công tự đường',
        'Báo giá sửa chữa cải tạo',
        'Báo giá thiết kế, thi công sân vườn',
        'Báo giá cửa composite',
        'Báo giá cửa nhôm kính',
        'Báo giá điện mặt trời',
        'Báo giá điện thông minh',
        'Báo giá đá ốp lát',
        'Báo giá sàn gỗ',
        'Báo giá rèm cửa',
        'Báo giá trần, vách thạch cao',
        'Báo giá phào chỉ PU',
        'Báo giá chống thấm'
    ],
    'Tin tức': [
        'Vật liệu xây dựng',
        'Phong thủy',
        'Mẫu nhà đẹp',
        'Bản vẽ mặt bằng',
        'Tuyển dụng',
        'Cẩm nang xây nhà',
        'Kiến trúc',
        'Nội thất',
        'Dự án thiết kế',
        'Luật xây dựng'
    ],
    'Ứng dụng': [
        'Ứng dụng Tính chi phí xây dựng',
        'Ứng dụng xem Tuổi làm nhà',
        'Ứng dụng xem Thước lỗ ban trực tuyến',
        'Ứng dụng xem Hướng nhà hợp tuổi',
        'Ứng dụng xem Màu hợp tuổi',
        'Ứng dụng thiết kế 3D'
    ]
};

const Header = ({ activeSection, setActiveSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle menu item click
    const handleMenuClick = (section) => {
        setActiveSection(section);
        setIsMobileMenuOpen(false);
    };

    // Handle dropdown item click
    const handleDropdownClick = (item) => {
        alert(`Chuyển đến: ${item}`);
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
                    <motion.a
                        href="#"
                        onClick={() => handleMenuClick('home')}
                        className="flex items-center gap-3 text-2xl font-bold text-slate-800 hover:text-primary-500 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white">
                            <Building size={20} />
                        </div>
                        LIN HOME
                    </motion.a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {/* Home */}
                        <a
                            href="#"
                            onClick={() => handleMenuClick('home')}
                            className={`px-4 py-2 font-medium transition-all duration-300 relative ${
                                activeSection === 'home'
                                    ? 'text-primary-500'
                                    : 'text-slate-600 hover:text-primary-500'
                            }`}
                        >
                            Trang chủ
                            {activeSection === 'home' && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                                />
                            )}
                        </a>

                        {/* Menu with dropdowns */}
                        {Object.keys(menuData).map((section, index) => (
                            <div key={index} className="relative group">
                                <a
                                    href="#"
                                    onClick={() => handleMenuClick(section)}
                                    className={`px-4 py-2 font-medium transition-all duration-300 relative ${
                                        activeSection === section
                                            ? 'text-primary-500'
                                            : 'text-slate-600 hover:text-primary-500'
                                    }`}
                                >
                                    {section}
                                    {activeSection === section && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                                        />
                                    )}
                                </a>

                                {/* Dropdown Menu */}
                                <div className="absolute top-full left-0 min-w-[280px] bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-slate-100 p-2">
                                    {menuData[section].map((item, idx) => (
                                        <a
                                            key={idx}
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleDropdownClick(item);
                                            }}
                                            className="block px-4 py-3 text-sm text-slate-600 hover:text-primary-500 hover:bg-slate-50 rounded-lg transition-all duration-200"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Contact */}
                        <a
                            href="#"
                            onClick={() => handleMenuClick('contact')}
                            className={`px-4 py-2 font-medium transition-all duration-300 relative ${
                                activeSection === 'contact'
                                    ? 'text-primary-500'
                                    : 'text-slate-600 hover:text-primary-500'
                            }`}
                        >
                            Liên hệ
                            {activeSection === 'contact' && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                                />
                            )}
                        </a>
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
                            <a
                                href="#"
                                onClick={() => handleMenuClick('home')}
                                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                                    activeSection === 'home'
                                        ? 'bg-primary-50 text-primary-500'
                                        : 'text-slate-600 hover:bg-slate-50'
                                }`}
                            >
                                Trang chủ
                            </a>

                            {Object.keys(menuData).map((section, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    onClick={() => handleMenuClick(section)}
                                    className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                                        activeSection === section
                                            ? 'bg-primary-50 text-primary-500'
                                            : 'text-slate-600 hover:bg-slate-50'
                                    }`}
                                >
                                    {section}
                                </a>
                            ))}

                            <a
                                href="#"
                                onClick={() => handleMenuClick('contact')}
                                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                                    activeSection === 'contact'
                                        ? 'bg-primary-50 text-primary-500'
                                        : 'text-slate-600 hover:bg-slate-50'
                                }`}
                            >
                                Liên hệ
                            </a>

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