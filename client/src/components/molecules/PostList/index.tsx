import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import useFollow from '~/hooks/useFollow'
import React, { FC, useState } from 'react'

import { useStore } from '~/utils/zustand'
import Post from '~/components/organisms/Post'
import { IPost } from '~/utils/interface/Post'
import { useZustand } from '~/hooks/useZustand'
import PostModal from '~/components/organisms/PostModal'

type PostListProps = {
  posts: IPost[]
}

const PostList: FC<PostListProps> = ({ posts }): JSX.Element => {
  const router = useRouter()
  const postId = router.query?.postId
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  // * ZUSTAND STORE HOOKS
  const store = useZustand(useStore, (state) => state)

  // * FOLLOW HOOKS
  const { checkIsFollowed } = useFollow()

  const closeModal = (): void => {
    setIsModalOpen(false)
    void router.replace(router.pathname, undefined, { shallow: true })
  }

  const followStatuses = posts.map((post) => {
    return checkIsFollowed(post?.user?.id)
  })

  return (
    <div className="-mt-2 divide-y divide-stroke-2 py-4">
      {posts?.map((post, index) => {
        const followCheckResult = followStatuses[index].data
        const isFollowed = followCheckResult?.checkUserFollowed ?? false
        const isPostAuthor = post?.user?.id === store?.user?.id

        return (
          <Post
            key={post.id}
            {...{
              post,
              isPostAuthor,
              isFollowed,
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
