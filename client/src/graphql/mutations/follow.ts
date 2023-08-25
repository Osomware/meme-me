import { gql } from 'graphql-request'

export const FOLLOW_MUTATION = gql`
  mutation FollowUser($targetUserIdInput: TargetUserIdInput!) {
    followUser(targetUserIdInput: $targetUserIdInput) {
      id
      followerId
      followingId
    }
  }
`

export const UNFOLLOW_MUTATION = gql`
  mutation UnfollowUser($targetUserIdInput: TargetUserIdInput!) {
    unfollowUser(targetUserIdInput: $targetUserIdInput) {
      id
      followingId
      followerId
      createdAt
    }
  }
`
