import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';

import { getSession, SignInResponse } from 'next-auth/react';
import { FormLogin } from '../../components/FormLogin';
import Layout from '../../components/Layoult';
import { Container } from './styles';

import { UserSignIn } from '../../types/Enterprises';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { Loading } from '../../components/Loading';

const Login: NextPage = () => {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (data: UserSignIn) => {
    if (!data.email || !data.password) return;

    setIsLoading(true);

    const response = await signIn('credentials', {
      ...data,
      redirect: false,
    });

    setIsLoading(false);

    if (response) {
      const data = response as SignInResponse;
      if (!data.ok) {
        setError('Credenciais informadas são inválidas, tente novamente.');
        return;
      }
    }

    const redirect = router.query?.redirect || '/';

    router.push(redirect as string);
  };

  return (
    <Layout title="Ioasys Empresas - Login">
      <Container>
        <picture>
          <source
            srcSet="logo-home.png"
            media="(max-width: 600px)"
            data-testid="ioasys-logo"
          />
          <img src="logo-home@2x.png" alt="logo" data-testid="ioasys-logo" />
        </picture>
        <h2 className="Text-Style-11" data-testid="welcome-text">
          BEM-VINDO AO EMPRESAS
        </h2>
        <p data-testid="subtext">
          Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.
        </p>
        <FormLogin
          formSubmit={handleSubmit}
          error={error}
          setError={setError}
        />
        {isLoading && <Loading />}
      </Container>
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
