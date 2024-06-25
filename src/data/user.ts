import { db } from "@/lib/db";

export const createUser = async ({
  email,
  hashedPassword,
  name,
}: {
  email: string;
  hashedPassword: string;
  name: string;
}) => {
  return db.user.create({ data: { email, password: hashedPassword, name } });
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
