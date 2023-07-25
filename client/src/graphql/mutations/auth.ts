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
