import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

const FloatButtons = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const buttonVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    };

    const pulseVariants = {
        pulse: {
            scale: [1, 1.2, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Handle button clicks
    const handlePhoneClick = () => {
        window.open('tel:0941090333', '_self');
    };

    const handleFacebookClick = () => {
        window.open('https://m.me/linhome.vn', '_blank');
    };

    const handleZaloClick = () => {
        window.open('https://zalo.me/0941090333', '_blank');
    };

    const handleMapClick = () => {
        window.open('https://maps.google.com/?q=Hà+Nội,+Việt+Nam', '_blank');
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="fixed right-4 md:right-6 bottom-4 md:bottom-6 flex flex-col gap-3 z-50"
        >
            {/* Phone Button */}
            <motion.button
                variants={buttonVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePhoneClick}
                className="relative w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group overflow-hidden"
                title="Gọi ngay"
            >
                {/* Pulse animation */}
                <motion.div
                    variants={pulseVariants}
                    animate="pulse"
                    className="absolute inset-0 bg-green-500 rounded-full opacity-30"
                />

                {/* Phone icon */}
                <Phone className="w-6 h-6 text-white relative z-10" />

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Tooltip */}
                <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Gọi ngay
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-800" />
                </div>
            </motion.button>

            {/* Facebook Messenger Button */}
            <motion.button
                variants={buttonVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleFacebookClick}
                className="relative w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group overflow-hidden"
                title="Chat Facebook"
            >
                <MessageCircle className="w-6 h-6 text-white" />

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Tooltip */}
                <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Chat Facebook
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-800" />
                </div>
            </motion.button>

            {/* Zalo Button */}
            <motion.button
                variants={buttonVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleZaloClick}
                className="relative w-14 h-14 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group overflow-hidden"
                title="Chat Zalo"
            >
                {/* Zalo icon (using a custom SVG or styled div) */}
                <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                    <span className="text-cyan-600 text-xs font-bold">Z</span>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Tooltip */}
                <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Chat Zalo
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-800" />
                </div>
            </motion.button>

            {/* Map Button */}
            <motion.button
                variants={buttonVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleMapClick}
                className="relative w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group overflow-hidden"
                title="Xem bản đồ"
            >
                <MapPin className="w-6 h-6 text-white" />

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Tooltip */}
                <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Xem bản đồ
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-800" />
                </div>
            </motion.button>

            {/* Back to Top Button */}
            <motion.button
                variants={buttonVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="relative w-14 h-14 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group overflow-hidden"
                title="Về đầu trang"
            >
                <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                    />
                </svg>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Tooltip */}
                <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Về đầu trang
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-800" />
                </div>
            </motion.button>
        </motion.div>
    );
};

export default FloatButtons;