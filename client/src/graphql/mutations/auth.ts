import { gql } from 'graphql-request'

export const SIGN_UP_MUTATION = gql`
  mutation Signup($input: SignUpInput!) {
    signup(signupInput: $input) {
      accessToken
      refreshToken
      user {
        id
        name
        email
        username
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
      }
    }
  }
`
