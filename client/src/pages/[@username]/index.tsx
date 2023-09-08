import clsx from 'clsx'
import { NextPage } from 'next'
import { isEmpty } from 'lodash'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Camera, Heart, MessageCircle } from 'react-feather'

import usePost from '~/hooks/usePost'
import Alert from '~/components/atoms/Alert'
import PostModal from '~/components/organisms/PostModal'
import ProfileLayout from '~/components/templates/ProfileLayout'
import { Skeleton } from '~/components/atoms/Skeletons/ProfilePageSkeletonLoading'

const Username: NextPage = (): JSX.Element => {
  const router = useRouter()
  const { '@username': username } = router.query
  const postId = router.query?.postId

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const closeModal = (): void => {
    setIsModalOpen(false)
    void router.replace(`@${username?.slice(1) as string}`, undefined, { shallow: true })
  }

  // * POST HOOKS
  const { getAllPostsByUsername } = usePost()
  const {
    data: userPosts,
    isError,
    isLoading
  } = getAllPostsByUsername(username?.slice(1) as string)

  if (isLoading) {
    return (
      <ProfileLayout metaTitle={`${username?.toString() ?? ''}`}>
        <div className="mt-4 animate-pulse grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl w-full mx-auto gap-2 px-4">
          {Array.from({ length: 9 }).map((_, index) => (
            <Skeleton key={index} width="w-full" height="h-52 rounded-sm" />
          ))}
        </div>
      </ProfileLayout>
    )
  }

  if (isError) {
    return (
      <ProfileLayout metaTitle={`${username?.toString() ?? ''}`}>
        <Alert type="error" message="Something went wrong!" />
      </ProfileLayout>
    )
  }

  if (userPosts?.findAllPostByUsername?.length === 0) {
    return (
      <ProfileLayout metaTitle={`${username?.toString() ?? ''}`}>
        <div className="mt-8 max-w-sm mx-auto flex flex-col items-center space-y-6">
          <div className="rounded-full border-2 border-secondary-300 p-4">
            <Camera className="w-6 h-6 stroke-1 text-secondary-300" />
          </div>
          <h1 className="text-2xl font-bold text-secondary-300">No Posts Yet</h1>
        </div>
      </ProfileLayout>
    )
  }

  return (
    <ProfileLayout metaTitle={`${username?.toString() ?? ''}`}>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 max-w-4xl w-full mx-auto gap-2 px-4 pb-8">
        {userPosts?.findAllPostByUsername?.map((post, idx) => {
          const handleViewPost = (): void => {
            void router.replace({
              pathname: router.asPath,
              query: {
                postId: post?.id
              }
            })
            setIsModalOpen(true)
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={handleViewPost}
              className="group relative cursor-pointer outline-none"
            >
              <div className="group-hover:brightness-75 transition ease-in-out duration-75">
                <img
                  src={post?.mediaFiles[0].url}
                  className="w-full h-52 object-cover bg-black"
                  alt=""
                />
              </div>
              <div
                className={clsx(
                  'z-50 inset-0 absolute opacity-0 group-hover:opacity-100 flex',
                  'items-center space-x-3 justify-center group-hover:brightness-100'
                )}
              >
                <div className="inline-flex items-center space-x-0.5">
                  <Heart className="w-4 h-4 stroke-white" fill="#fff" />
                  <span className="text-xs font-semibold text-white">
                    {post?._count?.likes ?? 0}
                  </span>
                </div>
                <div className="inline-flex items-center space-x-0.5">
                  <MessageCircle className="w-4 h-4 stroke-white" fill="#fff" />
                  <span className="text-xs font-semibold text-white">
                    {post?._count?.comments ?? 0}
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>

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
    </ProfileLayout>
  )
}

export default Username
