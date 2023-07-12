import * as yup from 'yup'

export const SignUpSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  username: yup.string().required().label('Username'),
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().label('password')
})

export const SignInSchema = SignUpSchema.omit(['name', 'username'])

export type SignUpFormValues = yup.InferType<typeof SignUpSchema>
export type SignInFormValues = yup.InferType<typeof SignInSchema>
