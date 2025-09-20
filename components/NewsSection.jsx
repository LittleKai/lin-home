import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Eye, Heart, Share2, Send } from 'lucide-react';

const NewsSection = () => {
    // News articles data
    const newsArticles = [
        {
            id: 1,
            title: 'Xu hướng kiến trúc xanh trong xây dựng hiện đại 2025',
            excerpt: 'Kiến trúc xanh đang trở thành xu hướng chủ đạo trong ngành xây dựng với các giải pháp bền vững và thân thiện môi trường...',
            content: 'Kiến trúc xanh không chỉ là xu hướng mà đã trở thành tiêu chuẩn mới trong ngành xây dựng. Các công trình xanh giúp tiết kiệm năng lượng, giảm tác động môi trường và tạo ra không gian sống khỏe mạnh cho con người.',
            date: '20/09/2025',
            category: 'Kiến trúc',
            author: 'Nguyễn Văn A',
            readTime: '5 phút đọc',
            views: 1250,
            likes: 89,
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"><defs><linearGradient id="green-arch" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2334d399"/><stop offset="100%" style="stop-color:%23059669"/></linearGradient></defs><rect width="400" height="250" fill="url(%23green-arch)"/><rect x="50" y="120" width="300" height="80" fill="rgba(255,255,255,0.95)" rx="12"/><rect x="70" y="130" width="25" height="60" fill="%23059669" rx="4"/><rect x="105" y="135" width="25" height="55" fill="%23059669" rx="4"/><rect x="140" y="125" width="25" height="65" fill="%23059669" rx="4"/><rect x="175" y="130" width="25" height="60" fill="%23059669" rx="4"/><rect x="210" y="135" width="25" height="55" fill="%23059669" rx="4"/><rect x="245" y="125" width="25" height="65" fill="%23059669" rx="4"/><rect x="280" y="140" width="25" height="50" fill="%23059669" rx="4"/><rect x="315" y="145" width="15" height="35" fill="%23f59e0b" rx="2"/><circle cx="350" cy="70" r="25" fill="%23fbbf24" opacity="0.9"/><ellipse cx="200" cy="220" rx="80" ry="15" fill="rgba(34,197,94,0.7)"/><ellipse cx="120" cy="230" rx="50" ry="10" fill="rgba(34,197,94,0.6)"/><ellipse cx="280" cy="230" rx="60" ry="12" fill="rgba(34,197,94,0.6)"/><path d="M 60 80 Q 100 60 140 80 T 220 80" stroke="rgba(255,255,255,0.8)" stroke-width="3" fill="none"/><text x="200" y="40" text-anchor="middle" font-family="Arial" font-size="16" fill="white" font-weight="bold">Kiến trúc xanh 2025</text></svg>',
            tags: ['Kiến trúc xanh', 'Bền vững', 'Xu hướng 2025']
        },
        {
            id: 2,
            title: 'Vật liệu xây dựng thông minh cho ngôi nhà tương lai',
            excerpt: 'Các vật liệu xây dựng thông minh giúp tối ưu hóa năng lượng và tăng độ bền vững cho công trình...',
            content: 'Vật liệu thông minh như gạch tự làm sạch, kính điều chỉnh độ trong suốt, và bê tông tự sửa chữa đang cách mạng hóa ngành xây dựng. Những công nghệ này không chỉ tiết kiệm chi phí bảo trì mà còn nâng cao chất lượng cuộc sống.',
            date: '18/09/2025',
            category: 'Vật liệu',
            author: 'Trần Thị B',
            readTime: '4 phút đọc',
            views: 980,
            likes: 67,
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"><defs><linearGradient id="smart-materials" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%236366f1"/><stop offset="100%" style="stop-color:%234f46e5"/></linearGradient></defs><rect width="400" height="250" fill="url(%23smart-materials)"/><rect x="80" y="90" width="240" height="120" fill="rgba(255,255,255,0.95)" rx="16"/><rect x="100" y="110" width="50" height="50" fill="%236366f1" rx="8"/><rect x="170" y="110" width="50" height="50" fill="%236366f1" rx="8"/><rect x="240" y="110" width="50" height="50" fill="%236366f1" rx="8"/><circle cx="125" cy="135" r="12" fill="white"/><circle cx="195" cy="135" r="12" fill="white"/><circle cx="265" cy="135" r="12" fill="white"/><rect x="110" y="170" width="30" height="4" fill="%234f46e5" rx="2"/><rect x="180" y="170" width="30" height="4" fill="%234f46e5" rx="2"/><rect x="250" y="170" width="30" height="4" fill="%234f46e5" rx="2"/><circle cx="350" cy="60" r="15" fill="%23fbbf24" opacity="0.8"/><path d="M 50 50 L 80 70 L 50 90" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none"/><path d="M 350 50 L 320 70 L 350 90" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none"/><text x="200" y="40" text-anchor="middle" font-family="Arial" font-size="16" fill="white" font-weight="bold">Smart Materials</text></svg>',
            tags: ['Vật liệu thông minh', 'Công nghệ', 'Tương lai']
        },
        {
            id: 3,
            title: 'Phong thủy trong thiết kế nhà ở hiện đại',
            excerpt: 'Kết hợp phong thủy truyền thống với thiết kế hiện đại để tạo ra không gian sống hài hòa và thịnh vượng...',
            content: 'Phong thủy không phải là mê tín mà là khoa học về cách bố trí không gian sống hài hòa với tự nhiên. Trong thiết kế hiện đại, các nguyên tắc phong thủy được ứng dụng một cách tinh tế và khoa học.',
            date: '15/09/2025',
            category: 'Phong thủy',
            author: 'Lê Văn C',
            readTime: '6 phút đọc',
            views: 1456,
            likes: 123,
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"><defs><linearGradient id="fengshui" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23f59e0b"/><stop offset="100%" style="stop-color:%23d97706"/></linearGradient></defs><rect width="400" height="250" fill="url(%23fengshui)"/><circle cx="200" cy="125" r="80" fill="rgba(255,255,255,0.95)"/><path d="M 200 65 A 60 60 0 0 1 200 185 A 60 60 0 0 1 200 65" fill="%23000" opacity="0.8"/><path d="M 200 65 A 60 60 0 0 0 200 185 A 60 60 0 0 0 200 65" fill="%23fff"/><circle cx="170" cy="95" r="12" fill="white"/><circle cx="230" cy="155" r="12" fill="black"/><rect x="50" y="180" width="100" height="50" fill="rgba(255,255,255,0.9)" rx="8"/><rect x="250" y="180" width="100" height="50" fill="rgba(255,255,255,0.9)" rx="8"/><polygon points="75,200 85,190 95,200 85,210" fill="%23d97706"/><polygon points="275,200 285,190 295,200 285,210" fill="%23d97706"/><circle cx="100" cy="60" r="20" fill="rgba(255,215,0,0.8)"/><path d="M 80 40 Q 100 20 120 40" stroke="rgba(255,255,255,0.8)" stroke-width="3" fill="none"/><text x="200" y="30" text-anchor="middle" font-family="Arial" font-size="16" fill="white" font-weight="bold">Phong thủy hiện đại</text></svg>',
            tags: ['Phong thủy', 'Thiết kế', 'Hài hòa']
        },
        {
            id: 4,
            title: 'Xu hướng nội thất tối giản 2025',
            excerpt: 'Phong cách tối giản đang được ưa chuộng với triết lý "ít nhưng chất lượng" trong thiết kế nội thất...',
            content: 'Nội thất tối giản không có nghĩa là đơn điệu hay thiếu cá tính. Thay vào đó, đây là nghệ thuật chọn lựa những món đồ thực sự cần thiết và có giá trị thẩm mỹ cao, tạo ra không gian sạch sẽ, thoáng đãng và yên bình.',
            date: '12/09/2025',
            category: 'Nội thất',
            author: 'Phạm Thị D',
            readTime: '3 phút đọc',
            views: 756,
            likes: 45,
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"><defs><linearGradient id="minimal" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23e5e7eb"/><stop offset="100%" style="stop-color:%23d1d5db"/></linearGradient></defs><rect width="400" height="250" fill="url(%23minimal)"/><rect x="80" y="80" width="240" height="140" fill="rgba(255,255,255,0.98)" rx="8"/><rect x="100" y="150" width="80" height="40" fill="%23374151" rx="4"/><rect x="200" y="150" width="80" height="40" fill="%23374151" rx="4"/><rect x="300" y="140" width="8" height="60" fill="%23374151" rx="2"/><rect x="120" y="100" width="160" height="4" fill="%236b7280" rx="2"/><circle cx="140" cy="120" r="6" fill="%23d1d5db"/><circle cx="200" cy="120" r="6" fill="%23d1d5db"/><circle cx="260" cy="120" r="6" fill="%23d1d5db"/><rect x="90" y="200" width="220" height="8" fill="%23f3f4f6" rx="4"/><text x="200" y="30" text-anchor="middle" font-family="Arial" font-size="16" fill="%23374151" font-weight="bold">Minimal Design 2025</text></svg>',
            tags: ['Tối giản', 'Xu hướng', 'Nội thất']
        },
        {
            id: 5,
            title: 'Công nghệ nhà thông minh trong xây dựng',
            excerpt: 'Tích hợp công nghệ IoT và AI vào các công trình xây dựng để tạo ra ngôi nhà thông minh tiện nghi và tiết kiệm năng lượng...',
            content: 'Nhà thông minh không còn là khái niệm tương lai mà đã trở thành thực tế. Từ hệ thống điều khiển chiếu sáng tự động đến camera an ninh AI, công nghệ đang biến đổi cách chúng ta sống và tương tác với không gian sống.',
            date: '10/09/2025',
            category: 'Công nghệ',
            author: 'Nguyễn Minh E',
            readTime: '7 phút đọc',
            views: 2145,
            likes: 187,
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"><defs><linearGradient id="smart-home" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%230ea5e9"/><stop offset="100%" style="stop-color:%230284c7"/></linearGradient></defs><rect width="400" height="250" fill="url(%23smart-home)"/><rect x="100" y="100" width="200" height="100" fill="rgba(255,255,255,0.95)" rx="8"/><rect x="120" y="120" width="25" height="25" fill="%230284c7" rx="4"/><rect x="160" y="120" width="25" height="25" fill="%230284c7" rx="4"/><rect x="200" y="120" width="25" height="25" fill="%230284c7" rx="4"/><rect x="240" y="120" width="25" height="25" fill="%230284c7" rx="4"/><circle cx="132" cy="132" r="4" fill="white"/><circle cx="172" cy="132" r="4" fill="white"/><circle cx="212" cy="132" r="4" fill="white"/><circle cx="252" cy="132" r="4" fill="white"/><rect x="120" y="160" width="160" height="8" fill="%230ea5e9" rx="4"/><circle cx="200" cy="180" r="8" fill="%230284c7"/><path d="M 190 180 Q 200 170 210 180" stroke="%230284c7" stroke-width="2" fill="none"/><text x="200" y="30" text-anchor="middle" font-family="Arial" font-size="16" fill="white" font-weight="bold">Smart Home Tech</text></svg>',
            tags: ['Nhà thông minh', 'IoT', 'AI']
        },
        {
            id: 6,
            title: 'Thiết kế sân vườn bền vững cho khí hậu Việt Nam',
            excerpt: 'Cách thiết kế sân vườn phù hợp với khí hậu nhiệt đới, tiết kiệm nước và thân thiện với môi trường...',
            content: 'Sân vườn bền vững không chỉ đẹp mắt mà còn phải phù hợp với điều kiện khí hậu địa phương. Việc chọn cây bản địa, thiết kế hệ thống tưới nước thông minh và sử dụng vật liệu tự nhiên sẽ tạo ra sân vườn bền vững và ít tốn kém bảo trì.',
            date: '08/09/2025',
            category: 'Sân vườn',
            author: 'Võ Thị F',
            readTime: '5 phút đọc',
            views: 892,
            likes: 73,
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"><defs><linearGradient id="garden" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2322c55e"/><stop offset="100%" style="stop-color:%2316a34a"/></linearGradient></defs><rect width="400" height="250" fill="url(%23garden)"/><ellipse cx="200" cy="180" rx="120" ry="50" fill="rgba(34,197,94,0.8)"/><rect x="70" y="130" width="12" height="80" fill="%238b4513"/><ellipse cx="76" cy="120" rx="30" ry="25" fill="rgba(34,197,94,0.9)"/><rect x="150" y="140" width="10" height="70" fill="%238b4513"/><ellipse cx="155" cy="130" rx="25" ry="20" fill="rgba(34,197,94,0.9)"/><rect x="250" y="120" width="14" height="90" fill="%238b4513"/><ellipse cx="257" cy="110" rx="35" ry="30" fill="rgba(34,197,94,0.9)"/><rect x="320" y="150" width="8" height="60" fill="%238b4513"/><ellipse cx="324" cy="140" rx="20" ry="18" fill="rgba(34,197,94,0.9)"/><circle cx="350" cy="60" r="25" fill="%23fbbf24" opacity="0.9"/><path d="M 50 200 Q 150 180 250 200 T 350 200" stroke="rgba(59,130,246,0.7)" stroke-width="4" fill="none"/><circle cx="120" cy="190" r="3" fill="%23f97316"/><circle cx="180" cy="185" r="3" fill="%23f97316"/><circle cx="280" cy="195" r="3" fill="%23f97316"/><text x="200" y="30" text-anchor="middle" font-family="Arial" font-size="16" fill="white" font-weight="bold">Sân vườn bền vững</text></svg>',
            tags: ['Sân vườn', 'Bền vững', 'Khí hậu nhiệt đới']
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

    // Handle article click
    const handleArticleClick = (article) => {
        alert(`Đọc bài viết: ${article.title}`);
    };

    // Handle category click
    const handleCategoryClick = (category) => {
        alert(`Xem tất cả bài viết trong danh mục: ${category}`);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        Tin tức & Kiến thức
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                        Cập nhật mới nhất
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Khám phá các xu hướng mới và kiến thức hữu ích
                        trong lĩnh vực kiến trúc xây dựng
                    </p>
                </motion.div>

                {/* Featured Article */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="relative h-64 lg:h-auto">
                            <img
                                src={newsArticles[0].image}
                                alt={newsArticles[0].title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4">
                                <button
                                    onClick={() => handleCategoryClick(newsArticles[0].category)}
                                    className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-primary-600 transition-colors"
                                >
                                    {newsArticles[0].category}
                                </button>
                            </div>
                        </div>

                        <div className="p-8 lg:flex lg:flex-col lg:justify-center">
                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{newsArticles[0].date}</span>
                                </div>
                                <span>•</span>
                                <span>{newsArticles[0].readTime}</span>
                                <span>•</span>
                                <span>{newsArticles[0].author}</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                                {newsArticles[0].title}
                            </h3>

                            <p className="text-slate-600 leading-relaxed mb-6">
                                {newsArticles[0].content}
                            </p>

                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => handleArticleClick(newsArticles[0])}
                                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all duration-300 group"
                                >
                                    <span>Đọc thêm</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <div className="flex items-center gap-4 text-sm text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <Eye className="w-4 h-4" />
                                        <span>{newsArticles[0].views}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Heart className="w-4 h-4" />
                                        <span>{newsArticles[0].likes}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Articles Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {newsArticles.slice(1).map((article, index) => (
                        <motion.article
                            key={article.id}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer"
                            onClick={() => handleArticleClick(article)}
                        >
                            {/* Article Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />

                                {/* Category Badge */}
                                <div className="absolute top-3 left-3">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleCategoryClick(article.category);
                                        }}
                                        className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-xs font-semibold hover:bg-white transition-colors"
                                    >
                                        {article.category}
                                    </button>
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Article Content */}
                            <div className="p-6">
                                {/* Meta Info */}
                                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        <span>{article.date}</span>
                                    </div>
                                    <span>•</span>
                                    <span>{article.readTime}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors leading-tight line-clamp-2">
                                    {article.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {article.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between">
                                    <div className="text-xs text-slate-500">
                                        Bởi {article.author}
                                    </div>

                                    <div className="flex items-center gap-3 text-xs text-slate-500">
                                        <div className="flex items-center gap-1">
                                            <Eye className="w-3 h-3" />
                                            <span>{article.views}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Heart className="w-3 h-3" />
                                            <span>{article.likes}</span>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                alert('Chia sẻ bài viết');
                                            }}
                                            className="p-1 rounded-full hover:bg-slate-100 transition-colors"
                                        >
                                            <Share2 className="w-3 h-3" />
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Load More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => alert('Tải thêm bài viết')}
                        className="bg-slate-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                        Xem thêm bài viết
                    </motion.button>
                </motion.div>

                {/* Newsletter Signup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16"
                >
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 md:p-12 text-white text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Đăng ký nhận tin tức mới nhất
                        </h3>
                        <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                            Nhận thông tin về xu hướng mới, kiến thức chuyên môn và các dự án đặc biệt từ LIN HOME
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="flex-1 px-4 py-3 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                Đăng ký
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default NewsSection;