/**
 * `@/pages/_document.tsx`
 */

import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
    render() {
        return (
            <Html
                lang="en"
                className="theme--dark">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin={"true"}
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
