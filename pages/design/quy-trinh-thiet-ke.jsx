import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
    MessageCircle,
    Calculator,
    Search,
    Lightbulb,
    Settings,
    FileText,
    CheckCircle,
    Headphones,
    ArrowRight,
    Users,
    Clock,
    Award
} from 'lucide-react';

// Import components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatButtons from '../../components/FloatButtons';

const DesignProcessPage = () => {
    const [activeSection, setActiveSection] = useState('Quy trình thiết kế');

    // Process steps data
    const processSteps = [
        {
            id: 1,
            icon: MessageCircle,
            title: "Tư vấn nhu cầu và phong cách thiết kế sơ bộ",
            description: "Lắng nghe mong muốn, sở thích và thói quen sinh hoạt của gia đình. Tư vấn sơ bộ về phong cách phù hợp: hiện đại, tân cổ điển, tối giản, Scandinavian...",
            details: [
                "Tư vấn trực tiếp hoặc online",
                "Định hướng phong cách phù hợp",
                "Tư vấn ngân sách và vật liệu",
                "Tạo nền tảng cho các bước tiếp theo"
            ],
            color: "from-blue-500 to-blue-600"
        },
        {
            id: 2,
            icon: Calculator,
            title: "Báo giá chi phí thiết kế nội thất, kiến trúc",
            description: "Gửi báo giá chi tiết bao gồm phí thiết kế bản vẽ 2D, 3D, triển khai hồ sơ kỹ thuật và dự toán thi công sơ bộ.",
            details: [
                "Phí thiết kế bản vẽ 2D, 3D",
                "Phí triển khai hồ sơ kỹ thuật",
                "Dự toán thi công sơ bộ",
                "Báo giá minh bạch, chi tiết"
            ],
            color: "from-green-500 to-green-600"
        },
        {
            id: 3,
            icon: Search,
            title: "Khảo sát, đo đạc hiện trạng và ký hợp đồng",
            description: "Đo đạc diện tích, kiểm tra hiện trạng tường, sàn, trần, hệ thống điện nước và ghi nhận các yếu tố ánh sáng, hướng nhà.",
            details: [
                "Đo đạc diện tích chính xác",
                "Kiểm tra hiện trạng công trình",
                "Ghi nhận yếu tố ánh sáng, hướng nhà",
                "Ký hợp đồng thiết kế"
            ],
            color: "from-purple-500 to-purple-600"
        },
        {
            id: 4,
            icon: Lightbulb,
            title: "Lên ý tưởng bản vẽ 2D, 3D có yếu tố phong thủy",
            description: "Triển khai bản vẽ 2D bố trí mặt bằng và dựng phối cảnh 3D chi tiết với màu sắc, chất liệu, ánh sáng và đồ nội thất.",
            details: [
                "Bản vẽ 2D bố trí mặt bằng",
                "Phối cảnh 3D chi tiết",
                "Cân nhắc yếu tố phong thủy",
                "Màu sắc hợp mệnh gia chủ"
            ],
            color: "from-yellow-500 to-orange-500"
        },
        {
            id: 5,
            icon: Settings,
            title: "Điều chỉnh và chốt phương án thiết kế",
            description: "Khách hàng đóng góp ý kiến chỉnh sửa thông qua nhóm làm việc online hoặc trao đổi trực tiếp cho đến khi đạt phương án tối ưu.",
            details: [
                "Trình bày bản vẽ 2D, 3D",
                "Nhận góp ý từ khách hàng",
                "Điều chỉnh theo mong muốn",
                "Chốt phương án cuối cùng"
            ],
            color: "from-red-500 to-pink-500"
        },
        {
            id: 6,
            icon: FileText,
            title: "Triển khai hồ sơ kỹ thuật và dự toán",
            description: "Hoàn thiện bộ hồ sơ kỹ thuật chi tiết bao gồm bản vẽ kỹ thuật, kết cấu, hệ thống điện nước và dự toán khối lượng.",
            details: [
                "Bản vẽ kỹ thuật chi tiết",
                "Bản vẽ kết cấu xây dựng",
                "Hệ thống điện, nước, chiếu sáng",
                "Dự toán khối lượng và chi phí"
            ],
            color: "from-indigo-500 to-blue-600"
        },
        {
            id: 7,
            icon: CheckCircle,
            title: "Kiểm tra và bàn giao hồ sơ",
            description: "Kiểm tra toàn bộ bản vẽ đảm bảo không có sai sót, sau đó bàn giao hồ sơ cả bản giấy và bản mềm cho khách hàng.",
            details: [
                "Kiểm tra toàn bộ bản vẽ",
                "Đảm bảo không có sai sót",
                "Bàn giao bản giấy và bản mềm",
                "Giải đáp thắc mắc khách hàng"
            ],
            color: "from-emerald-500 to-green-600"
        },
        {
            id: 8,
            icon: Headphones,
            title: "Hỗ trợ giám sát và tư vấn online",
            description: "Hỗ trợ giám sát tác giả và tư vấn online trong quá trình thi công để đảm bảo thực hiện đúng bản vẽ thiết kế.",
            details: [
                "Giám sát tác giả trong thi công",
                "Tư vấn online 24/7",
                "Đảm bảo đúng bản vẽ thiết kế",
                "Xử lý tình huống phát sinh"
            ],
            color: "from-cyan-500 to-blue-500"
        }
    ];

    // Benefits data
    const benefits = [
        {
            icon: Clock,
            title: "Tiết kiệm thời gian",
            description: "Quy trình khoa học, rút ngắn thời gian thiết kế"
        },
        {
            icon: Calculator,
            title: "Chi phí minh bạch",
            description: "Báo giá rõ ràng, tránh phát sinh không cần thiết"
        },
        {
            icon: Users,
            title: "Đội ngũ chuyên nghiệp",
            description: "Kiến trúc sư nội thất giàu kinh nghiệm"
        },
        {
            icon: Award,
            title: "Chất lượng đảm bảo",
            description: "Hồ sơ chi tiết, hỗ trợ phong thủy"
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

    const itemVariants = {
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
        <>
            <Head>
                <title>Quy Trình Thiết Kế Nội Thất Trọn Gói - LIN HOME</title>
                <meta name="description" content="8 bước quy trình thiết kế nội thất chuyên nghiệp từ ý tưởng đến hồ sơ hoàn thiện. Đội ngũ kiến trúc sư giàu kinh nghiệm, báo giá minh bạch." />
                <meta name="keywords" content="quy trình thiết kế nội thất, thiết kế trọn gói, kiến trúc sư nội thất, LIN HOME" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
                {/* Header */}
                <Header activeSection={activeSection} setActiveSection={setActiveSection} />

                <div className="pt-20">
                    {/* Hero Section */}
                    <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                        <div className="container mx-auto px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-center max-w-4xl mx-auto"
                            >
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    Quy Trình Thiết Kế Nội Thất Trọn Gói
                                </h1>
                                <p className="text-xl mb-8 leading-relaxed">
                                    8 bước chuyên nghiệp từ ý tưởng đến hồ sơ hoàn thiện
                                </p>
                                <div className="flex justify-center gap-8 text-sm">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">8</div>
                                        <div>Bước tiêu chuẩn</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">100%</div>
                                        <div>Minh bạch</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">24/7</div>
                                        <div>Hỗ trợ</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Process Steps */}
                    <section className="py-20">
                        <div className="container mx-auto px-6">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-12"
                            >
                                {processSteps.map((step, index) => {
                                    const IconComponent = step.icon;
                                    const isEven = index % 2 === 0;

                                    return (
                                        <motion.div
                                            key={step.id}
                                            variants={itemVariants}
                                            className={`flex flex-col lg:flex-row items-center gap-12 ${
                                                !isEven ? 'lg:flex-row-reverse' : ''
                                            }`}
                                        >
                                            {/* Content */}
                                            <div className="flex-1">
                                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                                    <div className="flex items-center gap-4 mb-6">
                                                        <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white`}>
                                                            <IconComponent className="w-8 h-8" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-semibold text-primary-500 mb-1">
                                                                Bước {step.id}
                                                            </div>
                                                            <h3 className="text-xl font-bold text-slate-800">
                                                                {step.title}
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                                        {step.description}
                                                    </p>

                                                    <div className="grid md:grid-cols-2 gap-3">
                                                        {step.details.map((detail, idx) => (
                                                            <div key={idx} className="flex items-center gap-2">
                                                                <ArrowRight className="w-4 h-4 text-primary-500" />
                                                                <span className="text-sm text-slate-700">{detail}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Step Number Visual */}
                                            <div className="flex-shrink-0">
                                                <div className={`w-32 h-32 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white shadow-2xl`}>
                                                    <span className="text-4xl font-bold">{step.id}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </section>

                    {/* Benefits Section */}
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                                    Lợi ích khi chọn dịch vụ thiết kế trọn gói
                                </h2>
                                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                                    Quy trình chuyên nghiệp mang lại nhiều giá trị cho khách hàng
                                </p>
                            </motion.div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            >
                                {benefits.map((benefit, index) => {
                                    const IconComponent = benefit.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 hover:from-primary-100 hover:to-blue-100 transition-colors duration-300"
                                        >
                                            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                                                <IconComponent className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-800 mb-2">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                        <div className="container mx-auto px-6 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Sẵn sàng bắt đầu dự án thiết kế của bạn?
                                </h2>
                                <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
                                    Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => window.open('tel:0963459288', '_self')}
                                        className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                                    >
                                        Tư vấn miễn phí
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => window.location.href = '/'}
                                        className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                                    >
                                        Xem portfolio
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <Footer />

                {/* Floating Buttons */}
                <FloatButtons />
            </div>
        </>
    );
};

export default DesignProcessPage;