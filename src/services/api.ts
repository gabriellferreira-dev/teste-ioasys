import {
  UserSignIn,
  GetEnterprises,
  IEnterprise,
} from './../types/Enterprises';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { SignResponse } from '../types/Enterprises';
import ApiClient from './axios';

const signInEndPoint = process.env.NEXT_PUBLIC_API_USER_AUTH_ROUTE || '';
const apiRoute = process.env.NEXT_PUBLIC_API_ROUTE || '';
const enterprisesEndPoint =
  process.env.NEXT_PUBLIC_API_GET_ENTERPRISES_ROUTE || '';

export type ErrorResponse = {
  success: boolean;
  errors: string[];
};

export const postUser = async (
  userData: UserSignIn,
): Promise<AxiosResponse<SignResponse> | undefined> => {
  try {
    const response = await ApiClient.post<SignResponse>(
      `${apiRoute}${signInEndPoint}`,
      userData,
    );

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorResponse = error as AxiosError<ErrorResponse>;
      if (errorResponse.response) {
        return errorResponse.response;
      }
    }
  }
};

export const getEnterprises = async (): Promise<
  IEnterprise[] | { errors: string[] }
> => {
  try {
    const response = await ApiClient.get<GetEnterprises>(
      `${apiRoute}${enterprisesEndPoint}`,
    );

    return response.data.enterprises;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorResponse = error as AxiosError<{ errors: string[] }>;
      if (errorResponse.response) {
        return errorResponse.response.data;
      }
    }
    return { errors: ['Erro interno'] };
  }
};
