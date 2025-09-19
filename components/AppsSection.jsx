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
    // Apps data from original file with enhanced information
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
            features: ['Màu sắc hợp mệnh', 'Năng lượng tích cực', 'Ngũ hành chuẩn']
        },
        {
            title: 'Ứng dụng thiết kế 3D',
            description: 'Công cụ thiết kế 3D trực tuyến giúp bạn tạo ra mô hình ngôi nhà mơ ước một cách dễ dàng. Với giao diện thân thiện và thư viện vật liệu phong phú, bạn có thể visualize ý tưởng thiết kế trước khi thi công thực tế, tiết kiệm thời gian và chi phí.',
            icon: Cube,
            link: '/vn/thiet-ke-3d.html',
            color: 'from-cyan-500 to-blue-600',
            features: ['Thiết kế 3D', 'Thư viện phong phú', 'Tiết kiệm chi phí']
        }
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

    const handleAppClick = (app) => {
        alert(`Chuyển đến: ${app.title}`);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block bg-primary-500/20 text-primary-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-primary-500/30">
                        Công cụ hỗ trợ
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Ứng dụng tiện ích
                    </h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Bộ công cụ toàn diện hỗ trợ khách hàng trong quá trình
                        thiết kế và xây dựng ngôi nhà
                    </p>
                </motion.div>

                {/* Apps Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {appsList.map((app, index) => {
                        const IconComponent = app.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/15"
                            >
                                <div className="flex gap-6">
                                    {/* App Icon */}
                                    <div className={`w-20 h-20 bg-gradient-to-r ${app.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <IconComponent className="w-10 h-10 text-white" />
                                    </div>

                                    {/* App Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-300 transition-colors">
                                            {app.title}
                                        </h3>

                                        <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                                            {app.description}
                                        </p>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {app.features.map((feature, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
                                                >
                          {feature}
                        </span>
                                            ))}
                                        </div>

                                        {/* Action Button */}
                                        <button
                                            onClick={() => handleAppClick(app)}
                                            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors group/btn"
                                        >
                                            <span>Truy cập ứng dụng</span>
                                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl p-8 md:p-12 border border-primary-500/30 backdrop-blur-sm">
                        <Smartphone className="w-16 h-16 text-primary-400 mx-auto mb-6" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Tải xuống toàn bộ ứng dụng
                        </h3>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Truy cập tất cả các công cụ hỗ trợ trên điện thoại của bạn để có trải nghiệm tốt nhất
                        </p>
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