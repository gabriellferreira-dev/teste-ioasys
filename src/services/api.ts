import { UserSignIn } from './../types/Enterprises';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { SignResponse } from '../types/Enterprises';
import ApiClient from './axios';

const signInEndPoint = process.env.NEXT_PUBLIC_API_USER_AUTH_ROUTE || '';

export type ErrorResponse = {
  success: boolean;
  errors: string[];
};

export const postUser = async (
  userData: UserSignIn,
): Promise<AxiosResponse<SignResponse> | undefined> => {
  try {
    const response = await ApiClient.post<SignResponse>(
      signInEndPoint,
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
