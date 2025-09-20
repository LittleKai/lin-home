import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
    Send
} from 'lucide-react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });
    };

    // Contact information data
    const contactInfo = [
        {
            icon: Phone,
            title: 'Điện thoại',
            content: '0963 459 288',
            link: 'tel:0963459288',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: Mail,
            title: 'Email',
            content: 'info@linhome.vn',
            link: 'mailto:info@linhome.vn',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: MapPin,
            title: 'Địa chỉ',
            content: 'Hà Nội, Việt Nam',
            link: 'https://maps.google.com/?q=Hà+Nội,+Việt+Nam',
            color: 'from-red-500 to-red-600'
        },
        {
            icon: Clock,
            title: 'Giờ làm việc',
            content: 'T2-T6: 8:00-18:00, T7: 8:00-12:00',
            link: null,
            color: 'from-purple-500 to-purple-600'
        }
    ];

    // Social media links
    const socialLinks = [
        { icon: Facebook, name: 'Facebook', link: 'https://facebook.com/linhome.vn' },
        { icon: Instagram, name: 'Instagram', link: 'https://instagram.com/linhome.vn' },
        { icon: Youtube, name: 'YouTube', link: 'https://youtube.com/linhome.vn' },
        { icon: Linkedin, name: 'LinkedIn', link: 'https://linkedin.com/company/linhome' }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
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

    // Handle contact item click
    const handleContactClick = (link) => {
        if (link) {
            if (link.startsWith('tel:') || link.startsWith('mailto:')) {
                window.open(link, '_self');
            } else {
                window.open(link, '_blank');
            }
        }
    };

    return (
        <section id="contact" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        Liên hệ với chúng tôi
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                        Bắt đầu dự án của bạn
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Hãy để chúng tôi biết về dự án mơ ước của bạn.
                        Đội ngũ chuyên gia sẽ tư vấn miễn phí và chi tiết nhất.
                    </p>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-12 items-start"
                >
                    {/* Contact Information */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-800 mb-8">
                                Thông tin liên hệ
                            </h3>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => {
                                    const IconComponent = info.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ x: 4 }}
                                            className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                                                info.link
                                                    ? 'hover:bg-slate-50 cursor-pointer'
                                                    : ''
                                            }`}
                                            onClick={() => handleContactClick(info.link)}
                                        >
                                            <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-800 mb-1">
                                                    {info.title}
                                                </h4>
                                                <p className="text-slate-600">
                                                    {info.content}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Social Media */}
                            <div className="mt-8 pt-8 border-t border-slate-200">
                                <h4 className="font-semibold text-slate-800 mb-4">
                                    Theo dõi chúng tôi
                                </h4>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => {
                                        const IconComponent = social.icon;
                                        return (
                                            <motion.button
                                                key={index}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => window.open(social.link, '_blank')}
                                                className="w-12 h-12 bg-slate-100 hover:bg-primary-500 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group"
                                                title={social.name}
                                            >
                                                <IconComponent className="w-5 h-5" />
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Quick Contact Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.open('tel:0963459288', '_self')}
                                className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Phone className="w-5 h-5" />
                                Gọi ngay
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.open('https://zalo.me/0963459288', '_blank')}
                                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-5 h-5 bg-white rounded text-blue-600 flex items-center justify-center text-xs font-bold">
                                    Z
                                </div>
                                Chat Zalo
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={itemVariants}>
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-800 mb-8">
                                Gửi yêu cầu tư vấn
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Họ và tên *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Nhập họ và tên của bạn"
                                            required
                                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Số điện thoại *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Nhập số điện thoại"
                                            required
                                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Nhập địa chỉ email"
                                        required
                                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Dịch vụ quan tâm
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors bg-white"
                                    >
                                        <option value="">Chọn dịch vụ</option>
                                        <option value="thiet-ke-kien-truc">Thiết kế kiến trúc</option>
                                        <option value="thi-cong-xay-dung">Thi công xây dựng</option>
                                        <option value="thiet-ke-noi-that">Thiết kế nội thất</option>
                                        <option value="thiet-ke-san-vuon">Thiết kế sân vườn</option>
                                        <option value="sua-chua-cai-tao">Sửa chữa cải tạo</option>
                                        <option value="tu-van-bao-gia">Tư vấn báo giá</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Tin nhắn
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Mô tả chi tiết về dự án hoặc yêu cầu của bạn..."
                                        rows="5"
                                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors resize-vertical"
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Send className="w-5 h-5" />
                                    Gửi yêu cầu
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Tư vấn miễn phí 24/7
                        </h3>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn trong mọi thắc mắc về dự án xây dựng
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.open('tel:0963459288', '_self')}
                                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
                            >
                                Hotline: 0963 459 288
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.open('mailto:info@linhome.vn', '_self')}
                                className="bg-white/20 border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all backdrop-blur-sm"
                            >
                                Email: info@linhome.vn
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;