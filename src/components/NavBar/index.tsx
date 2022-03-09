import { useState } from 'react';
import { SearchBar } from '../../SearchBar';
import { Container } from './styles';

export const NavBar = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);

  return (
    <Container>
      {!isSearching && <img src="logo-nav.png" alt="logo ioasys" />}
      <SearchBar isSearching={isSearching} setIsSearching={setIsSearching} />
    </Container>
  );
};
