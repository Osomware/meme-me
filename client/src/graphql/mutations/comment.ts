import { gql } from 'graphql-request'

export const CREATE_COMMENT_POST_MUTATION = gql`
  mutation CommentPost($commentCreateWithoutUserInput: CommentCreateWithoutUserInput!) {
    commentPost(commentCreateWithoutUserInput: $commentCreateWithoutUserInput) {
      id
      text
      postId
      userId
      parentId
      updatedAt
      createdAt
    }
  }
`
