"use server";

import { ResetSchema } from "@/lib/zod";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { ResetFormType } from "@/components/auth";
import { generatePasswordResetToken } from "@/lib/tokens";

export const reset = async (formData: ResetFormType) => {
  const validatedData = ResetSchema.safeParse(formData);

  if (!validatedData.success) {
    return { error: "Invalid email!" };
  }

  const { email } = validatedData.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found!" };
  }

  if (!existingUser.password) {
    return { error: "Email used with OAuth provider!" };
  }

  const passwordResetToken = await generatePasswordResetToken(email);

  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: "Reset email sent!" };
};
