import { gql } from 'graphql-request'

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($createPostInput: PostCreateWithoutUserInput!) {
    createPost(createPostInput: $createPostInput) {
      id
      title
      mediaFiles {
        key
        url
      }
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

export const DELETE_POST_MUTATION = gql`
  mutation DeletePost($deletePostInput: DeletePostInput!) {
    deletePost(deletePostInput: $deletePostInput) {
      id
    }
  }
`
