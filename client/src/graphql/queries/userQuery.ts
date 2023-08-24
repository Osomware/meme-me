import { gql } from 'graphql-request'

export const USER_QUERY = gql`
  query FindOneUser($where: UserWhereInput) {
    findOneUser(where: $where) {
      email
      id
      name
      role
      username
      _count {
        followers
        following
        posts
      }
    }
  }
`
