import { FC, useContext } from 'react';
import { EnterprisesContext } from '../../context/EnterprisesProvider';
import { EnterpriseLink } from '../EnterpriseLink';
import { Container } from './styles';
import { EnterprisesArea } from '../../styles/EnterprisesArea';

export const EnterprisesContainer: FC = () => {
  const { isSearching, enterprises, searchingTerm } =
    useContext(EnterprisesContext);

  return (
    <EnterprisesArea>
      <Container>
        {!isSearching && <p>Clique na busca para iniciar.</p>}
        {isSearching && (
          <>
            {!!searchingTerm && enterprises.length ? (
              enterprises.map((enterprise, i) => (
                <EnterpriseLink
                  key={i}
                  name={enterprise.enterprise_name}
                  type={enterprise.enterprise_type.enterprise_type_name}
                  local={`${enterprise.city}, ${enterprise.country}`}
                  photoUrl={enterprise.photo}
                  id={enterprise.id}
                />
              ))
            ) : (
              <>
                {isSearching && !!searchingTerm && (
                  <p>Nenhuma empresa foi encontrada para a busca realizada.</p>
                )}
              </>
            )}
          </>
        )}
      </Container>
    </EnterprisesArea>
  );
};
