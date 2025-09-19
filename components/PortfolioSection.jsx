import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
    const [activeFilter, setActiveFilter] = useState('Tất cả');

    // Filter options
    const filters = ['Tất cả', 'Biệt thự', 'Nhà phố', 'Nội thất', 'Sân vườn'];

    // Portfolio projects data from original file
    const projects = [
        {
            title: 'Biệt thự hiện đại Vinhomes',
            category: 'Biệt thự',
            description: 'Thiết kế biệt thự 2 tầng phong cách hiện đại với sân vườn rộng rãi.',
            image: '/images/portfolio/villa-vinhomes.jpg',
            tags: ['Hiện đại', '2 tầng', 'Sân vườn'],
            area: '350m²',
            year: '2024'
        },
        {
            title: 'Nhà phố 3 tầng',
            category: 'Nhà phố',
            description: 'Thiết kế nhà phố 3 tầng tối ưu diện tích với ánh sáng tự nhiên.',
            image: '/images/portfolio/townhouse-3floor.jpg',
            tags: ['3 tầng', 'Tối ưu', 'Ánh sáng'],
            area: '120m²',
            year: '2024'
        },
        {
            title: 'Nội thất phòng khách sang trọng',
            category: 'Nội thất',
            description: 'Thiết kế nội thất phòng khách phong cách luxury với tone màu ấm áp.',
            image: '/images/portfolio/luxury-living.jpg',
            tags: ['Luxury', 'Ấm áp', 'Sang trọng'],
            area: '45m²',
            year: '2024'
        },
        {
            title: 'Villa cao cấp Đà Lạt',
            category: 'Biệt thự',
            description: 'Villa nghỉ dưỡng với thiết kế hòa hợp cùng thiên nhiên Đà Lạt.',
            image: '/images/portfolio/villa-dalat.jpg',
            tags: ['Nghỉ dưỡng', 'Thiên nhiên', 'Đà Lạt'],
            area: '420m²',
            year: '2023'
        },
        {
            title: 'Sân vườn Nhật Bản',
            category: 'Sân vườn',
            description: 'Thiết kế sân vườn phong cách Zen với hồ koi và cây cảnh.',
            image: '/images/portfolio/japanese-garden.jpg',
            tags: ['Zen', 'Hồ koi', 'Nhật Bản'],
            area: '200m²',
            year: '2023'
        },
        {
            title: 'Nhà hàng hiện đại',
            category: 'Nội thất',
            description: 'Thiết kế nội thất nhà hàng phong cách industrial chic.',
            image: '/images/portfolio/modern-restaurant.jpg',
            tags: ['Industrial', 'Chic', 'Nhà hàng'],
            area: '300m²',
            year: '2023'
        }
    ];

    // Filter projects based on active filter
    const filteredProjects = activeFilter === 'Tất cả'
        ? projects
        : projects.filter(project => project.category === activeFilter);

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
        },
        exit: {
            y: -50,
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    // Create placeholder SVG for images
    const createPlaceholderSVG = (title, category) => {
        const gradients = {
            'Biệt thự': 'from-blue-500 to-purple-600',
            'Nhà phố': 'from-green-500 to-teal-600',
            'Nội thất': 'from-orange-500 to-red-600',
            'Sân vườn': 'from-emerald-500 to-green-600'
        };

        return `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea"/>
            <stop offset="100%" style="stop-color:#764ba2"/>
          </linearGradient>
        </defs>
        <rect width="400" height="280" fill="url(#grad)"/>
        <rect x="50" y="100" width="300" height="120" fill="rgba(255,255,255,0.9)" rx="8"/>
        <text x="200" y="160" text-anchor="middle" font-family="Arial" font-size="16" fill="#333" font-weight="bold">${title}</text>
        <text x="200" y="180" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">${category}</text>
      </svg>
    `)}`;
    };

    const handleProjectClick = (project) => {
        alert(`Xem chi tiết dự án: ${project.title}`);
    };

    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        Dự án tiêu biểu
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                        Portfolio của chúng tôi
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Khám phá những dự án đã thực hiện với chất lượng và
                        sự sáng tạo không ngừng
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {filters.map((filter, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                                activeFilter === filter
                                    ? 'bg-primary-500 text-white border-primary-500 shadow-lg'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-primary-500 hover:text-primary-500'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={`${activeFilter}-${index}`}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                layout
                                whileHover={{ y: -8 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                            >
                                {/* Project Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={createPlaceholderSVG(project.title, project.category)}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex items-center justify-between text-white">
                                                <div>
                                                    <span className="text-sm font-medium">{project.area}</span>
                                                    <span className="mx-2">•</span>
                                                    <span className="text-sm font-medium">{project.year}</span>
                                                </div>
                                                <button
                                                    onClick={() => handleProjectClick(project)}
                                                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                      {project.category}
                    </span>
                                        <div className="flex gap-1">
                                            {project.tags.slice(0, 2).map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                                                >
                          {tag}
                        </span>
                                            ))}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <button
                                        onClick={() => handleProjectClick(project)}
                                        className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all duration-300 group/link"
                                    >
                                        <span>Xem chi tiết</span>
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Load More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <button
                        onClick={() => alert('Tải thêm dự án')}
                        className="bg-slate-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                        Xem thêm dự án
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioSection;