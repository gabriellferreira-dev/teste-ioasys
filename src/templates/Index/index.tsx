import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { EnterprisesContainer } from '../../components/EnterprisesContainer';
import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { EnterprisesContext } from '../../context/EnterprisesProvider';
import { Container } from './styles';

const IndexTemplate = () => {
  const { data: session, status } = useSession();
  const { isSearching } = useContext(EnterprisesContext);

  const router = useRouter();

  const [currentScroll, setCurrentScroll] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setCurrentScroll(window.scrollY);
      });
    }
  }, []);

  if (status === 'loading' && typeof window !== 'undefined') return null;

  if (status !== 'loading' && !session) {
    router.push(process.env.NEXT_PUBLIC_LOGIN_URL as string);
  }

  return (
    <Container>
      <Header currentScroll={currentScroll} isSearching={isSearching}>
        {!isSearching && <img src="logo-nav.png" alt="logo ioasys" />}
        <SearchBar />
      </Header>
      <EnterprisesContainer />
    </Container>
  );
};

export default IndexTemplate;
