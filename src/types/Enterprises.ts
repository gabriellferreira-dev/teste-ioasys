export type UserSignIn = {
  email: string;
  password: string;
};

export type Portifolio = {
  enterprises_number: number;
  enterprises: IEnterprise[];
};

type EnterpriseType = {
  id: number;
  enterprise_type_name: string;
};

export type IEnterprise = {
  id: number;
  email_enterprise: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  phone: string;
  own_enterprise: boolean;
  enterprise_name: string;
  photo: string;
  description: string;
  city: string;
  country: string;
  value: number;
  share_price: number;
  enterprise_type: EnterpriseType;
};

export interface Investor {
  id: number;
  investor_name: string;
  email: string;
  city: string;
  country: string;
  balance: number;
  photo: null;
  portfolio: Portifolio;
  portfolio_value: number;
  first_access: boolean;
  super_angel: boolean;
}

export type SignResponse = {
  success: boolean;
  investor?: Investor;
  errors?: string[];
};

export type GetEnterprises = {
  enterprises: IEnterprise[];
  errors: string[] | null;
};
