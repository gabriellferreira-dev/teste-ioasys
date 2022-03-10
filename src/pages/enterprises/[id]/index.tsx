import { useRouter } from 'next/router';
import { ArrowBack } from '@material-ui/icons';
import { Header } from '../../../components/Header';
import { Container } from './styles';
import { useQuery } from 'react-query';
import { getEnterprise } from '../../../services/api';
import { Loading } from '../../../components/Loading';
import { IEnterprise } from '../../../types/Enterprises';
import { useEffect, useState } from 'react';
import Layout from '../../../components/Layoult';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { EnterpriseCard } from '../../../components/EnterpriseCard';
import { EnterprisesArea } from '../../../styles/EnterprisesArea';

export const getServerSideProps: GetServerSideProps = async ({
  query,
  ...context
}: GetServerSidePropsContext) => {
  const session = await getSession(context);

  console.log(session);

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      id: query.id,
    },
  };
};

type EnterpriseProps = {
  id?: string;
};

const Enterprise = (props: EnterpriseProps) => {
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
    <Layout title={`${enterprise?.enterprise_name} - Ioasys Empresas`}>
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
    </Layout>
  );
};

export default Enterprise;
