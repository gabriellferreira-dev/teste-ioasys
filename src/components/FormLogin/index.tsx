import { FC } from 'react';
import { TextField } from '../TextField';
import { MailOutlineOutlined, LockOpen } from '@material-ui/icons';
import { Container } from './styles';
import { Button } from '../Button';

export const FormLogin: FC = () => {
  return (
    <Container autoComplete="none">
      <TextField
        Icon={MailOutlineOutlined}
        placeholder="E-mail"
        type="email"
        autoComplete="none"
        data-testid="email-input"
      />
      <TextField
        Icon={LockOpen}
        placeholder="Senha"
        type="password"
        autoComplete="none"
        id="password-input"
        data-testid="password-input"
      />
      <Button type="submit" data-testid="submit-login-button">
        ENTRAR
      </Button>
    </Container>
  );
};
