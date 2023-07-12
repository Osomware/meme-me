import clsx from 'clsx'
import Link from 'next/link'
import React, { FC } from 'react'
import isEmpty from 'lodash/isEmpty'
import { useForm } from 'react-hook-form'
import { Lock, Mail } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'

import Input from '~/components/atoms/Input'
import Button from '~/components/atoms/Buttons/ButtonAction'
import { FormErrorMessage } from '~/components/atoms/FormErrorMessage'
import { SignInFormValues, SignInSchema, SignUpFormValues, SignUpSchema } from '~/utils/yup-schema'

export type AuthFormProps = {
  isSignInPage?: boolean
  actions: {
    handleAuthSubmit: () => void
  }
}

const AuthForm: FC<AuthFormProps> = (props): JSX.Element => {
  const isSignInPage = props.isSignInPage === true
  const {
    actions: { handleAuthSubmit }
  } = props

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormValues | SignUpFormValues>({
    mode: 'onTouched',
    resolver: yupResolver(isSignInPage ? SignInSchema : SignUpSchema)
  })

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(handleAuthSubmit)}
      className="flex flex-col space-y-6"
    >
      <div className="space-y-5">
        {/* Email Field */}
        <section className="flex flex-col space-y-1">
          <div className="group relative">
            <div className="inset-y-0 flex items-center left-4 absolute">
              <Mail className="w-5 h-5 stroke-1 text-secondary-100 group-focus-within:text-primary" />
            </div>
            <Input
              type="text"
              color="primary"
              {...register('email')}
              placeholder="Email"
              className="pl-12"
            />
          </div>
          {!isEmpty(errors.email) && <FormErrorMessage>{errors?.email.message}</FormErrorMessage>}
        </section>
        {/* Password Field */}
        <section className="flex flex-col space-y-1">
          <div className="group relative">
            <div className="inset-y-0 flex items-center left-4 absolute">
              <Lock className="w-5 h-5 stroke-1 text-secondary-100 group-focus-within:text-primary" />
            </div>
            <Input
              type="password"
              color="primary"
              {...register('password')}
              placeholder="Password"
              className="pl-12"
            />
          </div>
          {!isEmpty(errors.password) && (
            <FormErrorMessage>{errors?.password.message}</FormErrorMessage>
          )}
        </section>
      </div>
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className={clsx(
              'rounded text-primary focus:ring-primary',
              'bg-white border-secondary-100'
            )}
          />
          <p className="text-secondary-200 select-none">Remember me</p>
        </label>
        <Link
          href="#"
          className="font-medium select-none text-fancyBlue hover:underline outline-primary"
        >
          Forgot Password?
        </Link>
      </div>
      <Button type="submit" variant="primary" className="w-full py-2.5 text-sm">
        Sign In
      </Button>
    </form>
  )
}

AuthForm.defaultProps = {
  isSignInPage: false
}

export default AuthForm
