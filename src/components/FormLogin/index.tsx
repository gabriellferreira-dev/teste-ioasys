import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { TextField } from '../TextField';
import { MailOutlineOutlined, LockOpen } from '@material-ui/icons';
import { Container } from './styles';
import { Button } from '../Button';
import { UserSignIn } from '../../types/Enterprises';

interface FormProps {
  formSubmit: (data: UserSignIn) => Promise<void | boolean>;
  setError: (value: string) => void;
  error: string;
}

export const FormLogin: FC<FormProps> = ({ formSubmit, error, setError }) => {
  const [data, setData] = useState<UserSignIn>({
    email: '',
    password: '',
  });

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [name]: value });
    if (error) setError('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    formSubmit(data);
  };

  return (
    <Container isError={!!error} autoComplete="none" onSubmit={handleSubmit}>
      <TextField
        Icon={MailOutlineOutlined}
        placeholder="E-mail"
        type="email"
        name="email"
        autoComplete="none"
        data-testid="email-input"
        onChange={handleChange}
        isError={!!error}
        required
      />
      <TextField
        Icon={LockOpen}
        placeholder="Senha"
        type="password"
        name="password"
        autoComplete="none"
        id="password-input"
        data-testid="password-input"
        onChange={handleChange}
        isError={!!error}
        required
      />
      {error && <span className="error-message">{error}</span>}
      <Button type="submit" data-testid="submit-login-button">
        ENTRAR
      </Button>
    </Container>
  );
};
