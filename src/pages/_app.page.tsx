import Head from 'next/head';
import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/globals';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Minhas Viagens</title>
                <link rel="short icon" href="/icons/favicon.ico" />
                <link rel="apple-touch-icon" href="/images/favicon.png" />
                <link rel="manifest" href="/jsons/manifest.json" />
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                    crossOrigin=""
                />
                <meta name="theme-color" content="#06092b" />

                <meta
                    name="Descrição"
                    content="Projeto com objetivo de apresentação de trabalhos realizados"
                />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}
