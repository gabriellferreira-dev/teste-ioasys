import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { postUser } from '../../../services/api';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'E-mail',
        },
        password: {
          label: 'Password',
          type: 'Password',
        },
      },
      async authorize(credentials) {
        try {
          const response = await postUser({
            email: credentials?.email as string,
            password: credentials?.password as string,
          });

          if (!response?.data.success) {
            return null;
          }

          return {
            id: response?.data.investor?.id,
            name: response?.data.investor?.investor_name,
            email: response?.data.investor?.email,
            headers: {
              uid: response.headers.uid,
              client: response.headers.client,
              'access-token': response.headers['access-token'],
            },
          };
        } catch (error) {
          console.log(error);

          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user?.email) {
        token.id = user?.id;
        token.headers = user?.headers;
      }

      return token;
    },
    session: async ({ session, token }) => {
      console.log(token);

      session.accessHeaders = token.headers;
      session.user = {
        name: token.name,
        email: token.email,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    maxAge: 30 * 24 * 60 * 30, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: '/login',
  },
});
