import { FormLogin } from '../../components/FormLogin';
import { Loading } from '../../components/Loading';
import { Container } from './styles';

import { SignInResponse } from 'next-auth/react';

import { UserSignIn } from '../../types/Enterprises';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

export const LoginTemplate = () => {
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
      <FormLogin formSubmit={handleSubmit} error={error} setError={setError} />
      {isLoading && <Loading />}
    </Container>
  );
};
