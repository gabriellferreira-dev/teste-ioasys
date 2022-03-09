import { Container } from './styles';
import { Search, Close } from '@material-ui/icons';
import { ChangeEvent, FC, useState } from 'react';

type SearchBarProps = {
  setIsSearching: (value: boolean) => void;
  isSearching: boolean;
};

export const SearchBar: FC<SearchBarProps> = ({
  setIsSearching,
  isSearching,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(target.value);
  };

  const handleCancel = () => {
    setSearchTerm('');
    setIsSearching(false);
  };

  return (
    <Container isSearching={isSearching}>
      <button onClick={() => setIsSearching(true)}>
        <Search />
      </button>
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleChange}
      />
      <Close className="cancel-search" onClick={handleCancel} />
    </Container>
  );
};
