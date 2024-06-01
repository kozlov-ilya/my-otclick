export type OtclickType = {
  id: string;
  author?: { username: string; name: string };
  message?: string;
  contacts?: { type: string; value: string }[];
};

const myOtclick: OtclickType = {
  id: "1",
  author: { username: "ilusha_kozlov", name: "Ilya Kozlov" },
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nisi lectus. Quisque quis porttitor ante, et pharetra risus. Sed ut placerat orci. Etiam vitae commodo lorem, et mattis eros. Ut nec turpis euismod, vulputate eros vel, lobortis nisl. Proin commodo suscipit vehicula. Vivamus imperdiet dolor at lorem posuere malesuada in at turpis. Pellentesque blandit, nunc vitae sagittis egestas, sapien risus pulvinar ipsum, vitae mollis tortor arcu sit amet libero.",
  contacts: [
    { type: "telegram", value: "@IlushaKozlov" },
    { type: "gmail", value: "kozlov.ilya.me@gmail.com" },
    { type: "tel", value: "+79214230991" },
  ],
};

const otclicks: OtclickType[] = [
  {
    id: "1",
    author: { username: "ilusha_kozlov", name: "Ilya Kozlov" },
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nisi lectus. Quisque quis porttitor ante, et pharetra risus. Sed ut placerat orci. Etiam vitae commodo lorem, et mattis eros. Ut nec turpis euismod, vulputate eros vel, lobortis nisl. Proin commodo suscipit vehicula. Vivamus imperdiet dolor at lorem posuere malesuada in at turpis. Pellentesque blandit, nunc vitae sagittis egestas, sapien risus pulvinar ipsum, vitae mollis tortor arcu sit amet libero.",
    contacts: [
      { type: "telegram", value: "@IlushaKozlov" },
      { type: "gmail", value: "kozlov.ilya.me@gmail.com" },
      { type: "tel", value: "+79214230991" },
    ],
  },
  {
    id: "2",
    author: { username: "ilusha_kozlov", name: "Ilya Kozlov" },
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nisi lectus. Quisque quis porttitor ante, et pharetra risus. Sed ut placerat orci. Etiam vitae commodo lorem, et mattis eros. Ut nec turpis euismod, vulputate eros vel, lobortis nisl. Proin commodo suscipit vehicula. Vivamus imperdiet dolor at lorem posuere malesuada in at turpis. Pellentesque blandit, nunc vitae sagittis egestas, sapien risus pulvinar ipsum, vitae mollis tortor arcu sit amet libero.",
    contacts: [
      { type: "telegram", value: "@IlushaKozlov" },
      { type: "gmail", value: "kozlov.ilya.me@gmail.com" },
      { type: "tel", value: "+79214230991" },
    ],
  },
];

export const getMyOtclick = () => {
  return myOtclick;
};

export const getOtclicks = () => {
  return otclicks;
};
