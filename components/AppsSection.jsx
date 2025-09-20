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
    // Apps data with enhanced information
    const appsList = [
        {
            title: 'Ứng dụng Tính chi phí xây dựng',
            description: 'Ứng dụng dự toán nhà phố do chính LIN HOME phát triển, có độ chính xác trên 95%, đơn giá thi công xây dựng được cập nhật thường xuyên theo tỉnh thành. Là ứng dụng dự toán thông minh, sau khi có kết quả sẽ gợi ý các công trình phù hợp với yêu cầu của chủ đầu tư.',
            icon: Calculator,
            link: '/vn/tinh-chi-phi-xay-dung.html',
            color: 'from-emerald-500 to-green-600',
            features: ['Độ chính xác 95%', 'Cập nhật đơn giá', 'Gợi ý thông minh']
        },
        {
            title: 'Ứng dụng xem Tuổi làm nhà',
            description: 'Theo khoa học phong thủy, để việc thi công được thuận buồm xuôi gió thì cần xem tuổi của chủ nhà phù hợp với năm làm nhà hay không. Nên tránh phạm vào 3 năm: Kim Lâu, Hoang Ốc, Tam Tai. Cả đời một con người chỉ còn lại khoảng 17 năm để có thể tiến hành động thổ.',
            icon: Calendar,
            link: '/vn/xem-tuoi-lam-nha.html',
            color: 'from-amber-500 to-orange-600',
            features: ['Phong thủy chính xác', 'Tránh năm xấu', 'Tư vấn động thổ']
        },
        {
            title: 'Ứng dụng xem Thước lỗ ban trực tuyến',
            description: 'Thước lỗ ban là thước sử dụng đo đạc xây dựng Dương Trạch (nhà cửa) và Âm Trạch (mộ phần). Trên thước lỗ ban có chia kích thước địa lý thông thường và các cung giúp phân định các khoảng tốt xấu. Giúp người sử dụng biết được kích thước thế nào là đẹp nên sử dụng.',
            icon: Ruler,
            link: '/vn/thuoc-lo-ban-truc-tuyen.html',
            color: 'from-blue-500 to-indigo-600',
            features: ['Đo đạc chính xác', 'Phân định tốt xấu', 'Kích thước chuẩn']
        },
        {
            title: 'Ứng dụng xem Hướng nhà hợp tuổi',
            description: 'Xem hướng hợp với tuổi là một phần quan trọng trong thuật phong thuỷ, một ngôi nhà tốt sẽ mang tới may mắn, thịnh vượng và sung túc cho gia chủ suốt cuộc đời. Xem hướng nhà theo tuổi là một trong những yếu tố để đảm bảo ngôi nhà hợp phong thủy, mang lại cát lợi.',
            icon: Compass,
            link: '/vn/xem-huong-lam-nha.html',
            color: 'from-red-500 to-pink-600',
            features: ['Hướng nhà chuẩn', 'Hợp tuổi gia chủ', 'Mang lại cát lợi']
        },
        {
            title: 'Ứng dụng xem Màu hợp tuổi',
            description: 'Bên cạnh các yếu tố như bố cục, phương hướng, bố trí không gian, chức năng… thì màu sắc của ngôi nhà cũng ảnh hưởng không nhỏ tới môi trường nhà ở. Theo quan điểm phong thủy, màu sắc hình thành các trường năng lượng khác nhau, tương sinh hoặc tương khắc với bản mệnh theo ngũ hành.',
            icon: Palette,
            link: '/vn/xem-mau-hop-tuoi.html',
            color: 'from-purple-500 to-violet-600',
            features: ['Màu sắc phong thủy', 'Hợp bản mệnh', 'Năng lượng tích cực']
        },
        {
            title: 'Ứng dụng xem Kích thước hợp phong thủy',
            description: 'Kích thước các không gian trong nhà theo phong thủy ảnh hưởng trực tiếp đến vận khí và cuộc sống của gia chủ. Ứng dụng giúp tính toán kích thước phòng ăn, phòng ngủ, phòng khách theo các quy tắc phong thủy truyền thống.',
            icon: Cube,
            link: '/vn/kich-thuoc-phong-thuy.html',
            color: 'from-teal-500 to-cyan-600',
            features: ['Kích thước chuẩn', 'Theo phong thủy', 'Vận khí tốt']
        }
    ];

    // Handle app click
    const handleAppClick = (app) => {
        window.open(app.link, '_blank');
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

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
            <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Smartphone className="w-4 h-4" />
                        Ứng dụng thông minh
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        Công cụ hỗ trợ
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> thông minh</span>
                    </h2>

                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Bộ công cụ độc quyền được phát triển bởi LIN HOME giúp bạn dễ dàng tính toán chi phí,
                        xem phong thủy và lên kế hoạch xây dựng một cách chính xác và khoa học.
                    </p>
                </motion.div>

                {/* Apps Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                                    <IconComponent className="w-8 h-8 text-white" />
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
                                        <ExternalLink className="w-5 h-5 text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Download Mobile Apps Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20"
                >
                    <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                        {/* Background decorations */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <Smartphone className="w-4 h-4" />
                                Ứng dụng di động
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold mb-6">
                                Tải ứng dụng LIN HOME
                            </h3>

                            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                                Truy cập mọi lúc mọi nơi với ứng dụng di động LIN HOME.
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
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Đảm bảo export default
export default AppsSection;