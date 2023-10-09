import { emailSchema, passwordSchema } from "./global";

export const authSchema = {
  email: emailSchema,
  password: passwordSchema,
};