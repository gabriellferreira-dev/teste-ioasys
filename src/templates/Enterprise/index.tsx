import { useRouter } from 'next/router';
import { ArrowBack } from '@material-ui/icons';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { EnterprisesArea } from '../../styles/EnterprisesArea';
import { EnterpriseCard } from '../../components/EnterpriseCard';
import { Loading } from '../../components/Loading';
import { IEnterprise } from '../../types/Enterprises';
import { useEffect, useState } from 'react';
import { getEnterprise } from '../../services/api';
import { useQuery } from 'react-query';

type EnterpriseProps = {
  id?: string;
};

const EnterpriseTemplate = (props: EnterpriseProps) => {
  const router = useRouter();

  const [enterprise, setEnterprise] = useState<IEnterprise>();

  const { id } = router.query;

  const { data, isLoading } = useQuery(`enterprise-${id || props.id}`, () =>
    getEnterprise(id as string),
  );

  useEffect(() => {
    if (data) {
      setEnterprise(data as IEnterprise);
    }
  }, [data]);

  if (isLoading) return <Loading />;

  return (
    <Container>
      <Header>
        <button onClick={() => router.back()}>
          <ArrowBack />
        </button>
        <p>{enterprise?.enterprise_name}</p>
      </Header>
      <EnterprisesArea>
        <EnterpriseCard
          imagePath={`${process.env.NEXT_PUBLIC_BASE_URL}${enterprise?.photo}`}
          description={enterprise?.description as string}
        />
      </EnterprisesArea>
    </Container>
  );
};

export default EnterpriseTemplate;
