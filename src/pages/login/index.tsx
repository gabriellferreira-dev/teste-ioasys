import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';

import { getSession } from 'next-auth/react';
import Layout from '../../components/Layoult';
import { LoginTemplate } from '../../templates/Login';

const Login: NextPage = () => {
  return (
    <Layout title="Ioasys Empresas - Login">
      <LoginTemplate />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await getSession(context);

  if (session) {
    return {
      props: { session },
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
};

export default Login;
