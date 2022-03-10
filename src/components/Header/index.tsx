import { FC, useContext } from 'react';
import { EnterprisesContext } from '../../context/EnterprisesProvider';
import { SearchBar } from '../SearchBar';
import { Container } from './styles';

export type HeaderProps = {
  currentScroll: number;
};

export const Header: FC<HeaderProps> = (props) => {
  const { isSearching } = useContext(EnterprisesContext);

  return (
    <Container {...props}>
      {!isSearching && <img src="logo-nav.png" alt="logo ioasys" />}
      <SearchBar />
    </Container>
  );
};
