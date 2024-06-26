import bcrypt from "bcryptjs";

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return hashedPassword;
};

hashPassword("111111").then((res) => console.log(res));
