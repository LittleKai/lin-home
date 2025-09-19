import { motion } from 'framer-motion';
import { Play, Phone, Star } from 'lucide-react';

const HeroSection = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
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

    const buttonVariants = {
        hover: {
            scale: 1.05,
            y: -2,
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    };

    // Handle button clicks
    const handleViewPortfolio = () => {
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleContact = () => {
        window.open('tel:0963459288', '_self');
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cdefs%3E%3Cpattern id='grid' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 50 0 L 0 0 0 50' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='1000' height='1000' fill='url(%23grid)'/%3E%3C/svg%3E")`
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-white"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-5 py-2 text-sm font-medium mb-6 backdrop-blur-sm"
                        >
                            <Star className="w-4 h-4 text-yellow-300" fill="currentColor" />
                            Hơn 10+ dự án thành công
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Kiến Trúc Xây Dựng
              </span>
                            <br />
                            <span className="text-white">
                Hiện Đại
              </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl"
                        >
                            Thiết kế và thi công trọn gói với chất lượng tốt nhất.
                            Biến ước mơ ngôi nhà của bạn thành hiện thực với đội ngũ
                            kiến trúc sư và kỹ sư giàu kinh nghiệm.
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={handleViewPortfolio}
                                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <Play className="w-5 h-5" fill="currentColor" />
                                Xem portfolio
                            </motion.button>

                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={handleContact}
                                className="bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 backdrop-blur-sm hover:bg-white/30 transition-all"
                            >
                                <Phone className="w-5 h-5" />
                                Liên hệ ngay
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-12 grid grid-cols-3 gap-8"
                        >
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">10+</div>
                                <div className="text-sm text-blue-200">Năm kinh nghiệm</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">100+</div>
                                <div className="text-sm text-blue-200">Dự án hoàn thành</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">95%</div>
                                <div className="text-sm text-blue-200">Khách hàng hài lòng</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image/Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="relative hidden lg:block"
                    >
                        {/* 3D Building Illustration */}
                        <div className="relative w-full h-96">
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0"
                            >
                                <svg
                                    viewBox="0 0 600 400"
                                    className="w-full h-full drop-shadow-2xl"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Sky */}
                                    <rect width="600" height="400" fill="url(#skyGradient)" rx="20" />

                                    {/* Sun */}
                                    <circle cx="500" cy="80" r="30" fill="#FFD700" opacity="0.9" />

                                    {/* Buildings */}
                                    <g opacity="0.9">
                                        {/* Building 1 */}
                                        <rect x="80" y="140" width="100" height="180" fill="url(#buildingGradient1)" rx="8" />
                                        <rect x="90" y="160" width="15" height="15" fill="rgba(255,255,255,0.8)" rx="2" />
                                        <rect x="110" y="160" width="15" height="15" fill="rgba(255,255,255,0.8)" rx="2" />
                                        <rect x="130" y="160" width="15" height="15" fill="rgba(255,255,255,0.8)" rx="2" />
                                        <rect x="150" y="160" width="15" height="15" fill="rgba(255,255,255,0.8)" rx="2" />

                                        {/* Building 2 */}
                                        <rect x="200" y="120" width="80" height="200" fill="url(#buildingGradient2)" rx="8" />
                                        <rect x="210" y="140" width="12" height="12" fill="rgba(255,255,255,0.8)" rx="2" />
                                        <rect x="225" y="140" width="12" height="12" fill="rgba(255,255,255,0.8)" rx="2" />
                                        <rect x="240" y="140" width="12" height="12" fill="rgba(255,255,255,0.8)" rx="2" />
                                        <rect x="255" y="140" width="12" height="12" fill="rgba(255,255,255,0.8)" rx="2" />

                                        {/* Building 3 */}
                                        <rect x="300" y="160" width="70" height="160" fill="url(#buildingGradient3)" rx="8" />
                                        <rect x="310" y="180" width="10" height="10" fill="rgba(255,255,255,0.8)" rx="1" />
                                        <rect x="325" y="180" width="10" height="10" fill="rgba(255,255,255,0.8)" rx="1" />
                                        <rect x="340" y="180" width="10" height="10" fill="rgba(255,255,255,0.8)" rx="1" />
                                        <rect x="355" y="180" width="10" height="10" fill="rgba(255,255,255,0.8)" rx="1" />

                                        {/* Building 4 */}
                                        <rect x="390" y="100" width="90" height="220" fill="url(#buildingGradient4)" rx="8" />
                                        <rect x="400" y="120" width="14" height="14" fill="rgba(255,255,255,0.8)" rx="2" />
                                        <rect x="420" y="120" width="14" height="14" fill="rgba(255,255,255,0.8)" rx="2" />
                                        <rect x="440" y="120" width="14" height="14" fill="rgba(255,255,255,0.8)" rx="2" />
                                        <rect x="460" y="120" width="14" height="14" fill="rgba(255,255,255,0.8)" rx="2" />
                                    </g>

                                    {/* Ground/Landscape */}
                                    <ellipse cx="150" cy="350" rx="40" ry="8" fill="rgba(34,197,94,0.6)" />
                                    <ellipse cx="450" cy="350" rx="60" ry="10" fill="rgba(34,197,94,0.6)" />

                                    {/* Text */}
                                    <text x="300" y="380" textAnchor="middle" className="fill-white font-semibold text-sm">
                                        Kiến trúc hiện đại
                                    </text>

                                    {/* Gradients */}
                                    <defs>
                                        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                                            <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                                        </linearGradient>

                                        <linearGradient id="buildingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#f7fafc" stopOpacity="0.9" />
                                            <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.9" />
                                        </linearGradient>

                                        <linearGradient id="buildingGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                                            <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0.9" />
                                        </linearGradient>

                                        <linearGradient id="buildingGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.9" />
                                            <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.9" />
                                        </linearGradient>

                                        <linearGradient id="buildingGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                                            <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0.9" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </motion.div>
                        </div>

                        {/* Decorative Elements */}
                        <motion.div
                            animate={{
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-300 rounded-full opacity-20"
                        />

                        <motion.div
                            animate={{
                                rotate: [0, -5, 5, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                            className="absolute -bottom-8 -left-8 w-24 h-24 bg-white rounded-full opacity-10"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-3 bg-white/50 rounded-full mt-2"
                    />
                </motion.div>
                <p className="text-white/70 text-sm mt-2 text-center">Cuộn xuống</p>
            </motion.div>
        </section>
    );
};

export default HeroSection;