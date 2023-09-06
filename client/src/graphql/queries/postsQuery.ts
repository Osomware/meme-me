import { gql } from 'graphql-request'

export const GET_ALL_POST_QUERY = gql`
  query GetAllUserPost($orderBy: [PostOrderByWithRelationInput!], $skip: Int, $take: Int) {
    findAllPost(orderBy: $orderBy, skip: $skip, take: $take) {
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
      }
    }
  }
`

export const GET_ALL_POST_BY_USERNAME_QUERY = gql`
  query FindAllPostByUsername($where: PostWhereInput, $orderBy: [PostOrderByWithRelationInput!]) {
    findAllPostByUsername(where: $where, orderBy: $orderBy) {
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
