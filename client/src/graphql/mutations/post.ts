import { gql } from 'graphql-request'

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($createPostInput: PostCreateWithoutUserInput!) {
    createPost(createPostInput: $createPostInput) {
      id
      title
      mediaUrls
      createdAt
      updatedAt
      user {
        id
        name
        username
      }
    }
  }
`
