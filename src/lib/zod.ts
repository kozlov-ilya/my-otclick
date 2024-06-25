import * as z from "zod";

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
