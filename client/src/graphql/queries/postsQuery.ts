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
      postHashtags {
        hashtag {
          tag
        }
      }
    }
  }
`

export const GET_ONE_POST_QUERY = gql`
  query GetOneUserPost($where: PostWhereInput) {
    findOnePost(where: $where) {
      id
      title
      mediaUrls
      isHideLikeAndCount
      isTurnOffComment
      updatedAt
      createdAt
      user {
        email
        id
        name
        role
        username
      }
      postHashtags {
        hashtag {
          tag
        }
      }
    }
  }
`

export const GET_ALL_POST_BY_USERNAME_QUERY = gql`
  query FindAllPostByUsername($where: PostWhereInput, $orderBy: [PostOrderByWithRelationInput!]) {
    findAllPostByUsername(where: $where, orderBy: $orderBy) {
      id
      mediaUrls
      createdAt
    }
  }
`
