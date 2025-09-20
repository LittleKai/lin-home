// pages/_app.js - Next.js App Component
// Import global styles và setup cho toàn bộ ứng dụng

import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
    useEffect(() => {
        // Smooth scrolling behavior
        if (typeof window !== 'undefined') {
            document.documentElement.style.scrollBehavior = 'smooth'
        }

        // Add scroll event listener for header
        const handleScroll = () => {
            const header = document.querySelector('.header')
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled')
                } else {
                    header.classList.remove('scrolled')
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <Head>
                {/* Meta tags cơ bản */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://linhome.vn/" />
                <meta property="og:title" content="LIN HOME - Kiến Trúc Xây Dựng Hiện Đại" />
                <meta property="og:description" content="Thiết kế và thi công kiến trúc xây dựng hiện đại với chất lượng tốt nhất" />
                <meta property="og:image" content="/images/og-image.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://linhome.vn/" />
                <meta property="twitter:title" content="LIN HOME - Kiến Trúc Xây Dựng Hiện Đại" />
                <meta property="twitter:description" content="Thiết kế và thi công kiến trúc xây dựng hiện đại với chất lượng tốt nhất" />
                <meta property="twitter:image" content="/images/twitter-image.jpg" />

                {/* Default title */}
                <title>LIN HOME - Kiến Trúc Xây Dựng Hiện Đại</title>
            </Head>

            {/* Render the page component */}
            <Component {...pageProps} />

            {/* Global scripts - chỉ những script thực sự cần thiết */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            // Global utilities và helper functions
            window.LIN_HOME = {
              // Smooth scroll to element
              scrollToElement: function(elementId) {
                const element = document.getElementById(elementId);
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              },
              
              // Show notification
              showNotification: function(message, type = 'success') {
                const notification = document.createElement('div');
                notification.className = 'notification notification-' + type;
                notification.textContent = message;
                notification.style.cssText = \`
                  position: fixed;
                  top: 20px;
                  right: 20px;
                  background: \${type === 'success' ? '#10b981' : '#ef4444'};
                  color: white;
                  padding: 16px 24px;
                  border-radius: 12px;
                  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                  z-index: 9999;
                  opacity: 0;
                  transform: translateX(100%);
                  transition: all 0.3s ease;
                \`;
                
                document.body.appendChild(notification);
                
                requestAnimationFrame(() => {
                  notification.style.opacity = '1';
                  notification.style.transform = 'translateX(0)';
                });
                
                setTimeout(() => {
                  notification.style.opacity = '0';
                  notification.style.transform = 'translateX(100%)';
                  setTimeout(() => {
                    if (notification.parentNode) {
                      notification.parentNode.removeChild(notification);
                    }
                  }, 300);
                }, 3000);
              }
            };
          `,
                }}
            />
        </>
    )
}