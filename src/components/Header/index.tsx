import { FC, ReactNode } from 'react';
import { Container } from './styles';

export type HeaderProps = {
  currentScroll?: number;
  children: ReactNode;
  isSearching?: boolean;
};

export const Header: FC<HeaderProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
