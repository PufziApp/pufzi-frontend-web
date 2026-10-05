import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().trim().min(1, 'validation.emailRequired').email('validation.emailInvalid'),

  password: z.string().min(1, 'validation.passwordRequired'),
})

export type LoginFormData = z.infer<typeof loginSchema>

export type LoginFormErrors = Partial<Record<keyof LoginFormData, string>>
