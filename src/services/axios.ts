import axios, { AxiosRequestConfig } from 'axios';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

const baseURL = 'https://empresas.ioasys.com.br/api/v1/';
const headers = {
  'Content-type': 'application/json',
};

type Headers = {
  uid: string;
  client: string;
  'access-token': string;
};

interface CustomSession extends Session {
  accessHeaders?: Headers;
}

const ApiClient = () => {
  const client = axios.create({
    baseURL,
    headers,
  });

  client.interceptors.request.use(async (config: AxiosRequestConfig) => {
    const session: CustomSession = await getSession();

    if (session) {
      if (!config.headers) config.headers = {};

      if (session.accessHeaders) {
        config.headers.uid = session.accessHeaders.uid;
        config.headers.client = session.accessHeaders.client;
        config.headers['access-token'] = session.accessHeaders['access-token'];
      }
    }

    return config;
  });

  return client;
};

export default ApiClient();
