"use server";

import { LoginFormType } from "@/components/auth";
import { LoginSchema } from "@/lib/zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const login = async (data: LoginFormType) => {
  const validatedData = LoginSchema.safeParse(data);

  if (!validatedData.success) {
    return { error: "Invalid fields data!" };
  }

  const { email, password } = validatedData.data;

  // Check Credentials before signIn to prevent next-auth from loggin error in server console
  const user = await getUserByEmail(email);

  if (!user || !user.password) {
    return { error: "Invalid credentials!" };
  }

  const passwordsMatch = await bcrypt.compare(password, user.password);

  if (!passwordsMatch) {
    return { error: "Invalid credentials!" };
  }

  if (!user.emailVerified) {
    const verificationToken = await generateVerificationToken(user.email);

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Confirmation email sent!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
