import { gql } from 'graphql-request'

export const GET_ALL_POST_QUERY = gql`
  query GetAllUserPost(
    $orderBy: [PostOrderByWithRelationInput!]
    $skip: Int
    $take: Int
    $where: PostWhereInput
    $filter: String
  ) {
    findAllPost(orderBy: $orderBy, skip: $skip, take: $take, where: $where, filter: $filter) {
      id
      title
      isHideLikeAndCount
      isTurnOffComment
      mediaFiles {
        key
        url
      }
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
      _count {
        likes
        comments
      }
    }
  }
`

export const GET_ONE_POST_QUERY = gql`
  query GetOneUserPost($where: PostWhereInput) {
    findOnePost(where: $where) {
      id
      title
      mediaFiles {
        key
        url
      }
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
      _count {
        likes
        comments
      }
    }
  }
`

export const GET_ALL_POST_BY_USERNAME_QUERY = gql`
  query FindAllPostByUsername(
    $where: PostWhereInput
    $orderBy: [PostOrderByWithRelationInput!]
    $skip: Int
    $take: Int
  ) {
    findAllPostByUsername(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
      id
      mediaFiles {
        key
        url
      }
      createdAt
      _count {
        likes
      }
    }
  }
`

export const COUNT_ALL_POST_QUERY = gql`
  query CountAllPosts {
    countAllPost
  }
`

export const COUNT_ALL_POST_BY_USERNAME_QUERY = gql`
  query countAllPostByUsername($username: String) {
    countAllPostByUsername(username: $username)
  }
`
