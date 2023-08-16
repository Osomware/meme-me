import { gql } from 'graphql-request'

export const GET_ALL_HASHTAG_QUERY = gql`
  query GetAllHashtag {
    getAllPostHashtag {
      id
      tag
    }
  }
`
