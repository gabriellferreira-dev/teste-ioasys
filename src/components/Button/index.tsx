import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { Container } from './styles';

interface BProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button: FC<BProps> = ({ children, ...atributes }) => {
  return <Container {...atributes}>{children}</Container>;
};
