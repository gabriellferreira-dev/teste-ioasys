import axios, { AxiosRequestConfig } from 'axios';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || '';
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
    const session = await getSession();

    if (session) {
      const customSession = session as CustomSession;
      if (!config.headers) config.headers = {};

      if (customSession.accessHeaders) {
        config.headers.uid = customSession.accessHeaders.uid;
        config.headers.client = customSession.accessHeaders.client;
        config.headers['access-token'] =
          customSession.accessHeaders['access-token'];
      }
    }

    return config;
  });

  return client;
};

export default ApiClient();
