import { z } from "zod";

const Env = z.object({
  RESEND_API_KEY: z.string().min(10),
  CONTACT_TO: z.string().email(),
});

export const env = Env.parse({
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_TO: process.env.CONTACT_TO,
});
