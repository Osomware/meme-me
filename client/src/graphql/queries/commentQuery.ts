import { gql } from 'graphql-request'

export const GET_ALL_COMMENTS_BY_POST_ID = gql`
  query FindAllCommentByPostId(
    $skip: Int
    $take: Int
    $where: CommentWhereInput
    $orderBy: [CommentOrderByWithRelationInput!]
  ) {
    findAllCommentByPostId(skip: $skip, take: $take, where: $where, orderBy: $orderBy) {
      id
      text
      createdAt
      updatedAt
      user {
        id
        name
        email
        username
      }
    }
  }
`

export const COUNT_ALL_COMMENT_QUERY = gql`
  query CountAllComment($where: CommentWhereInput) {
    countAllComment(where: $where)
  }
`
