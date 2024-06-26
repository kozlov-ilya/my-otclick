import * as z from "zod";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string().min(1, { message: "Name is required!" })),
    username: z.optional(
      z
        .string()
        .min(1, { message: "Username is required!" })
        .min(6, { message: "At least 6 characters required!" })
        .max(20, { message: "Max length 20 characters!" })
        .regex(new RegExp(/^\S*$/), "No spaces allowed")
    ),
    email: z.optional(
      z
        .string()
        .min(1, { message: "Email is required!" })
        .email({ message: "Invalid email!" })
    ),
    password: z.optional(z.string()),
    newPassword: z.optional(z.string()),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    { message: "New password is required!", path: ["newPassword"] }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    { message: "Password is required!", path: ["password"] }
  );

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required!" })
    .email({ message: "Invalid email!" }),
  password: z.string().min(1, { message: "Password is required!" }),
});

export const RegisterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required!" })
    .email({ message: "Invalid email!" }),
  name: z.string().trim().min(1, { message: "Name is required!" }),
  password: z
    .string()
    .trim()
    .min(1, { message: "Password is required!" })
    .min(6, { message: "Password must be at least 6 characters!" }),
});

export const ResetSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required!" })
    .email({ message: "Invalid email!" }),
});

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .trim()
    .min(1, { message: "Password is required!" })
    .min(6, { message: "Password must be at least 6 characters!" }),
});

export const PostSchema = z.object({
  title: z.string().trim().min(1, { message: "Title is required!" }),
  text: z.string(),
});

export const OtclickSchema = z.object({
  message: z.string().trim().min(1, { message: "Message is required!" }),
});
