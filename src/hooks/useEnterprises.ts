import { getEnterprises } from './../services/api';
import { useQuery } from 'react-query';

export const useEnterprises = (criteria?: string) =>
  useQuery(
    criteria ? ['enterprises', criteria] : 'enterprises',
    getEnterprises,
  );
