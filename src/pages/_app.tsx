import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider, DefaultOptions } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../styles/theme';
import { EnterprisesProvider } from '../context/EnterprisesProvider';

const STALE_TIME = 5 * 60 * 1000; // 5 SECONDS

const defaultOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    retry: false,
    staleTime: STALE_TIME,
  },
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions }));
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Gabriel Ferreira" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <EnterprisesProvider>
            <QueryClientProvider client={queryClient}>
              <GlobalStyle />
              <Component {...pageProps} />
            </QueryClientProvider>
          </EnterprisesProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
