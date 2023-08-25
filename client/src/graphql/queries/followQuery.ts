import { gql } from 'graphql-request'

export const CHECK_IS_FOLLOWED = gql`
  query CheckIsFollowed($targetUserIdInput: TargetUserIdInput!) {
    checkUserFollowed(targetUserIdInput: $targetUserIdInput)
  }
`
