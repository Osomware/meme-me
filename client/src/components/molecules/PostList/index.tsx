import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import { useQueries } from '@tanstack/react-query'

import { useStore } from '~/utils/zustand'
import { gqlClient } from '~/lib/gqlClient'
import Post from '~/components/organisms/Post'
import { IPost } from '~/utils/interface/Post'
import { useZustand } from '~/hooks/useZustand'
import { ResultQuery } from '~/hooks/useFollow'
import PostModal from '~/components/organisms/PostModal'
import { ResultUserLikePostQuery } from '~/hooks/useLike'
import { CHECK_IS_FOLLOWED } from '~/graphql/queries/followQuery'
import { CHECK_IS_USER_LIKE_POST } from '~/graphql/queries/likeQuery'

type PostListProps = {
  posts: IPost[]
}

const PostList: FC<PostListProps> = ({ posts }): JSX.Element => {
  const router = useRouter()
  const postId = router.query?.postId
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  // * ZUSTAND STORE HOOKS
  const store = useZustand(useStore, (state) => state)

  const closeModal = (): void => {
    setIsModalOpen(false)
    void router.replace(router.pathname, undefined, { shallow: true })
  }

  const followStatuses = useQueries({
    queries: posts?.map((post) => ({
      queryKey: ['follow', post?.user?.id],
      queryFn: async () =>
        await gqlClient.request(CHECK_IS_FOLLOWED, {
          targetUserIdInput: {
            id: post?.user?.id
          }
        })
    }))
  })

  const likeStatuses = useQueries({
    queries: posts?.map((post) => ({
      queryKey: ['like', Number(post?.id)],
      queryFn: async () =>
        await gqlClient.request(CHECK_IS_USER_LIKE_POST, {
          targetPostInput: {
            id: Number(post?.id)
          }
        })
    }))
  })

  return (
    <div className="-mt-2 divide-y divide-stroke-2 py-4">
      {posts?.map((post, index) => {
        const followCheckResult = followStatuses[index]?.data as ResultQuery
        const likeCheckResult = likeStatuses[index]?.data as ResultUserLikePostQuery

        const isFollowed = followCheckResult?.checkUserFollowed ?? false
        const isPostAuthor = post?.user?.id === store?.user?.id
        const isLikePost = likeCheckResult?.checkUserLikePost ?? false

        return (
          <Post
            key={index}
            {...{
              post,
              isPostAuthor,
              isFollowed,
              isLikePost,
              state: {
                setIsModalOpen
              }
            }}
          />
        )
      })}

      {/* View Sigle Post Dialog */}
      {isModalOpen && !isEmpty(postId) && (
        <PostModal
          {...{
            isOpen: isModalOpen,
            closeModal,
            postId
          }}
        />
      )}
    </div>
  )
}

export default PostList
