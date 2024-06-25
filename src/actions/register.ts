"use server";

import { RegisterSchema } from "@/lib/zod";
import { RegisterFormType } from "@/components/auth";
import bcrypt from "bcryptjs";
import { createUser, getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (data: RegisterFormType) => {
  const validatedData = RegisterSchema.safeParse(data);

  if (!validatedData.success) {
    return { error: "Invalid fields data!" };
  }

  const { email, password, name } = validatedData.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  const createdUser = await createUser({ email, hashedPassword, name });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Confirmation email sent!" };
};
