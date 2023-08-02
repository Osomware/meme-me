import { gql } from 'graphql-request'

export const SIGN_UP_MUTATION = gql`
  mutation Signup($input: UserCreateInput!) {
    signup(signupInput: $input) {
      accessToken
      refreshToken
      user {
        id
        name
        email
        username
        role
      }
    }
  }
`

export const SIGN_IN_MUTATION = gql`
  mutation Signin($input: SignInInput!) {
    signin(signInInput: $input) {
      accessToken
      refreshToken
      user {
        id
        email
        name
        username
        role
      }
    }
  }
`

export const SIGN_OUT_MUTATION = gql`
  mutation Logout($logoutId: Int!) {
    logout(id: $logoutId) {
      loggedOut
    }
  }
`
