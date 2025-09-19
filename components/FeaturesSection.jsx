import { motion } from 'framer-motion';
import {
    Compass,
    HardHat,
    Home,
    Leaf,
    Calculator,
    Wrench,
    ArrowRight
} from 'lucide-react';

const FeaturesSection = () => {
    // Features data from original file
    const features = [
        {
            icon: Compass,
            title: 'Thiết kế kiến trúc',
            description: 'Thiết kế các công trình từ nhà ở đến các dự án lớn với phong cách hiện đại và tiện nghi.',
            link: 'Xem chi tiết',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: HardHat,
            title: 'Thi công xây dựng',
            description: 'Thi công trọn gói từ móng đến hoàn thiện với đội ngũ thợ lành nghề và giám sát chặt chẽ.',
            link: 'Xem chi tiết',
            color: 'from-orange-500 to-orange-600'
        },
        {
            icon: Home,
            title: 'Thiết kế nội thất',
            description: 'Tạo không gian sống hoàn hảo với các phong cách nội thất đa dạng và hiện đại.',
            link: 'Xem chi tiết',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: Leaf,
            title: 'Thiết kế sân vườn',
            description: 'Thiết kế cảnh quan sân vườn xanh mát, hài hòa với thiên nhiên và kiến trúc tổng thể.',
            link: 'Xem chi tiết',
            color: 'from-emerald-500 to-emerald-600'
        },
        {
            icon: Calculator,
            title: 'Tư vấn báo giá',
            description: 'Báo giá minh bạch, chi tiết cho từng hạng mục công việc và vật tư xây dựng.',
            link: 'Xem chi tiết',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: Wrench,
            title: 'Sửa chữa cải tạo',
            description: 'Dịch vụ sửa chữa, cải tạo, nâng cấp các công trình hiện có một cách chuyên nghiệp.',
            link: 'Xem chi tiết',
            color: 'from-red-500 to-red-600'
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

    const handleFeatureClick = (title) => {
        alert(`Chuyển đến trang: ${title}`);
    };

    return (
        <section id="features" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        Dịch vụ chuyên nghiệp
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                        Dịch vụ của chúng tôi
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Cung cấp giải pháp toàn diện cho mọi nhu cầu xây dựng
                        từ thiết kế đến thi công hoàn thiện
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
                            >
                                {/* Top gradient line */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`} />

                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComponent className="w-8 h-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {feature.description}
                                </p>

                                {/* Link */}
                                <button
                                    onClick={() => handleFeatureClick(feature.title)}
                                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all duration-300 group/link"
                                >
                                    <span>{feature.link}</span>
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </button>

                                {/* Hover Effect Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Bắt đầu dự án của bạn ngay hôm nay
                        </h3>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.open('tel:0963459288', '_self')}
                                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
                            >
                                Gọi ngay: 0963 459 288
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white/20 border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all backdrop-blur-sm"
                            >
                                Nhận tư vấn miễn phí
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;