import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import { useSession, getSession } from 'next-auth/react';
import Layout from '../components/Layoult';
import { Container } from './styles';

import { useRouter } from 'next/router';
import { Header } from '../components/Header';
import { EnterprisesContainer } from '../components/EnterprisesContainer';
import { useEffect, useState } from 'react';

const Index: NextPage = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  const [currentScroll, setCurrentScroll] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setCurrentScroll(window.scrollY);
      });
    }
  }, []);

  if (status === 'loading' && typeof window !== 'undefined') return null;

  if (status !== 'loading' && !session) {
    router.push(process.env.NEXT_PUBLIC_LOGIN_URL as string);
  }

  return (
    <Layout title="Ioasys Empresas">
      <Container>
        <Header currentScroll={currentScroll} />
        <EnterprisesContainer />
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default Index;
