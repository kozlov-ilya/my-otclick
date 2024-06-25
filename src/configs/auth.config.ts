import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/lib/zod";
import { getUserByEmail } from "@/data/user";

import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedData = LoginSchema.safeParse(credentials);

        if (!validatedData.success) {
          return null;
        }

        const { email, password } = validatedData.data;

        const user = await getUserByEmail(email);

        if (!user || !user.password) {
          return null;
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) {
          return null;
        }

        return user;
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
