import * as yup from 'yup'

export const SignUpSchema = yup.object().shape({
  name: yup.string().required().min(3).label('Name'),
  username: yup.string().required().min(4).max(25).label('Username'),
  email: yup.string().email().required().label('Email'),
  password: yup
    .string()
    .required()
    .min(6, 'Password is too short - should be 8 chars minimum.')
    .min(6, 'Password must be at least 6 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
})

export const SignInSchema = SignUpSchema.omit(['name', 'username'])

export type SignUpFormValues = yup.InferType<typeof SignUpSchema>
export type SignInFormValues = yup.InferType<typeof SignInSchema>
