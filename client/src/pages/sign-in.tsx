import React from 'react'
import type { NextPage } from 'next'

import useAuth from '~/hooks/useAuth'
import AuthForm from '~/components/organisms/AuthForm'
import AuthLayout from '~/components/templates/AuthLayout'

const SignIn: NextPage = (): JSX.Element => {
  const { handleSignIn: handleAuthSubmit } = useAuth()

  return (
    <AuthLayout metaTitle="Sign in">
      <AuthForm isSignInPage actions={{ handleAuthSubmit }} />
    </AuthLayout>
  )
}

export default SignIn
