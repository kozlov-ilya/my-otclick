import { generateUsername as generateUsernameLib } from "unique-username-generator";
import { getUserByUsername } from "@/data/user";

export const generateUsername = async () => {
  let username = generateUsernameLib("-", 0, 14);
  username += "-" + getRandomInt(10, 100);

  let user = await getUserByUsername({ username });

  while (!!user) {
    username = generateUsernameLib("-", 0, 14);
    username += "-" + getRandomInt(10, 100);

    user = await getUserByUsername({ username });
  }

  return username;
};

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
