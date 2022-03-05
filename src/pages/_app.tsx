import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Gabriel Ferreira" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
