import { createContext, FC, useState } from 'react';

import { IEnterprise } from '../types/Enterprises';

const defaultState = {
  enterprises: [],
  isSearching: false,
  setIsSearching: () => '',
  setEnterprises: () => '',
  searchingTerm: '',
  setSearchingTerm: () => '',
};

interface IEnterprisesContext {
  enterprises: IEnterprise[];
  setEnterprises: (values: IEnterprise[]) => void;
  isSearching: boolean;
  setIsSearching: (value: boolean) => void;
  searchingTerm: string;
  setSearchingTerm: (value: string) => void;
}

export const EnterprisesContext =
  createContext<IEnterprisesContext>(defaultState);

export const EnterprisesProvider: FC = ({ children }) => {
  const [enterprises, setEnterprises] = useState<IEnterprise[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchingTerm, setSearchingTerm] = useState<string>('');

  const values = {
    enterprises,
    setEnterprises,
    isSearching,
    setIsSearching,
    searchingTerm,
    setSearchingTerm,
  };

  return (
    <EnterprisesContext.Provider value={values}>
      {children}
    </EnterprisesContext.Provider>
  );
};
