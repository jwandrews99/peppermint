import NextAuth from "next-auth";
import Providers from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "../../../prisma/prisma";
import AzureADProvider from "next-auth/providers/azure-ad";

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers({
      async authorize(credentials) {
        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (!user) throw new Error("No user found");

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) throw new Error("Password is not valid");

          return {
            email: user.email,
            id: user.id,
            name: user.name,
            isAdmin: user.isAdmin,
          };
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, 
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  database: process.env.DATABASE_URL,
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) { 
      session.accessToken = token.accessToken;
      session.id = token.user.id;
      session.user = {
        ...token.user,
        id: token.user.id,
        isAdmin: token.user.isAdmin,
        // Add additional properties from Azure AD to the session
        azureAD: {
          // ... add properties like email, name, etc. from Azure AD
        },
      };
      return session;
    },
  },
  debug: true,
};

export default (req, res) => NextAuth(req, res, options);