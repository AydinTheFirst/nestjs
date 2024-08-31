import { z } from "zod";

export const CreateUserSchema = z
  .object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    displayName: z.string().min(3),
  })
  .strict();

export type CreateUserDto = z.infer<typeof CreateUserSchema>;

export const UpdateUserSchema = z
  .object({
    username: z.string().min(3),
    email: z.string().email(),
    displayName: z.string().min(3),
  })
  .required();

export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;
