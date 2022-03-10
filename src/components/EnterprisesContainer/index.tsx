import { FC, useContext } from 'react';
import { EnterprisesContext } from '../../context/EnterprisesProvider';
import { EnterpriseCard } from '../EnterpriseCard';
import { Container } from './styles';

export const EnterprisesContainer: FC = () => {
  const { isSearching, enterprises, searchingTerm } =
    useContext(EnterprisesContext);

  return (
    <Container>
      {!isSearching && <p>Clique na busca para iniciar.</p>}
      {isSearching && (
        <>
          {!!searchingTerm && enterprises.length ? (
            enterprises.map((enterprise, i) => (
              <EnterpriseCard
                key={i}
                name={enterprise.enterprise_name}
                type={enterprise.enterprise_type.enterprise_type_name}
                local={`${enterprise.city}, ${enterprise.country}`}
                photoUrl={enterprise.photo}
              />
            ))
          ) : (
            <>
              {isSearching && !!searchingTerm && (
                <p>Nenhuma empresa encontrada</p>
              )}
            </>
          )}
        </>
      )}
    </Container>
  );
};
