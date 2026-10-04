import { z } from 'zod'

export const PASSWORD_MIN_LENGTH = 8

export const passwordRules = {
  minLength: (password: string) => password.length >= PASSWORD_MIN_LENGTH,

  uppercase: (password: string) => /[A-Z]/.test(password),

  number: (password: string) => /\d/.test(password),

  specialCharacter: (password: string) => /[^A-Za-z0-9]/.test(password),
}

export const clientRegisterSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(1, 'validation.firstNameRequired')
      .min(2, 'validation.firstNameMinLength'),

    lastName: z
      .string()
      .trim()
      .min(1, 'validation.lastNameRequired')
      .min(2, 'validation.lastNameMinLength'),

    email: z.string().trim().min(1, 'validation.emailRequired').email('validation.emailInvalid'),

    password: z
      .string()
      .min(1, 'validation.passwordRequired')
      .min(PASSWORD_MIN_LENGTH, 'validation.passwordMinLength')
      .regex(/[A-Z]/, 'validation.passwordUppercase')
      .regex(/\d/, 'validation.passwordNumber')
      .regex(/[^A-Za-z0-9]/, 'validation.passwordSpecialCharacter'),

    confirmPassword: z.string().min(1, 'validation.confirmPasswordRequired'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'validation.passwordsDoNotMatch',
  })

export type ClientRegisterFormData = z.infer<typeof clientRegisterSchema>
