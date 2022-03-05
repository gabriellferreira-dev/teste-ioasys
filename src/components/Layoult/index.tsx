import Head from 'next/head';
import { ReactNode } from 'react';

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export default function Layout({
  title = 'Ioasys Empresas',
  children,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}
