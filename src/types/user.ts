import zod from "zod";

export const registerSchema = zod.object({
  name: zod.string(),
  email: zod.string(),
  password: zod
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password too long"),
});

export type registerSchema = zod.infer<typeof registerSchema>;

export const loginSchema = zod.object({
  email: zod.string(),
  password: zod.string(),
});

export type loginSchema = zod.infer<typeof loginSchema>;
