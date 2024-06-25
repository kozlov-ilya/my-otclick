"use server";

import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { NewPasswordSchema } from "@/lib/zod";
import { getUserByEmail } from "@/data/user";
import { getPasswordResetTokenByToken } from "@/data/passwordResetToken";
import { NewPasswordFormType } from "@/components/auth/NewPasswordForm/NewPasswordForm";

export const setNewPassword = async (
  data: NewPasswordFormType,
  token: string
) => {
  const validatedData = NewPasswordSchema.safeParse(data);

  if (!validatedData.success) {
    return { error: "Invalid password!" };
  }

  const { password } = validatedData.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exist!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await db.passwordResetToken.delete({ where: { id: existingToken.id } });

  return { success: "Password updated!" };
};
