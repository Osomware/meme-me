import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import isEmpty from 'lodash/isEmpty'
import { useRouter } from 'next/router'
import { ShareTwo } from '@icon-park/react'
import { Heart, Bookmark } from 'react-feather'
import { queryClient } from '~/lib/queryClient'
import React, { Dispatch, FC, useEffect } from 'react'
import { AvatarConfig, genConfig } from 'react-nice-avatar'

import Carousel from './../Carousel'
import useLike from '~/hooks/useLike'
import useFollow from '~/hooks/useFollow'
import { IPost } from '~/utils/interface/Post'
import Hashtag from '~/components/atoms/Hashtag'
import { Reaction } from '~/utils/types/reaction'
import MessageIcon from '~/utils/icons/MessageIcon'
import Button from '~/components/atoms/Buttons/ButtonAction'
import ReactionButton from '~/components/molecules/ReactionButton'
import { formatTimeDifference } from '~/helpers/formatTimeDifference'
import { convertHashtagsToLinks } from '~/helpers/convertHastagsToLinks'

const ReactNiceAvatar = dynamic(async () => await import('react-nice-avatar'), { ssr: false })

type PostProps = {
  post: IPost
  isPostAuthor: boolean
  isFollowed: boolean
  isLikePost: boolean
  state: {
    setIsModalOpen: Dispatch<React.SetStateAction<boolean>>
  }
}

const Post: FC<PostProps> = (props): JSX.Element => {
  // * Destructured Props
  const {
    post,
    isPostAuthor,
    isFollowed,
    isLikePost,
    state: { setIsModalOpen }
  } = props
  const { id, mediaFiles, title, user, postHashtags, _count } = post

  // * FOLLOW HOOKS
  const { handleFollow, handleUnfollow } = useFollow()
  const followMethod = handleFollow()
  const unFollowMethod = handleUnfollow()

  // * LIKE HOOKS
  const { handleLike, handleUnlike } = useLike()
  const likeMethod = handleLike()
  const unlikeMethod = handleUnlike()

  const handleFollowUnfollow = async (): Promise<void> => {
    if (isFollowed) {
      await unFollowMethod.mutateAsync(
        {
          id: user?.id
        },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries(['follow', user?.id])
          }
        }
      )
    } else {
      await followMethod.mutateAsync(
        {
          id: user?.id
        },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries(['follow', user?.id])
          }
        }
      )
    }
  }

  const handleLikePost = async (): Promise<void> => {
    if (isLikePost) {
      await unlikeMethod.mutateAsync(
        {
          id: Number(id)
        },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries(['like', Number(id)])
            void queryClient.invalidateQueries(['posts'])
          }
        }
      )
    } else {
      await likeMethod.mutateAsync(
        {
          id: Number(id)
        },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries(['like', Number(id)])
            void queryClient.invalidateQueries(['posts'])
          }
        }
      )
    }
  }

  const reactions = [
    {
      type: 'heart',
      count: _count?.likes ?? 0
    },
    {
      type: 'comment',
      count: _count?.comments ?? 0
    },
    {
      type: 'bookmark',
      count: 0
    },
    {
      type: 'share',
      count: 0
    }
  ]

  const router = useRouter()
  const postId = router.query?.postId

  const myConfig = genConfig(user?.email as AvatarConfig)

  const handleViewCommentModal = (): void => {
    void router.replace(
      {
        query: {
          postId: id
        }
      },
      `/@${user?.username}/posts/${id}`,
      {
        shallow: true
      }
    )
  }

  useEffect(() => {
    if (!isEmpty(postId)) {
      setIsModalOpen(true)
    }
  }, [postId])

  return (
    <main className="py-6 flex items-start justify-between">
      <section className="flex flex-col sm:flex-row items-start gap-y-2 gap-x-3">
        {/* User Avatar */}
        <Link href={`/@${user?.username}`} className="outline-primary">
          <ReactNiceAvatar
            className={clsx(
              'border-[3px] border-white rounded-full outline-4',
              'shadow shrink-0 w-14 h-14'
            )}
            {...myConfig}
          />
        </Link>
        <div className="relative w-full max-w-lg flex flex-col space-y-1">
          {/* User Information */}
          <Link
            href={`/@${user?.username}`}
            className="group leading-none inline-flex items-center gap-x-2 text-secondary outline-primary"
          >
            <h2 className="font-bold group-hover:underline">{user?.username}</h2>
            <p className="text-sm">
              {user?.name} &bull; <small>{formatTimeDifference(post?.createdAt)}</small>
            </p>
          </Link>
          {/* User Post */}
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center flex-wrap space-x-1">
              {convertHashtagsToLinks(title)}
              {postHashtags?.map((item: { hashtag: { tag: string } }, index: number) => (
                <Hashtag key={index} tag={item.hashtag.tag} />
              ))}
            </div>
            <div className="relative shrink-0 max-w-[355px] w-[355px]">
              <div
                className={clsx(
                  'h-[470px] border-[5px] flex justify-center items-center border-white',
                  'shadow overflow-hidden rounded-lg bg-black'
                )}
              >
                <Carousel>
                  {mediaFiles?.map((asset, idx) => {
                    if (asset.url.endsWith('.mp4')) {
                      return (
                        <video
                          key={idx}
                          src={asset.url}
                          autoPlay
                          muted
                          loop
                          className="w-full rounded-md"
                        >
                          Your browser does not support the video tag.
                        </video>
                      )
                    } else {
                      return (
                        <Image
                          key={idx}
                          src={asset.url}
                          width={500}
                          height={470}
                          placeholder="blur"
                          className="z-50"
                          blurDataURL={asset.url}
                          alt=""
                        />
                      )
                    }
                  })}
                </Carousel>
              </div>
              {/* Post Interaction Button */}
              <div className="absolute bottom-2 -right-16 flex flex-col space-y-2">
                {reactions.map((reaction, idx) => (
                  <React.Fragment key={idx}>
                    {reaction.type === Reaction.heart && (
                      <ReactionButton
                        count={reaction?.count}
                        onClick={() => {
                          void handleLikePost()
                        }}
                        btnStyle={isLikePost ? '!bg-rose-50 !border-rose-100' : ''}
                      >
                        <Heart fill={isLikePost ? '#f43f5e' : '#586ca0'} stroke="none" />
                      </ReactionButton>
                    )}
                    {reaction.type === Reaction.comment && (
                      <ReactionButton count={reaction.count} onClick={handleViewCommentModal}>
                        <MessageIcon className="w-5 h-5 fill-current" />
                      </ReactionButton>
                    )}
                    {reaction.type === Reaction.bookmark && (
                      <ReactionButton count={reaction.count}>
                        <Bookmark fill="#586ca0" stroke="none" strokeLinecap="round" />
                      </ReactionButton>
                    )}
                    {reaction.type === Reaction.share && (
                      <ReactionButton count={reaction.count}>
                        <ShareTwo theme="filled" size={20} className="text-secondary-300" />
                      </ReactionButton>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Follow Button */}
      {!isPostAuthor && (
        <section className="mt-2">
          <Button
            type="submit"
            onClick={() => {
              void handleFollowUnfollow()
            }}
            disabled={followMethod.isLoading || unFollowMethod.isLoading}
            variant={isFollowed ? 'primary' : 'primary-outline'}
            className="px-3.5 text-sm py-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isFollowed ? 'Following' : 'Follow'}
          </Button>
        </section>
      )}
    </main>
  )
}

export default Post
