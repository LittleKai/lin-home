import React from 'react';
import { motion } from 'framer-motion';
import {
    Calculator,
    Calendar,
    Ruler,
    Compass,
    Palette,
    Cube,
    ExternalLink,
    Smartphone
} from 'lucide-react';

const AppsSection = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Apps data with enhanced information
    const appsList = [
        {
            title: 'Ứng dụng Tính chi phí xây dựng',
            description: 'Ứng dụng dự toán nhà phố do chính LIN HOME phát triển, có độ chính xác trên 95%, đơn giá thi công xây dựng được cập nhật thường xuyên theo tỉnh thành.',
            icon: Calculator,
            link: '/vn/tinh-chi-phi-xay-dung.html',
            color: 'from-emerald-500 to-green-600',
            features: ['Độ chính xác 95%', 'Cập nhật đơn giá', 'Gợi ý thông minh']
        },
        {
            title: 'Ứng dụng xem Tuổi làm nhà',
            description: 'Theo khoa học phong thủy, để việc thi công được thuận buồm xuôi gió thì cần xem tuổi của chủ nhà phù hợp với năm làm nhà hay không.',
            icon: Calendar,
            link: '/vn/xem-tuoi-lam-nha.html',
            color: 'from-amber-500 to-orange-600',
            features: ['Phong thủy chính xác', 'Tránh năm xấu', 'Tư vấn động thổ']
        },
        {
            title: 'Ứng dụng xem Thước lỗ ban trực tuyến',
            description: 'Thước lỗ ban là thước sử dụng đo đạc xây dựng Dương Trạch (nhà cửa) và Âm Trạch (mộ phần). Giúp người sử dụng biết được kích thước thế nào là đẹp.',
            icon: Ruler,
            link: '/vn/thuoc-lo-ban-truc-tuyen.html',
            color: 'from-blue-500 to-indigo-600',
            features: ['Đo đạc chính xác', 'Phân định tốt xấu', 'Kích thước chuẩn']
        },
        {
            title: 'Ứng dụng xem Hướng nhà hợp tuổi',
            description: 'Xem hướng hợp với tuổi là một phần quan trọng trong thuật phong thuỷ, một ngôi nhà tốt sẽ mang tới may mắn, thịnh vượng cho gia chủ.',
            icon: Compass,
            link: '/vn/xem-huong-lam-nha.html',
            color: 'from-red-500 to-pink-600',
            features: ['Hướng nhà chuẩn', 'Hợp tuổi gia chủ', 'Mang lại cát lợi']
        },
        {
            title: 'Ứng dụng xem Màu hợp tuổi',
            description: 'Theo quan điểm phong thủy, màu sắc hình thành các trường năng lượng khác nhau, tương sinh hoặc tương khắc với bản mệnh theo ngũ hành.',
            icon: Palette,
            link: '/vn/xem-mau-hop-tuoi.html',
            color: 'from-purple-500 to-violet-600',
            features: ['Màu sắc hợp mệnh', 'Năng lượng tích cực', 'Cân bằng ngũ hành']
        },
        {
            title: 'Ứng dụng thiết kế 3D',
            description: 'Công cụ thiết kế 3D trực tuyến giúp bạn tạo ra các mô hình kiến trúc chi tiết và chân thực trước khi thi công thực tế.',
            icon: Cube,
            link: '/vn/thiet-ke-3d.html',
            color: 'from-cyan-500 to-teal-600',
            features: ['Thiết kế 3D', 'Mô phỏng thực tế', 'Dễ sử dụng']
        }
    ];

    // Handle app click
    const handleAppClick = (app) => {
        if (typeof window !== 'undefined') {
            window.open(app.link, '_blank');
        }
    };

    return (
        <section id="apps" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000000' fill-opacity='0.1'%3e%3ccircle cx='30' cy='30' r='1.5'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
                    maskImage: 'radial-gradient(ellipse at center, white, transparent)'
                }} />
            </div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
            <div className="absolute top-40 right-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-4">
                        <Smartphone className="w-5 h-5" />
                        <span>Ứng dụng di động</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                        Ứng dụng <span className="text-blue-600">Thông minh</span>
                    </h2>

                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Tính toán chi phí, xem phong thủy và quản lý dự án ngay trên điện thoại.
                    </p>
                </motion.div>

                {/* Apps Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {appsList.map((app, index) => {
                        const IconComponent = app.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer relative overflow-hidden"
                                onClick={() => handleAppClick(app)}
                            >
                                {/* Background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-r ${app.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                                        {app.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                                        {app.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {app.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full border group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Button */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                                            Sử dụng ngay
                                        </span>
                                        {ExternalLink && (
                                            <ExternalLink className="w-5 h-5 text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300" />
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Mobile App Download Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center overflow-hidden relative"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="w-full h-full" style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3e%3cg fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.03'%3e%3ccircle cx='50' cy='50' r='4'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
                        }} />
                    </div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-3 bg-white/10 text-white px-6 py-3 rounded-full font-medium mb-6">
                            <Smartphone className="w-6 h-6" />
                            <span>Tải app ngay</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Trải nghiệm trên <span className="text-blue-400">di động</span>
                        </h3>

                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            Tính toán chi phí, xem phong thủy và quản lý dự án ngay trên điện thoại.
                        </p>

                        {/* Download Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => alert('Tải ứng dụng iOS')}
                                className="bg-white text-slate-800 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-3 hover:shadow-lg transition-shadow"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                                App Store
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => alert('Tải ứng dụng Android')}
                                className="bg-white text-slate-800 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-3 hover:shadow-lg transition-shadow"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                </svg>
                                Google Play
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AppsSection;