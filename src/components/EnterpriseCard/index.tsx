import { FC } from 'react';
import { Container } from './styles';

type CardProps = {
  name: string;
  type: string;
  local: string;
  photoUrl: string;
};

export const EnterpriseCard: FC<CardProps> = ({
  name,
  type,
  local,
  photoUrl,
}) => {
  return (
    <Container data-testid="enterprise-card">
      <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${photoUrl}`} alt="" />
      <div>
        <h3>{name}</h3>
        <p>{type}</p>
        <span>{local}</span>
      </div>
    </Container>
  );
};
