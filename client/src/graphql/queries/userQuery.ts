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

export const GET_SUGGESTED_USERS = gql`
  query GetSuggestedUsers($skip: Int, $take: Int, $orderBy: [UserOrderByWithRelationInput!]) {
    getSuggestedUsers(skip: $skip, take: $take, orderBy: $orderBy) {
      id
      name
      email
      username
      createdAt
    }
  }
`

export const COUNT_ALL_USER_EXCEPT_CURRENT = gql`
  query CountAllUserExceptCurrent {
    countAllUserExceptCurrent
  }
`
