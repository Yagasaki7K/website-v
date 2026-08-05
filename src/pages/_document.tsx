import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="pt-br" data-scroll-behavior="smooth">
                <Head>
                    <meta name="description" content="Tati Murano - Atelier Brasil" />
                    <link rel="canonical" href="https://tatimurano.com.br" />

                    <meta property="og:url" content="https://tatimurano.com.br" />
                    <meta property="og:title" content="Tati Murano - Atelier Brasil" />
                    <meta
                        property="og:description"
                        content="Tati Murano - Atelier Brasil"
                    />
                    <meta property="og:image" content="/samurai-colorful.png" />

                    <meta property="og:image:width" content="460" />
                    <meta property="og:image:height" content="460" />
                    <meta property="og:image:alt" content="Tati Murano" />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:site_name" content="tatimurano" />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@tatimurano" />
                    <meta name="twitter:creator" content="@tatimurano" />

                    <meta
                        name="keywords"
                        content="tati, murano, atelier, brasil, arte, roupa, confecção, premium, design, moda, fashion, estilo, qualidade, exclusividade, tendências, coleção, vestuário, acessórios, verão, inverno, primavera, outono, luxo, conforto, elegância, sofisticação, inovação, criatividade"
                    />

                    <meta name="author" content="Anderson 'Yagasaki' Marlon" />
                    <meta name="robots" content="index, follow" />

                    <link
                        rel="shortcut icon"
                        href="/samurai-colorful.png"
                        type="image/png"
                    />

                    <meta property="og:locale" content="pt_BR" />

                    <title>Codename: V</title>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}