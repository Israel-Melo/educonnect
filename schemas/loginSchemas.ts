import z from "zod";

export const loginSchema = z.object({
  email: z.string().email().min(1, "Email e obrigatório").toLowerCase(),
  password: z
    .string()
    .min(8, "Senha devera ter no mínimo 8 caracteres")
    .min(1, "Senha é obrigatório"),
});
