import type { NextPage } from 'next';
import { FormLogin } from '../components/FormLogin';
import Layout from '../components/Layoult';
import { Container } from './styles';

const Login: NextPage = () => (
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
      <FormLogin />
    </Container>
  </Layout>
);

export default Login;
