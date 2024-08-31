import { z } from "zod";

export const LoginSchema = z
  .object({
    username: z.string().min(3),
    password: z.string().min(3),
  })
  .strict();

export type LoginDto = z.infer<typeof LoginSchema>;

export const RegisterSchema = z
  .object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    displayName: z.string().min(3),
  })
  .strict();

export type RegisterDto = z.infer<typeof RegisterSchema>;
