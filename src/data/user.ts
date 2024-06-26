import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { generateUsername } from "@/lib/username";

export const createUser = async ({
  email,
  hashedPassword,
  name,
}: {
  email: string;
  hashedPassword: string;
  name: string;
}) => {
  const username = await generateUsername();

  return db.user.create({
    data: { email, password: hashedPassword, name, username },
  });
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id?: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch (error) {
    return null;
  }
};

export const getUserByUsername = async ({ username }: { username: string }) => {
  const user = await db.user.findUnique({ where: { username } });

  return user;
};
