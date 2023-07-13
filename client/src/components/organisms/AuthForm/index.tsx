import clsx from 'clsx'
import Link from 'next/link'
import React, { FC } from 'react'
import isEmpty from 'lodash/isEmpty'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AtSign, Lock, Mail, User } from 'react-feather'

import Input from '~/components/atoms/Input'
import Button from '~/components/atoms/Buttons/ButtonAction'
import { FormErrorMessage } from '~/components/atoms/FormErrorMessage'
import { SignInFormValues, SignInSchema, SignUpFormValues, SignUpSchema } from '~/utils/yup-schema'

export type AuthFormProps = {
  isSignInPage?: boolean
  actions: {
    handleAuthSubmit: SubmitHandler<SignUpFormValues | SignInFormValues>
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
  } = useForm<SignUpFormValues>({
    mode: 'onTouched',
    resolver: yupResolver(isSignInPage ? SignInSchema : SignUpSchema) as any
  })

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(handleAuthSubmit)}
      className="flex flex-col space-y-6"
    >
      <div className="space-y-5">
        {!isSignInPage && (
          <>
            {/* Name Field */}
            <section className="flex flex-col space-y-1">
              <div className="group relative">
                <div className="inset-y-0 flex items-center left-4 absolute">
                  <User
                    className={clsx(
                      'w-5 h-5 stroke-1 text-secondary-100 group-focus-within:text-primary',
                      !isEmpty(errors?.name) ? 'text-rose-500 group-focus-within:text-rose-500' : ''
                    )}
                  />
                </div>
                <Input
                  type="text"
                  color="primary"
                  {...register('name')}
                  placeholder="Name"
                  className="pl-12"
                  isError={!isEmpty(errors?.name)}
                />
              </div>
              {!isEmpty(errors?.name) && (
                <FormErrorMessage>{errors?.name.message}</FormErrorMessage>
              )}
            </section>
            {/* Username Field */}
            <section className="flex flex-col space-y-1">
              <div className="group relative">
                <div className="inset-y-0 flex items-center left-4 absolute">
                  <AtSign
                    className={clsx(
                      'w-5 h-5 stroke-1 text-secondary-100 group-focus-within:text-primary',
                      !isEmpty(errors?.username)
                        ? 'text-rose-500 group-focus-within:text-rose-500'
                        : ''
                    )}
                  />
                </div>
                <Input
                  type="text"
                  color="primary"
                  {...register('username')}
                  placeholder="Username"
                  className="pl-12"
                  isError={!isEmpty(errors?.username)}
                />
              </div>
              {!isEmpty(errors?.username) && (
                <FormErrorMessage>{errors?.username.message}</FormErrorMessage>
              )}
            </section>
          </>
        )}
        {/* Email Field */}
        <section className="flex flex-col space-y-1">
          <div className="group relative">
            <div className="inset-y-0 flex items-center left-4 absolute">
              <Mail
                className={clsx(
                  'w-5 h-5 stroke-1 text-secondary-100 group-focus-within:text-primary',
                  !isEmpty(errors.email) ? 'text-rose-500 group-focus-within:text-rose-500' : ''
                )}
              />
            </div>
            <Input
              type="text"
              color="primary"
              {...register('email')}
              placeholder="Email"
              className="pl-12"
              isError={!isEmpty(errors.email)}
            />
          </div>
          {!isEmpty(errors.email) && <FormErrorMessage>{errors?.email.message}</FormErrorMessage>}
        </section>
        {/* Password Field */}
        <section className="flex flex-col space-y-1">
          <div className="group relative">
            <div className="inset-y-0 flex items-center left-4 absolute">
              <Lock
                className={clsx(
                  'w-5 h-5 stroke-1 text-secondary-100 group-focus-within:text-primary',
                  !isEmpty(errors.password) ? 'text-rose-500 group-focus-within:text-rose-500' : ''
                )}
              />
            </div>
            <Input
              type="password"
              color="primary"
              {...register('password')}
              placeholder="Password"
              className="pl-12"
              isError={!isEmpty(errors.password)}
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
        {isSignInPage ? 'Sign In' : 'Sign Up'}
      </Button>
    </form>
  )
}

AuthForm.defaultProps = {
  isSignInPage: false
}

export default AuthForm
