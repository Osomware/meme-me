import toast from 'react-hot-toast'
import { useMutation, UseMutationResult } from '@tanstack/react-query'

import { gqlClient } from '~/lib/gqlClient'
import { CommentCreateWithoutUserInput } from '~/utils/types/input'
import { CREATE_COMMENT_POST_MUTATION } from '~/graphql/mutations/comment'

type Response = {
  id: string
  text: string
  postId: number
  userId: number
  parentId: number
  createdAt: string
  updatedAt: string
}
type CommentFetchQueryType = UseMutationResult<
  Response,
  Error,
  CommentCreateWithoutUserInput,
  unknown
>
type ReturnType = {
  handleComment: () => CommentFetchQueryType
}

const useComment = (): ReturnType => {
  const handleComment = (): CommentFetchQueryType =>
    useMutation<Response, Error, CommentCreateWithoutUserInput, unknown>({
      mutationFn: async (commentInput: CommentCreateWithoutUserInput) => {
        return await gqlClient.request(CREATE_COMMENT_POST_MUTATION, {
          commentCreateWithoutUserInput: {
            post: {
              connect: {
                id: commentInput.postId
              }
            },
            text: commentInput.text
          }
        })
      },
      onError: (err: Error) => {
        const [errorMessage] = err.message.split(/:\s/, 2)
        toast.error(errorMessage)
      }
    })

  return {
    handleComment
  }
}

export default useComment
