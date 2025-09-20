import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
    Building,
    Ruler,
    Palette,
    Lightbulb,
    ArrowRight,
    CheckCircle,
    Star,
    TrendingUp,
    Users,
    Award,
    Clock,
    DollarSign
} from 'lucide-react';

// Import components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatButtons from '../../components/FloatButtons';

const ArchitectureDesignPage = () => {
    const [activeSection, setActiveSection] = useState('Thiết kế kiến trúc');

    // Architecture styles data
    const architectureStyles = [
        {
            id: 1,
            name: "Kiến trúc Hiện đại",
            description: "Tập trung vào hình khối đơn giản, mặt tiền phẳng và hệ kính lớn để tối ưu ánh sáng tự nhiên.",
            features: ["Mặt bằng mở", "Tỉ lệ rõ ràng", "Ít chi tiết trang trí", "Tối ưu ánh sáng"],
            materials: "Kính, thép, bê tông, ốp gỗ công nghiệp",
            colors: "Trắng, xám, đen điểm nhấn màu gỗ",
            suitableFor: "Chung cư, nhà phố hiện đại, văn phòng",
            cost: "Trung bình",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><defs><linearGradient id='modern' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23667eea'/><stop offset='100%' style='stop-color:%23764ba2'/></linearGradient></defs><rect width='300' height='200' fill='url(%23modern)'/><rect x='50' y='80' width='200' height='80' fill='rgba(255,255,255,0.9)' rx='4'/><rect x='60' y='90' width='30' height='30' fill='%23667eea' rx='2'/><rect x='100' y='90' width='30' height='30' fill='%23667eea' rx='2'/><rect x='140' y='90' width='30' height='30' fill='%23667eea' rx='2'/><rect x='180' y='90' width='30' height='30' fill='%23667eea' rx='2'/><rect x='220' y='120' width='20' height='30' fill='%23f59e0b' rx='2'/><text x='150' y='180' text-anchor='middle' font-family='Arial' font-size='12' fill='white' font-weight='bold'>Hiện đại</text></svg>"
        },
        {
            id: 2,
            name: "Kiến trúc Cổ điển",
            description: "Nhấn mạnh tính biểu tượng và yếu tố trang trí tinh xảo, thể hiện sự sang trọng.",
            features: ["Phào chỉ tinh xảo", "Cột trang trí", "Mái cổ điển", "Chi tiết điêu khắc"],
            materials: "Đá tự nhiên, thạch cao, gỗ cao cấp, sơn mịn",
            colors: "Kem, be, vàng nhạt và các gam trung tính ấm",
            suitableFor: "Biệt thự, nhà lô cao cấp, công trình trang trọng",
            cost: "Cao",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><defs><linearGradient id='classic' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23f59e0b'/><stop offset='100%' style='stop-color:%23d97706'/></linearGradient></defs><rect width='300' height='200' fill='url(%23classic)'/><rect x='40' y='100' width='220' height='70' fill='rgba(255,255,255,0.9)' rx='8'/><rect x='60' y='80' width='8' height='90' fill='%23d97706' rx='2'/><rect x='90' y='80' width='8' height='90' fill='%23d97706' rx='2'/><rect x='120' y='80' width='8' height='90' fill='%23d97706' rx='2'/><rect x='150' y='80' width='8' height='90' fill='%23d97706' rx='2'/><rect x='180' y='80' width='8' height='90' fill='%23d97706' rx='2'/><rect x='210' y='80' width='8' height='90' fill='%23d97706' rx='2'/><rect x='240' y='80' width='8' height='90' fill='%23d97706' rx='2'/><polygon points='40,100 150,60 260,100' fill='%23d97706'/><text x='150' y='190' text-anchor='middle' font-family='Arial' font-size='12' fill='white' font-weight='bold'>Cổ điển</text></svg>"
        },
        {
            id: 3,
            name: "Kiến trúc Tân cổ điển",
            description: "Kết hợp tinh tế giữa yếu tố cổ điển và các đường nét hiện đại.",
            features: ["Phào chỉ nhẹ nhàng", "Khối cân đối", "Cửa sổ lớn", "Chi tiết tinh tế"],
            materials: "Gỗ, đá ốp, hệ lan can mạ, chi tiết kim loại",
            colors: "Trắng, be, xám nhạt, điểm nhấn vàng",
            suitableFor: "Nhà phố, biệt thự sang trọng không quá nặng nề",
            cost: "Trung cao",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><defs><linearGradient id='neoclassic' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%236366f1'/><stop offset='100%' style='stop-color:%234f46e5'/></linearGradient></defs><rect width='300' height='200' fill='url(%23neoclassic)'/><rect x='50' y='90' width='200' height='80' fill='rgba(255,255,255,0.9)' rx='6'/><rect x='70' y='100' width='25' height='35' fill='%234f46e5' rx='3'/><rect x='105' y='100' width='25' height='35' fill='%234f46e5' rx='3'/><rect x='140' y='100' width='25' height='35' fill='%234f46e5' rx='3'/><rect x='175' y='100' width='25' height='35' fill='%234f46e5' rx='3'/><rect x='210' y='120' width='20' height='35' fill='%23f59e0b' rx='2'/><rect x='60' y='85' width='180' height='5' fill='%234f46e5' rx='2'/><text x='150' y='190' text-anchor='middle' font-family='Arial' font-size='12' fill='white' font-weight='bold'>Tân cổ điển</text></svg>"
        },
        {
            id: 4,
            name: "Kiến trúc Tối giản",
            description: "Thiết kế theo nguyên tắc 'ít nhưng chất': tập trung vào công năng và tỷ lệ.",
            features: ["Mặt phẳng lớn", "Đường nét sắc bén", "Không gian mở", "Ít màu sắc"],
            materials: "Bê tông trần, gỗ, kính, kim loại sơn tĩnh điện",
            colors: "Trắng, xám, đen, màu gỗ tự nhiên",
            suitableFor: "Nhà phố hiện đại, căn hộ nhỏ, không gian làm việc",
            cost: "Trung bình",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><defs><linearGradient id='minimal' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23374151'/><stop offset='100%' style='stop-color:%23111827'/></linearGradient></defs><rect width='300' height='200' fill='url(%23minimal)'/><rect x='60' y='80' width='180' height='90' fill='rgba(255,255,255,0.95)' rx='2'/><rect x='80' y='100' width='40' height='40' fill='%23374151' rx='1'/><rect x='140' y='100' width='40' height='40' fill='%23374151' rx='1'/><rect x='200' y='120' width='20' height='30' fill='%236b7280' rx='1'/><text x='150' y='190' text-anchor='middle' font-family='Arial' font-size='12' fill='white' font-weight='bold'>Tối giản</text></svg>"
        },
        {
            id: 5,
            name: "Kiến trúc Indochine",
            description: "Kết hợp tinh hoa kiến trúc Pháp thời thuộc địa với văn hóa truyền thống Á Đông.",
            features: ["Mái ngói", "Cửa chớp", "Ban công", "Họa tiết truyền thống"],
            materials: "Gỗ tự nhiên, ngói đất nung, đá lát, gạch hoa men",
            colors: "Tông đất ấm, nâu gỗ, kem và xanh nhẹ",
            suitableFor: "Nhà phố truyền thống, biệt thự nghỉ dưỡng",
            cost: "Trung bình đến cao",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><defs><linearGradient id='indochine' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%2392400e'/><stop offset='100%' style='stop-color:%23451a03'/></linearGradient></defs><rect width='300' height='200' fill='url(%23indochine)'/><rect x='50' y='100' width='200' height='70' fill='rgba(255,248,220,0.9)' rx='4'/><rect x='70' y='110' width='20' height='40' fill='%23451a03' rx='2'/><rect x='100' y='110' width='20' height='40' fill='%23451a03' rx='2'/><rect x='130' y='110' width='20' height='40' fill='%23451a03' rx='2'/><rect x='160' y='110' width='20' height='40' fill='%23451a03' rx='2'/><rect x='190' y='110' width='20' height='40' fill='%23451a03' rx='2'/><rect x='220' y='130' width='15' height='25' fill='%23f59e0b' rx='1'/><polygon points='50,100 150,80 250,100' fill='%23dc2626'/><text x='150' y='190' text-anchor='middle' font-family='Arial' font-size='12' fill='white' font-weight='bold'>Indochine</text></svg>"
        },
        {
            id: 6,
            name: "Kiến trúc Xanh",
            description: "Thiết kế hướng đến bền vững, tối ưu sử dụng năng lượng và thân thiện môi trường.",
            features: ["Mái xanh", "Thông gió tự nhiên", "Vật liệu tái chế", "Thu nước mưa"],
            materials: "Gỗ tái tạo, tre, vật liệu cách nhiệt, kính tiết kiệm năng lượng",
            colors: "Tông trung tính, xanh lá, gỗ tự nhiên",
            suitableFor: "Nhà ở tiết kiệm năng lượng, dự án sinh thái",
            cost: "Cao ban đầu, tiết kiệm lâu dài",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><defs><linearGradient id='green' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%2334d399'/><stop offset='100%' style='stop-color:%23059669'/></linearGradient></defs><rect width='300' height='200' fill='url(%23green)'/><rect x='50' y='100' width='200' height='70' fill='rgba(255,255,255,0.9)' rx='4'/><rect x='70' y='110' width='25' height='35' fill='%23059669' rx='2'/><rect x='105' y='110' width='25' height='35' fill='%23059669' rx='2'/><rect x='140' y='110' width='25' height='35' fill='%23059669' rx='2'/><rect x='175' y='110' width='25' height='35' fill='%23059669' rx='2'/><rect x='210' y='125' width='20' height='30' fill='%23f59e0b' rx='2'/><ellipse cx='100' cy='90' rx='20' ry='8' fill='%2334d399'/><ellipse cx='200' cy='90' rx='25' ry='10' fill='%2334d399'/><circle cx='250' cy='60' r='15' fill='%23fbbf24'/><text x='150' y='190' text-anchor='middle' font-family='Arial' font-size='12' fill='white' font-weight='bold'>Xanh bền vững</text></svg>"
        }
    ];

    // Process steps
    const processSteps = [
        {
            step: 1,
            title: "Tư vấn nhu cầu và phong cách",
            description: "Lắng nghe mong muốn và định hướng phong cách phù hợp"
        },
        {
            step: 2,
            title: "Khảo sát hiện trạng, đo đạc",
            description: "Đo đạc chính xác và đánh giá điều kiện thực tế"
        },
        {
            step: 3,
            title: "Lên ý tưởng và bản vẽ sơ bộ",
            description: "Phát triển concept và bản vẽ thiết kế ban đầu"
        },
        {
            step: 4,
            title: "Chốt phương án, triển khai chi tiết",
            description: "Hoàn thiện và phát triển bản vẽ kỹ thuật chi tiết"
        },
        {
            step: 5,
            title: "Bàn giao hồ sơ và hỗ trợ giám sát",
            description: "Bàn giao đầy đủ hồ sơ và hỗ trợ trong quá trình thi công"
        }
    ];

    // Benefits
    const benefits = [
        {
            icon: Award,
            title: "Công trình đẹp, bền vững",
            description: "Thiết kế chuyên nghiệp đảm bảo thẩm mỹ và độ bền"
        },
        {
            icon: TrendingUp,
            title: "Tối ưu công năng",
            description: "Bố trí hợp lý, tận dụng tối đa không gian"
        },
        {
            icon: DollarSign,
            title: "Tiết kiệm chi phí",
            description: "Hạn chế phát sinh trong quá trình thi công"
        },
        {
            icon: Users,
            title: "Đội ngũ chuyên nghiệp",
            description: "Kiến trúc sư giàu kinh nghiệm đồng hành"
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
                <title>Thiết Kế Kiến Trúc - Giải Pháp Tạo Nên Không Gian Sống Hoàn Hảo - LIN HOME</title>
                <meta name="description" content="6+ phong cách thiết kế kiến trúc từ hiện đại đến cổ điển. Quy trình chuyên nghiệp 5 bước, đội ngũ kiến trúc sư giàu kinh nghiệm." />
                <meta name="keywords" content="thiết kế kiến trúc, kiến trúc hiện đại, kiến trúc cổ điển, thiết kế nhà, LIN HOME" />
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
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <Building className="w-12 h-12" />
                                    <h1 className="text-4xl md:text-5xl font-bold">
                                        Thiết Kế Kiến Trúc
                                    </h1>
                                </div>
                                <p className="text-xl mb-8 leading-relaxed">
                                    Giải pháp tạo nên không gian sống hoàn hảo với đa dạng phong cách kiến trúc
                                </p>
                                <div className="flex justify-center gap-8 text-sm">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">6+</div>
                                        <div>Phong cách</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">100+</div>
                                        <div>Dự án</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">10+</div>
                                        <div>Năm kinh nghiệm</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* What is Architecture Design */}
                    <section className="py-20">
                        <div className="container mx-auto px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="max-w-4xl mx-auto text-center mb-16"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                                    Thiết kế kiến trúc là gì?
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Thiết kế kiến trúc là quá trình sáng tạo và tổ chức không gian sống, đảm bảo hài hòa
                                    giữa công năng, thẩm mỹ và phong thủy. Đây là bước quan trọng giúp gia chủ có một
                                    ngôi nhà không chỉ đẹp mà còn tiện nghi và bền vững.
                                </p>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                                        <Lightbulb className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                                        <h3 className="font-bold text-slate-800 mb-2">Định hình phong cách</h3>
                                        <p className="text-sm text-slate-600">Tạo ra bản sắc riêng cho công trình</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                                        <Building className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                                        <h3 className="font-bold text-slate-800 mb-2">Đảm bảo công năng</h3>
                                        <p className="text-sm text-slate-600">Phù hợp nhu cầu sử dụng thực tế</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                                        <DollarSign className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                                        <h3 className="font-bold text-slate-800 mb-2">Tối ưu chi phí</h3>
                                        <p className="text-sm text-slate-600">Kiểm soát ngân sách thi công</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                                        <Star className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                                        <h3 className="font-bold text-slate-800 mb-2">Hài hòa cảnh quan</h3>
                                        <p className="text-sm text-slate-600">Kết hợp với môi trường xung quanh</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Architecture Styles */}
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
                                    Các phong cách thiết kế kiến trúc phổ biến
                                </h2>
                                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                                    Khám phá đa dạng phong cách thiết kế để tìm ra lựa chọn phù hợp nhất
                                </p>
                            </motion.div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid lg:grid-cols-2 gap-8"
                            >
                                {architectureStyles.map((style) => (
                                    <motion.div
                                        key={style.id}
                                        variants={itemVariants}
                                        className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <div className="flex gap-6">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={style.image}
                                                    alt={style.name}
                                                    className="w-24 h-16 rounded-lg object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-slate-800 mb-2">
                                                    {style.name}
                                                </h3>
                                                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                                    {style.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                                            <div>
                                                <h4 className="font-semibold text-slate-800 text-sm mb-2">Đặc trưng:</h4>
                                                <ul className="text-xs text-slate-600 space-y-1">
                                                    {style.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-center gap-2">
                                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-800 text-sm mb-2">Vật liệu:</h4>
                                                <p className="text-xs text-slate-600 mb-3">{style.materials}</p>

                                                <h4 className="font-semibold text-slate-800 text-sm mb-2">Màu sắc:</h4>
                                                <p className="text-xs text-slate-600 mb-3">{style.colors}</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                                            <div>
                                                <span className="text-xs text-slate-500">Phù hợp cho:</span>
                                                <p className="text-sm text-slate-700">{style.suitableFor}</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs text-slate-500">Chi phí:</span>
                                                <p className="text-sm font-semibold text-primary-600">{style.cost}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    {/* Process Section */}
                    <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-100">
                        <div className="container mx-auto px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                                    Quy trình thiết kế kiến trúc
                                </h2>
                                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                                    5 bước chuyên nghiệp đảm bảo chất lượng thiết kế
                                </p>
                            </motion.div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Process Timeline */}
                                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>

                                {processSteps.map((step, index) => (
                                    <motion.div
                                        key={step.step}
                                        variants={itemVariants}
                                        className={`flex items-center mb-12 ${
                                            index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        }`}
                                    >
                                        <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                        {step.step}
                                                    </div>
                                                    <h3 className="font-bold text-slate-800">{step.title}</h3>
                                                </div>
                                                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>

                                        <div className="hidden lg:block w-4 h-4 bg-white border-4 border-primary-500 rounded-full relative z-10"></div>

                                        <div className="flex-1"></div>
                                    </motion.div>
                                ))}
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
                                    Lợi ích khi sử dụng dịch vụ thiết kế kiến trúc chuyên nghiệp
                                </h2>
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
                                    Sẵn sàng thiết kế ngôi nhà mơ ước?
                                </h2>
                                <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
                                    Việc lựa chọn đơn vị thiết kế uy tín sẽ giúp bạn tiết kiệm chi phí,
                                    đảm bảo tiến độ và sở hữu một không gian sống lý tưởng.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => window.open('tel:0963459288', '_self')}
                                        className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                                    >
                                        Tư vấn thiết kế miễn phí
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => window.location.href = '/'}
                                        className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                                    >
                                        Xem portfolio kiến trúc
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

export default ArchitectureDesignPage;