import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z
    .string()
    .trim()
    .min(5)
    .max(180)
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
      message: "E-mail invalide",
    }),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  subject: z.string().trim().min(2).max(160),
  message: z.string().trim().min(10).max(4000),
  company: z.string().optional(),
});

export type ContactPayload = z.infer<typeof contactSchema>;
