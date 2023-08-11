import { gql } from 'graphql-request'

export const GET_ALL_POST_QUERY = gql`
  query GetAllUserPost($orderBy: [PostOrderByWithRelationInput!]) {
    findAllPost(orderBy: $orderBy) {
      id
      title
      isHideLikeAndCount
      isTurnOffComment
      mediaUrls
      updatedAt
      createdAt
      user {
        id
        name
        email
        username
      }
    }
  }
`
