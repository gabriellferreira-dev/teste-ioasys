import { FC } from 'react';
import { StyledEnterpriseCard } from './styles';

type EnterpriseCardProps = {
  imagePath: string;
  description: string;
};

export const EnterpriseCard: FC<EnterpriseCardProps> = ({
  imagePath,
  description,
}) => {
  return (
    <StyledEnterpriseCard>
      <img src={imagePath} alt="" />
      <p>{description}</p>
    </StyledEnterpriseCard>
  );
};
