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

export const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteComment($deleteCommentInput: DeleteCommentPostInput!) {
    deleteComment(deleteCommentInput: $deleteCommentInput) {
      id
      text
    }
  }
`
