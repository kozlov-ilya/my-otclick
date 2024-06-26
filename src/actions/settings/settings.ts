"use server";

import * as z from "zod";
import { SettingsSchema } from "@/lib/zod";
import { getCurrentUser } from "@/lib/auth";
import { getUserByEmail, getUserById, getUserByUsername } from "@/data/user";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
import bcrypt from "bcryptjs";

export const settings = async (data: z.infer<typeof SettingsSchema>) => {
  const user = await getCurrentUser();
  if (!user) return { error: "Unauthorized" };

  const dbUser = await getUserById(user.id);
  if (!dbUser) return { error: "Unauthorized" };

  if (user.isOAuth) {
    data.email = undefined;
    data.password = undefined;
    data.newPassword = undefined;
  }

  if (data.email && data.email !== user.email) {
    const existingUser = await getUserByEmail(data.email);

    if (existingUser && existingUser.id !== user.id)
      return { error: "Email already in use" };

    const verificationToken = await generateVerificationToken(data.email);

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    await db.user.update({
      where: { id: user.id },
      data: { email: data.email, emailVerified: null },
    });

    return { success: "Confirmation email sent!" };
  }

  if (data.password && data.newPassword && dbUser.password) {
    const isPasswordCorrect = await bcrypt.compare(
      data.password,
      dbUser.password
    );

    if (!isPasswordCorrect) return { error: "Incorrect password" };

    const hashedNewPassword = await bcrypt.hash(data.newPassword, 10);

    const isSamePassword = await bcrypt.compare(
      data.newPassword,
      dbUser.password
    );
    if (isSamePassword) {
      return { error: "Same password!" };
    }

    data.password = hashedNewPassword;
    data.newPassword = undefined;
  } else {
    data.password = undefined;
    data.newPassword = undefined;
  }

  if (data.username && data.username !== user.username) {
    const existingUser = await getUserByUsername({ username: data.username });

    if (existingUser && existingUser.id !== user.id)
      return { error: "Username already taken" };
  }

  console.log(data);

  await db.user.update({ where: { id: user.id }, data: { ...data } });

  revalidatePath("/");

  return { success: "Settings updated" };
};
