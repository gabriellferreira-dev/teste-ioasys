import Link from 'next/link';
import { FC } from 'react';
import { Container } from './styles';

type CardProps = {
  name: string;
  type: string;
  local: string;
  photoUrl: string;
  id: number;
};

export const EnterpriseLink: FC<CardProps> = ({
  name,
  type,
  local,
  photoUrl,
  id,
}) => {
  return (
    <Link href="/enterprises/[id]" as={`/enterprises/${id}`}>
      <Container data-testid="enterprise-card">
        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${photoUrl}`} alt="" />
        <div>
          <h3>{name}</h3>
          <p>{type}</p>
          <span>{local}</span>
        </div>
      </Container>
    </Link>
  );
};
