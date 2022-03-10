import { Container } from './styles';
import { Search, Close } from '@material-ui/icons';
import { ChangeEvent, FC, useCallback, useContext, useEffect } from 'react';
import { EnterprisesContext } from '../../context/EnterprisesProvider';
import { useEnterprises } from '../../hooks/useEnterprises';
import { IEnterprise } from '../../types/Enterprises';

export const SearchBar: FC = () => {
  const {
    isSearching,
    setIsSearching,
    setEnterprises,
    searchingTerm,
    setSearchingTerm,
  } = useContext(EnterprisesContext);

  const { data: enterprises } = useEnterprises();

  const filterEnterprises = useCallback(() => {
    if (enterprises) {
      const enterprisesArr = enterprises as IEnterprise[];
      const filteredEnterprises = enterprisesArr.filter(
        (enterprise) =>
          enterprise.enterprise_name
            .toLocaleLowerCase()
            .includes(searchingTerm.toLocaleLowerCase()) ||
          enterprise.city
            .toLocaleLowerCase()
            .includes(searchingTerm.toLocaleLowerCase()) ||
          enterprise.enterprise_type.enterprise_type_name
            .toLocaleLowerCase()
            .includes(searchingTerm.toLocaleLowerCase()),
      );
      setEnterprises(filteredEnterprises);
    }
  }, [enterprises, searchingTerm, setEnterprises]);

  useEffect(() => {
    filterEnterprises();
  }, [filterEnterprises, searchingTerm]);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchingTerm(target.value);
  };

  const handleCancel = () => {
    setSearchingTerm('');
    setIsSearching(false);
  };

  return (
    <Container isSearching={isSearching} data-testid="search-bar">
      <button
        onClick={() => setIsSearching(true)}
        data-testid="search-bar-button"
      >
        <Search />
      </button>
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchingTerm}
        onChange={handleChange}
        data-testid="search-input"
      />
      <Close
        className="cancel-search"
        onClick={handleCancel}
        data-testid="cancel-search"
      />
    </Container>
  );
};
