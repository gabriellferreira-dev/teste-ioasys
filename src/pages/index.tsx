import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import { useSession, getSession } from 'next-auth/react';
import Layout from '../components/Layoult';
import { Container } from './styles';

import { useRouter } from 'next/router';

const Index: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading' && typeof window !== 'undefined') return null;

  if (status !== 'loading' && !session) {
    router.push(process.env.NEXT_PUBLIC_LOGIN_URL as string);
  }

  if (status === 'loading' || !session) return null;

  return (
    <Layout title="Ioasys Empresas">
      <Container>
        <picture>
          <source
            srcSet="logo-home.png"
            media="(max-width: 600px)"
            data-testid="ioasys-logo"
          />
          <img src="logo-home@2x.png" alt="logo" data-testid="ioasys-logo" />
        </picture>
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
