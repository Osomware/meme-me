import { SubmitHandler } from 'react-hook-form'

import { SignInFormValues, SignUpFormValues } from '~/utils/yup-schema'

type AuthReturn = {
  handleAuthSubmit: SubmitHandler<SignInFormValues | SignUpFormValues>
  handleSignOut: () => void
}

const useAuth = (): AuthReturn => {
  const handleAuthSubmit: SubmitHandler<SignInFormValues | SignUpFormValues> = (data): void => {
    alert(JSON.stringify(data, null, 2))
  }

  const handleSignOut = (): void => {
    alert('Sign Out')
  }

  return {
    handleAuthSubmit,
    handleSignOut
  }
}

export default useAuth
