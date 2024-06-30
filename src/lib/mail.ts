import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "mail@myotclick.ru",
    to: email,
    subject: "Email confirmation",
    text: "",
    html: `<p>Click the <a href=${confirmLink}>link</a> to confirm your email</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "mail@myotclick.ru",
    to: email,
    subject: "Password reset",
    text: "",
    html: `<p>Click the <a href=${resetLink}>link</a> to reset the password!</p>`,
  });
};
