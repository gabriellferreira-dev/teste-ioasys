import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getEnterprise } from '../../../services/api';
import { Loading } from '../../../components/Loading';
import { IEnterprise } from '../../../types/Enterprises';
import { useEffect, useState } from 'react';
import Layout from '../../../components/Layoult';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import EnterpriseTemplate from '../../../templates/Enterprise';

export const getServerSideProps: GetServerSideProps = async ({
  query,
  ...context
}: GetServerSidePropsContext) => {
  const session = await getSession(context);

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
      <EnterpriseTemplate />
    </Layout>
  );
};

export default Enterprise;
