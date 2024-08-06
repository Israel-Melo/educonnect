import z from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email().min(1, "Email é obrigatório").toLowerCase(),
  password: z
    .string()
    .min(8, "Senha devera ter no mínimo 8 caracteres")
    .min(1, "Senha é obrigatório"),
});
