import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
    ArrowRight,
    Building,
    Hammer,
    Home as HomeIcon, // Rename the icon to avoid conflict
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

    // Loading effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Scroll tracking effect
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'features', 'portfolio', 'apps', 'news', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Đang tải...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{seoData.title}</title>
                <meta name="description" content={seoData.description} />
                <meta name="keywords" content={seoData.keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={seoData.url} />
                <meta property="og:title" content={seoData.title} />
                <meta property="og:description" content={seoData.description} />
                <meta property="og:image" content={seoData.image} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={seoData.url} />
                <meta property="twitter:title" content={seoData.title} />
                <meta property="twitter:description" content={seoData.description} />
                <meta property="twitter:image" content={seoData.image} />

                {/* Additional SEO */}
                <meta name="robots" content="index, follow" />
                <meta name="language" content="Vietnamese" />
                <meta name="author" content="LIN HOME" />
                <link rel="canonical" href={seoData.url} />
            </Head>

            <div className="min-h-screen bg-white">
                {/* Header */}
                <Header activeSection={activeSection} />

                {/* Main Content */}
                <main>
                    {/* Hero Section */}
                    <section id="home">
                        <HeroSection />
                    </section>

                    {/* Features Section */}
                    <section id="features">
                        <FeaturesSection />
                    </section>

                    {/* Portfolio Section */}
                    <section id="portfolio">
                        <PortfolioSection />
                    </section>

                    {/* Apps Section */}
                    <section id="apps">
                        <AppsSection />
                    </section>

                    {/* News Section */}
                    <section id="news">
                        <NewsSection />
                    </section>

                    {/* Contact Section */}
                    <section id="contact">
                        <ContactSection />
                    </section>
                </main>

                {/* Footer */}
                <Footer />

                {/* Float Buttons */}
                <FloatButtons />
            </div>
        </>
    );
}