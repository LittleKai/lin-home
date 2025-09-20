// pages/_document.js - Next.js Document Component
// Để load Font Awesome và các external stylesheets

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="vi">
            <Head>
                {/* Font Awesome Icons */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />

                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

                {/* Favicon - tạo file này nếu chưa có */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

                {/* Meta tags cơ bản */}
                <meta name="description" content="LIN HOME - Thiết kế và thi công kiến trúc xây dựng hiện đại" />
                <meta name="keywords" content="thiết kế kiến trúc, thi công xây dựng, thiết kế nội thất, LIN HOME" />
                <meta name="author" content="LIN HOME Team" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}