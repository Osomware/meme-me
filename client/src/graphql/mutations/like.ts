import { gql } from 'graphql-request'

export const LIKE_POST_MUTATION = gql`
  mutation LikePost($targetPostInput: TargetPostInput!) {
    likePost(targetPostInput: $targetPostInput) {
      id
      postId
      userId
      updatedAt
      createdAt
    }
  }
`

export const UNLIKE_POST_MUTATION = gql`
  mutation UnlikePost($targetPostInput: TargetPostInput!) {
    unlikePost(targetPostInput: $targetPostInput) {
      id
      postId
      userId
      createdAt
      updatedAt
    }
  }
`
