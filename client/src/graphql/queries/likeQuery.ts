import { gql } from 'graphql-request'

export const CHECK_IS_USER_LIKE_POST = gql`
  query checkUserLikePost($targetPostInput: TargetPostInput!) {
    checkUserLikePost(targetPostInput: $targetPostInput)
  }
`
