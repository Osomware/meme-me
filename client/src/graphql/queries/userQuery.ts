import { gql } from 'graphql-request'

export const USER_QUERY = gql`
  query GetCurrentUser($id: Int!) {
    findOne(id: $id) {
      id
      name
      email
      username
      role
    }
  }
`
