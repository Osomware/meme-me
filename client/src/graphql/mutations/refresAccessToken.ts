import { gql } from 'graphql-request'

export const REFRESH_ACCESS_TOKEN_MUTATION = gql`
  mutation RefreshToken {
    getNewTokens {
      accessToken
      refreshToken
    }
  }
`
