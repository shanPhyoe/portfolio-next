import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lora&family=M+PLUS+1:wght@400;700;800&display=swap"
                    rel="stylesheet"
                />
                <meta name="portfolio" content="shanPhyoe" />
                <meta name="description" content="shanPhyoe's homepage" />
                <meta name="author" content="shanPhyoe" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
