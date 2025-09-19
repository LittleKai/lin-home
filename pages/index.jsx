import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Star,
    ArrowRight,
    Building,
    Hammer,
    Home,
    Leaf,
    Calculator,
    Wrench
} from 'lucide-react';

// Import components
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import PortfolioSection from '../components/PortfolioSection';
import AppsSection from '../components/AppsSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatButtons from '../components/FloatButtons';

// SEO data
const seoData = {
    title: 'LIN HOME - Kiến Trúc Xây Dựng Hiện Đại | Thiết Kế & Thi Công Trọn Gói',
    description: 'LIN HOME chuyên thiết kế kiến trúc và thi công xây dựng trọn gói với hơn 10 năm kinh nghiệm. Dịch vụ thiết kế nhà phố, biệt thự, nội thất hiện đại tại Việt Nam.',
    keywords: 'thiết kế kiến trúc, thi công xây dựng, thiết kế nội thất, xây nhà trọn gói, kiến trúc hiện đại, LIN HOME',
    url: 'https://linhome.vn',
    image: '/images/og-image.jpg',
};

// Main page component
export default function Home() {
    const [activeSection, setActiveSection] = useState('home');
    const [isLoading, setIsLoading] = useState(true);

    // Handle loading state
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Scroll to top when section changes
    useEffect(() => {
        if (activeSection !== 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [activeSection]);

    // Render loading screen
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-white"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <h2 className="text-2xl font-bold mb-2">LIN HOME</h2>
                    <p className="text-lg opacity-90">Đang tải...</p>
                </motion.div>
            </div>
        );
    }

    // Render main content based on active section
    const renderContent = () => {
        switch(activeSection) {
            case 'apps':
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <AppsSection />
                        <NewsSection />
                    </motion.div>
                );
            case 'contact':
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ContactSection />
                    </motion.div>
                );
            default:
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <HeroSection />
                        <FeaturesSection />
                        <PortfolioSection />
                        <AppsSection />
                        <NewsSection />
                        <ContactSection />
                    </motion.div>
                );
        }
    };

    return (
        <>
            <Head>
                {/* Basic Meta Tags */}
                <title>{seoData.title}</title>
                <meta name="description" content={seoData.description} />
                <meta name="keywords" content={seoData.keywords} />
                <meta name="author" content="LIN HOME Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="vi" />

                {/* Open Graph Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seoData.title} />
                <meta property="og:description" content={seoData.description} />
                <meta property="og:url" content={seoData.url} />
                <meta property="og:image" content={seoData.image} />
                <meta property="og:site_name" content="LIN HOME" />
                <meta property="og:locale" content="vi_VN" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoData.title} />
                <meta name="twitter:description" content={seoData.description} />
                <meta name="twitter:image" content={seoData.image} />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "LIN HOME",
                            "description": seoData.description,
                            "url": seoData.url,
                            "logo": `${seoData.url}/logo.png`,
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+84941090333",
                                "contactType": "customer service",
                                "areaServed": "VN",
                                "availableLanguage": "Vietnamese"
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "VN",
                                "addressRegion": "Hà Nội"
                            },
                            "sameAs": [
                                "https://facebook.com/linhome.vn",
                                "https://instagram.com/linhome.vn"
                            ]
                        })
                    }}
                />
            </Head>

            <div className="App">
                {/* Header with navigation */}
                <Header
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />

                {/* Main content area */}
                <main
                    className={`transition-all duration-300 ${
                        activeSection === 'home' ? 'mt-0' : 'mt-20'
                    }`}
                >
                    <AnimatePresence mode="wait">
                        {renderContent()}
                    </AnimatePresence>
                </main>

                {/* Footer */}
                <Footer />

                {/* Floating action buttons */}
                <FloatButtons />

                {/* Back to top button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-24 right-6 w-12 h-12 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-colors z-40 flex items-center justify-center"
                    aria-label="Scroll to top"
                >
                    ↑
                </motion.button>
            </div>
        </>
    );
}