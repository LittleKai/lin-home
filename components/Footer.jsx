import { motion } from 'framer-motion';
import {
    Building,
    Phone,
    Mail,
    MapPin,
    Globe,
    Facebook,
    Instagram,
    Youtube,
    Linkedin
} from 'lucide-react';

const Footer = () => {
    // Footer data organized by sections
    const footerData = {
        services: [
            'Thiết kế kiến trúc',
            'Thi công xây dựng',
            'Thiết kế nội thất',
            'Thiết kế sân vườn',
            'Sửa chữa cải tạo',
            'Tư vấn báo giá'
        ],
        support: [
            'Quy trình làm việc',
            'Chính sách bảo hành',
            'Câu hỏi thường gặp',
            'Tải ứng dụng',
            'Liên hệ hỗ trợ'
        ],
        contact: [
            { icon: Phone, text: '0941 090 333', link: 'tel:0941090333' },
            { icon: Mail, text: 'info@linhome.vn', link: 'mailto:info@linhome.vn' },
            { icon: MapPin, text: 'Hà Nội, Việt Nam', link: 'https://maps.google.com/?q=Hà+Nội,+Việt+Nam' },
            { icon: Globe, text: 'www.linhome.vn', link: 'https://linhome.vn' }
        ],
        social: [
            { icon: Facebook, link: 'https://facebook.com/linhome.vn', name: 'Facebook' },
            { icon: Instagram, link: 'https://instagram.com/linhome.vn', name: 'Instagram' },
            { icon: Youtube, link: 'https://youtube.com/linhome.vn', name: 'YouTube' },
            { icon: Linkedin, link: 'https://linkedin.com/company/linhome', name: 'LinkedIn' }
        ]
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const handleLinkClick = (url) => {
        if (url.startsWith('tel:') || url.startsWith('mailto:')) {
            window.open(url, '_self');
        } else {
            window.open(url, '_blank');
        }
    };

    const handleServiceClick = (service) => {
        alert(`Chuyển đến trang: ${service}`);
    };

    return (
        <footer className="bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                {/* Main Footer Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12"
                >
                    {/* Company Info */}
                    <motion.div variants={itemVariants} className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                                <Building className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold">LIN HOME</h3>
                        </div>

                        <p className="text-slate-300 leading-relaxed mb-6">
                            Với phương châm "Làm đẹp từ tâm", LIN HOME chuyên cung cấp dịch vụ
                            thiết kế và thi công xây dựng chất lượng cao với đội ngũ kiến trúc sư
                            và kỹ sư giàu kinh nghiệm.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {footerData.social.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <motion.button
                                        key={index}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => handleLinkClick(social.link)}
                                        className="w-10 h-10 bg-slate-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                                        title={social.name}
                                    >
                                        <IconComponent className="w-5 h-5" />
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-bold mb-6">Dịch vụ</h3>
                        <ul className="space-y-3">
                            {footerData.services.map((service, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => handleServiceClick(service)}
                                        className="text-slate-300 hover:text-primary-400 transition-colors duration-300 text-left"
                                    >
                                        {service}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Support */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-bold mb-6">Hỗ trợ</h3>
                        <ul className="space-y-3">
                            {footerData.support.map((item, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => alert(`Chuyển đến: ${item}`)}
                                        className="text-slate-300 hover:text-primary-400 transition-colors duration-300 text-left"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-bold mb-6">Liên hệ</h3>
                        <ul className="space-y-4">
                            {footerData.contact.map((contact, index) => {
                                const IconComponent = contact.icon;
                                return (
                                    <li key={index}>
                                        <button
                                            onClick={() => handleLinkClick(contact.link)}
                                            className="flex items-center gap-3 text-slate-300 hover:text-primary-400 transition-colors duration-300 group"
                                        >
                                            <IconComponent className="w-5 h-5 text-primary-500 group-hover:text-primary-400 transition-colors" />
                                            <span>{contact.text}</span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Newsletter Signup */}
                        <div className="mt-8">
                            <h4 className="font-semibold mb-4">Đăng ký nhận tin</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Email của bạn"
                                    className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:border-primary-500 text-white placeholder-slate-400"
                                />
                                <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-r-lg transition-colors duration-300">
                                    <Mail className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="py-8 border-t border-slate-800"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-sm text-center md:text-left">
                            &copy; 2025 LIN HOME. Tất cả quyền được bảo lưu.
                        </p>

                        <div className="flex flex-wrap gap-6 text-sm">
                            <button
                                onClick={() => alert('Chính sách bảo mật')}
                                className="text-slate-400 hover:text-primary-400 transition-colors"
                            >
                                Chính sách bảo mật
                            </button>
                            <button
                                onClick={() => alert('Điều khoản sử dụng')}
                                className="text-slate-400 hover:text-primary-400 transition-colors"
                            >
                                Điều khoản sử dụng
                            </button>
                            <button
                                onClick={() => alert('Sitemap')}
                                className="text-slate-400 hover:text-primary-400 transition-colors"
                            >
                                Sitemap
                            </button>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 pt-6 border-t border-slate-800/50 text-center">
                        <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-400">
                            <div>
                                <span className="font-semibold text-slate-300">Giấy phép kinh doanh:</span>
                                <br />
                                Số 0123456789 do Sở KH&ĐT Hà Nội cấp
                            </div>
                            <div>
                                <span className="font-semibold text-slate-300">Thiết kế bởi:</span>
                                <br />
                                LIN HOME Development Team
                            </div>
                            <div>
                                <span className="font-semibold text-slate-300">Phiên bản:</span>
                                <br />
                                v1.0.0 - Cập nhật cuối: 20/09/2025
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 right-10 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary-500/5 rounded-full blur-3xl" />
            </div>
        </footer>
    );
};

export default Footer;