// Import components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatButtons from '../../components/FloatButtons';

const InteriorDesignPage = () => {
    const [activeSection, setActiveSection] = useState('Thiết kế nội thất');

    // Interior design styles data
    const interiorStyles = [
        {
            id: 1,
            name: "Nội thất Hiện đại",
            description: "Tập trung vào tính thực dụng, đường nét gọn gàng, dễ ứng dụng trong không gian đô thị.",
            features: ["Đường thẳng", "Bề mặt phẳng", "Đồ nội thất đa chức năng", "Tối ưu lưu trữ"],
            materials: "Kính, kim loại, gỗ công nghiệp, MDF phủ Veneer",
            colors: "Trung tính (trắng, xám, be) với điểm nhấn nổi",
            suitableFor: "Chung cư, nhà phố hiện đại",
            notes: "Tối ưu hệ lưu trữ, chú trọng ánh sáng",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><defs><linearGradient id='modern' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23667eea'/><stop offset='100%' style='stop-color:%23764ba2'/></linearGradient></defs><rect width='300' height='200' fill='url(%23modern)'/><rect x='30' y='120' width='240' height='60' fill='rgba(255,255,255,0.95)' rx='8'/><rect x='50' y='100' width='60' height='60' fill='%23667eea' rx='4'/><rect x='120' y='100' width='60' height='60' fill='%23667eea' rx='4'/><rect x='190' y='100' width='60' height='60' fill='%23667eea' rx='4'/><rect x='40' y='40' width='220' height='4' fill='%23667eea' rx='2'/><circle cx='80' cy='60' r='6' fill='%23764ba2'/><circle cx='150' cy='60' r='6' fill='%23764ba2'/><circle cx='220' cy='60' r='6' fill='%23764ba2'/><text x='150' y='190' text-anchor='middle' font-family='Arial' font-size='12' fill='white' font-weight='bold'>Modern Interior</text></svg>"
        },
        {
            id: 2,
            name: "Nội thất Tân cổ điển",
            description: "Kết hợp đường nét cổ điển tinh tế với công năng hiện đại.",
            features: ["Phào chỉ mềm mại", "Đồ nội thất cong", "Đèn chùm", "Chi tiết dát kim loại"],
            materials: "Da, vải nhung, đá marble, gỗ tự nhiên",
            colors: "Kem, vàng ánh kim, xanh đậm, nâu gỗ",
            suitableFor: "Phòng khách biệt thự, phòng ngủ master cao cấp",
            notes: "Cân bằng sang trọng và tiện dụng",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><defs><linearGradient id='neoclassic' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23f59e0b'/><stop offset='100%' style='stop-color:%23d97706'/></linearGradient></defs><rect width='300' height='200' fill='url(%23neoclassic)'/><rect x='40' y='100' width='220' height='80' fill='rgba(255,255,255,0.95)' rx='12'/><rect x='60' y='120' width='40' height='40' fill='%23d97706' rx='8'/><rect x='110' y='120' width='40' height='40' fill='%23d97706' rx='8'/><rect x='160' y='120' width='40' height='40' fill='%23d97706' rx='8'/><rect x='210' y='120' width='40' height='40' fill='%23d97706' rx='8'/><circle cx='150' cy='60' r='20' fill='%23fbbf24' opacity='0.8'/><rect x='50' y='95' width='200' height='5' fill='%23f59e0b' rx='2'/><text x='150' y='190' text-anchor='middle' font-family='Arial' font-size='12' fill='white' font-weight='bold'>Neoclassic Interior</text></svg>"
        },
        {
            id: 3,
            name: "Nội thất Tối giản (Minimalism)",
            description: "'Ít nhưng chất' - tập trung vào trải nghiệm và công năng.",
            features: ["Đồ ít", "Không gian thoáng", "Mặt phẳng lớn", "Màu sắc hạn chế"],
            materials: "Gỗ sáng màu, bê tông mịn, kim loại tối giản",
            colors: "Trắng, xám, đen, màu gỗ tự nhiên",
            suitableFor: "Căn hộ nhỏ, nhà phố cần sự gọn gàng",
            notes: "Độ chính xác trong thi công rất quan trọng",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><defs><linearGradient id='minimal' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23374151'/><stop offset='100%' style='stop-color:%23111827'/></linearGradient></defs><rect width='300' height='200' fill='url(%23minimal)'/><rect x='50' y='80' width='200' height='100' fill='rgba(255,255,255,0.95)' rx='8'/><rect x='70' y='110' width='60' height='40' fill='%23374151' rx='4'/><rect x='140' y='110' width='60' height='40' fill='%23374151' rx='4'/><rect x='210' y='120' width='30' height='30' fill='%236b7280' rx='2'/><text x='150' y='190' text-anchor='middle' font-family='Arial' font-size='12' fill='white' font-weight='bold'>Minimal Interior</text></svg>"
        },
        {
            id: 4,
            name: "Nội thất Scandinavian (Bắc Âu)",
            description: "Ấm áp, thân thiện, ưu tiên ánh sáng và vật liệu tự nhiên.",
            features: ["Đường nét đơn giản", "Chất liệu gỗ sáng", "Textile ấm", "Cây xanh"],
            materials: "Gỗ sồi/óak, len, cotton, gốm sứ đơn giản",
            colors: "Trắng, pastel, gỗ sáng",
            suitableFor: "Gia đình trẻ, căn hộ nhỏ, homestay ấm cúng",
            notes: "Tối ưu ánh sáng tự nhiên, thêm cây xanh",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><defs><linearGradient id='scandi' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%2310b981'/><stop offset='100%' style='stop-color:%23059669'/></linearGradient></defs><rect width='300' height='200' fill='url(%23scandi)'/><rect x='40' y='90' width='220' height='90' fill='rgba(255,255,255,0.95)' rx='8'/><rect x='60' y='110' width='50' height='50' fill='%23d4a574' rx='4'/><rect x='120' y='110' width='50' height='50' fill='%23d4a574' rx='4'/><rect x='180' y='110' width='50' height='50' fill='%23d4a574' rx='4'/><circle cx='85' cy='100' r='8' fill='%2310b981'/><circle cx='145' cy='100' r='8' fill='%2310b981'/><circle cx='205' cy='100' r='8' fill='%2310b981'/><text x='150' y='190' text-anchor='middle' font-family='Arial' font-size='12' fill='white' font-weight='bold'>Scandinavian</text></svg>"
        },
        {
            id: 5,
            name: "Nội thất Industrial (Công nghiệp)",
            description: "Lấy cảm hứng từ kho xưởng, thể hiện qua vật liệu thô và cấu trúc lộ.",
            features: ["Tường gạch", "Ống thép", "Bê tông trần", "Đồ dùng tái chế"],
            materials: "Gạch thô, thép, bê tông, gỗ tái chế",
            colors: "Xám, nâu, đen, tông kim loại",
            suitableFor: "Loft, quán café, không gian thương mại",
            notes: "Kết hợp vật liệu mềm để tránh cảm giác lạnh",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><defs><linearGradient id='industrial' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%236b7280'/><stop offset='100%' style='stop-color:%23374151'/></linearGradient></defs><rect width='300' height='200' fill='url(%23industrial)'/><rect x='30' y='80' width='240' height='100' fill='rgba(255,255,255,0.9)' rx='4'/><rect x='50' y='100' width='8' height='60' fill='%23374151'/><rect x='70' y='100' width='8' height='60' fill='%23374151'/><rect x='90' y='100' width='8' height='60' fill='%23374151'/><rect x='110' y='100' width='40' height='40' fill='%236b7280' rx='2'/><rect x='160' y='100' width='40' height='40' fill='%236b7280' rx='2'/><rect x='210' y='100' width='40' height='40' fill='%236b7280' rx='2'/><text x='150' y='190' text-anchor='middle' font-family='Arial' font-size='12' fill='white' font-weight='bold'>Industrial</text></svg>"
        },
        {
            id: 6,
            name: "Nội thất Luxury (Sang trọng)",
            description: "Tập trung vào vật liệu cao cấp và chi tiết hoàn thiện tinh xảo.",
            features: ["Đường nét tinh xảo", "Đồ nội thất custom", "Đèn trang trí nổi bật", "Chi tiết mạ vàng"],
            materials: "Marble, đá tự nhiên, da thật, gỗ quý, pha lê",
            colors: "Đen, trắng, vàng kim, xanh navy, nâu sẫm",
            suitableFor: "Biệt thự cao cấp, penthouse, phòng master",
            notes: "Ưu tiên chất lượng vật liệu và thi công tỉ mỉ",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><defs><linearGradient id='luxury' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23fbbf24'/><stop offset='100%' style='stop-color:%23f59e0b'/></linearGradient></defs><rect width='300' height='200' fill='url(%23luxury)'/><rect x='30' y='80' width='240' height='100' fill='rgba(0,0,0,0.8)' rx='8'/><rect x='50' y='100' width='50' height='50' fill='%23fbbf24' rx='6'/><rect x='110' y='100' width='50' height='50' fill='%23fbbf24' rx='6'/><rect x='170' y='100' width='50' height='50' fill='%23fbbf24' rx='6'/><circle cx='75' cy='90' r='8' fill='%23fbbf24'/><circle cx='135' cy='90' r='8' fill='%23fbbf24'/><circle cx='195' cy='90' r='8' fill='%23fbbf24'/><text x='150' y='190' text-anchor='middle' font-family='Arial' font-size='12' fill='white' font-weight='bold'>Luxury Interior</text></svg>"
        }
    ];

// Process steps
    const processSteps = [
        {
            step: 1,
            title: "Tư vấn phong cách, nhu cầu",
            description: "Lắng nghe mong muốn và định hướng phong cách nội thất phù hợp"
        },
        {
            step: 2,
            title: "Khảo sát không gian, đo đạc",
            description: "Đo đạc chính xác và đánh giá hiện trạng không gian"
        },
        {
            step: 3,
            title: "Lên bản vẽ 2D, phối cảnh 3D",
            description: "Thiết kế bố trí mặt bằng và tạo hình ảnh 3D chân thực"
        },
        {
            step: 4,
            title: "Điều chỉnh, chốt phương án",
            description: "Hoàn thiện thiết kế theo góp ý của khách hàng"
        },
        {
            step: 5,
            title: "Triển khai bản vẽ kỹ thuật chi tiết",
            description: "Phát triển hồ sơ kỹ thuật đầy đủ cho thi công"
        },
        {
            step: 6,
            title: "Bàn giao hồ sơ, hỗ trợ thi công",
            description: "Bàn giao đầy đủ hồ sơ và giám sát quá trình thi công"
        }
    ];

// Benefits
    const benefits = [
        {
            icon: Maximize,
            title: "Tối ưu diện tích",
            description: "Bố trí hợp lý, tận dụng tối đa không gian sử dụng"
        },
        {
            icon: Heart,
            title: "Thể hiện cá tính",
            description: "Phong cách riêng, phù hợp với sở thích gia chủ"
        },
        {
            icon: TrendingUp,
            title: "Gia tăng giá trị",
            description: "Nâng cao giá trị bất động sản và chất lượng sống"
        },
        {
            icon: Users,
            title: "Đội ngũ chuyên nghiệp",
            description: "Kiến trúc sư nội thất giàu kinh nghiệm"
        }
    ];

// What is Interior Design section data
    const whatIsInteriorDesign = [
        {
            icon: Maximize,
            title: "Tối ưu diện tích sử dụng",
            description: "Bố trí hợp lý để tận dụng tối đa không gian"
        },
        {
            icon: Palette,
            title: "Đảm bảo thẩm mỹ, phong cách riêng",
            description: "Tạo ra không gian đẹp mắt và cá tính"
        },
        {
            icon: Sofa,
            title: "Tạo cảm giác thoải mái, tiện nghi",
            description: "Mang lại sự thoải mái tối đa cho người sử dụng"
        },
        {
            icon: TrendingUp,
            title: "Gia tăng giá trị cho ngôi nhà",
            description: "Nâng cao giá trị thẩm mỹ và kinh tế"
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
                <title>Thiết Kế Nội Thất - Nâng Tầm Giá Trị Không Gian Sống - LIN HOME</title>
                <meta name="description" content="6+ phong cách thiết kế nội thất từ hiện đại đến luxury. Quy trình 6 bước chuyên nghiệp, đội ngũ kiến trúc sư nội thất giàu kinh nghiệm." />
                <meta name="keywords" content="thiết kế nội thất, nội thất hiện đại, nội thất tân cổ điển, thiết kế phòng khách, LIN HOME" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
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
                                    <Home className="w-12 h-12" />
                                    <h1 className="text-4xl md:text-5xl font-bold">
                                        Thiết Kế Nội Thất
                                    </h1>
                                </div>
                                <p className="text-xl mb-8 leading-relaxed">
                                    Nâng tầm giá trị không gian sống với đa dạng phong cách nội thất hiện đại
                                </p>
                                <div className="flex justify-center gap-8 text-sm">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">6+</div>
                                        <div>Phong cách</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">200+</div>
                                        <div>Dự án</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">95%</div>
                                        <div>Hài lòng</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* What is Interior Design */}
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
                                    Thiết kế nội thất là gì?
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Thiết kế nội thất là nghệ thuật sắp xếp, tổ chức không gian bên trong công trình,
                                    giúp ngôi nhà vừa tiện nghi vừa thể hiện cá tính của gia chủ.
                                </p>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {whatIsInteriorDesign.map((item, index) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                                <IconComponent className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                                                <h3 className="font-bold text-slate-800 mb-2 text-sm">{item.title}</h3>
                                                <p className="text-xs text-slate-600">{item.description}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Interior Styles */}
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
                                    Các phong cách thiết kế nội thất được ưa chuộng
                                </h2>
                                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                                    Khám phá đa dạng phong cách nội thất để tìm ra phong cách phù hợp với cá tính của bạn
                                </p>
                            </motion.div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid lg:grid-cols-2 gap-8"
                            >
                                {interiorStyles.map((style) => (
                                    <motion.div
                                        key={style.id}
                                        variants={itemVariants}
                                        className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <div className="flex gap-6 mb-6">
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

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-semibold text-slate-800 text-sm mb-2">Đặc trưng:</h4>
                                                <ul className="text-xs text-slate-600 space-y-1 mb-3">
                                                    {style.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-center gap-2">
                                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>

                                                <h4 className="font-semibold text-slate-800 text-sm mb-2">Vật liệu:</h4>
                                                <p className="text-xs text-slate-600">{style.materials}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-800 text-sm mb-2">Màu sắc:</h4>
                                                <p className="text-xs text-slate-600 mb-3">{style.colors}</p>

                                                <h4 className="font-semibold text-slate-800 text-sm mb-2">Phù hợp cho:</h4>
                                                <p className="text-xs text-slate-600 mb-3">{style.suitableFor}</p>

                                                <h4 className="font-semibold text-slate-800 text-sm mb-2">Lưu ý:</h4>
                                                <p className="text-xs text-slate-600">{style.notes}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    {/* Process Section */}
                    <section className="py-20 bg-gradient-to-br from-slate-100 to-purple-100">
                        <div className="container mx-auto px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                                    Quy trình thiết kế nội thất
                                </h2>
                                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                                    6 bước chuyên nghiệp đảm bảo chất lượng thiết kế nội thất
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
                                    Lợi ích khi thuê đơn vị thiết kế nội thất chuyên nghiệp
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
                                            className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-purple-50 hover:from-primary-100 hover:to-purple-100 transition-colors duration-300"
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
                                    Biến ngôi nhà thành không gian sống hoàn hảo
                                </h2>
                                <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
                                    Một không gian sống hoàn hảo không chỉ dừng lại ở kiến trúc bên ngoài mà còn được
                                    khẳng định qua thiết kế nội thất bên trong.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => window.open('tel:0963459288', '_self')}
                                        className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                                    >
                                        Tư vấn thiết kế nội thất miễn phí
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => window.location.href = '/'}
                                        className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                                    >
                                        Xem portfolio nội thất
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

export default InteriorDesignPage;
