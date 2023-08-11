import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'

import Post from '~/components/organisms/Post'
import { IPost } from '~/utils/interface/Post'
import PostModal from '~/components/organisms/PostModal'

type PostListProps = {
  posts: IPost[]
}

const PostList: FC<PostListProps> = ({ posts }): JSX.Element => {
  const router = useRouter()
  const postId = router.query?.postId
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const closeModal = (): void => {
    setIsModalOpen(false)
    void router.replace(router.pathname, undefined, { shallow: true })
  }

  return (
    <div className="-mt-2 divide-y divide-stroke-2 py-4">
      {posts?.map((post) => (
        <Post
          key={post.id}
          {...{
            post,
            state: {
              setIsModalOpen
            }
          }}
        />
      ))}

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
