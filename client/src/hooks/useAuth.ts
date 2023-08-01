import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { deleteCookie, setCookie } from 'cookies-next'
import { useMutation, UseMutationResult } from '@tanstack/react-query'

import { useStore } from '~/utils/zustand'
import { gqlClient } from '~/lib/gqlClient'
import { useZustand } from './zustandHooks'
import { IUser } from '~/utils/interface/User'
import { SignInFormValues, SignUpFormValues } from '~/utils/yup-schema'
import { SIGN_IN_MUTATION, SIGN_OUT_MUTATION, SIGN_UP_MUTATION } from '~/graphql/mutations/auth'

export type SignUpReturnType = UseMutationResult<
  { signup: AuthResponse },
  unknown,
  SignUpFormValues,
  unknown
>
export type SignInReturnType = UseMutationResult<
  {
    signin: AuthResponse
  },
  unknown,
  SignInFormValues,
  unknown
>
export type SignOutReturnType = UseMutationResult<any, unknown, { logoutId: number }, unknown>
export type AuthResponse = {
  accessToken: string
  refreshToken: string
  user: IUser
}

type AuthReturn = {
  handleSignUpMutation: () => SignUpReturnType
  handleSignInMutation: () => SignInReturnType
  handleSignOutMutation: () => SignOutReturnType
}

const useAuth = (): AuthReturn => {
  const router = useRouter()
  const store = useZustand(useStore, (state) => state)

  const handleSignUpMutation = (): SignUpReturnType =>
    useMutation({
      mutationFn: async (input: SignUpFormValues) => {
        return await gqlClient.request(SIGN_UP_MUTATION, { input })
      },
      onSuccess: (data: { signup: AuthResponse }) => {
        setCookie('accessToken', data.signup.accessToken)
        setCookie('refreshToken', data.signup.refreshToken)
        store?.setUser(data.signup.user)
        toast.success('Created account successfully!')
        void router.push('/')
      }
    })

  const handleSignInMutation = (): SignInReturnType =>
    useMutation({
      mutationFn: async (input: SignInFormValues) => {
        return await gqlClient.request(SIGN_IN_MUTATION, { input })
      },
      onSuccess: (data: { signin: AuthResponse }) => {
        setCookie('accessToken', data.signin.accessToken)
        setCookie('refreshToken', data.signin.refreshToken)
        store?.setUser(data.signin.user)
        void router.push('/')
        toast.success('Login successfully!')
      }
    })

  const handleSignOutMutation = (): SignOutReturnType =>
    useMutation({
      mutationFn: async (logoutId: { logoutId: number }) => {
        return await gqlClient.request(SIGN_OUT_MUTATION, { logoutId })
      },
      onSuccess: () => {
        deleteCookie('accessToken')
        deleteCookie('refreshToken')
        store?.clearUser()
        void router.push('/sign-in')
        toast.success('Logout successfully!')
      }
    })

  return {
    handleSignUpMutation,
    handleSignInMutation,
    handleSignOutMutation
  }
}

export default useAuth
