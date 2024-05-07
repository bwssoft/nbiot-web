'use server';

import NextAuth, { User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { compareSync } from 'bcrypt';
import { userRepo } from './app/lib/repository/user';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials): Promise<User | null> {
        const parsedCredentials = z
          .object({ name: z.string(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { name, password } = parsedCredentials.data;
          const user = await userRepo.findOne({ name });
          if (!user) {
            return null;
          }
          const isValidPassword = compareSync(password, user.password);
          if (!isValidPassword) {
            return null
          }
          return {
            name: user.name,
            uuid: user.uuid,
            created_at: user.created_at
          };
        }
        return null;
      },
    }),
  ],
});