import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { isEmpty } from 'lodash'
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import React, { FC, ReactNode } from 'react'
import { Montserrat } from 'next/font/google'
import { Modal } from 'react-responsive-modal'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AtSign, Bookmark, Heart, Smile } from 'react-feather'
import { AvatarFullConfig, genConfig } from 'react-nice-avatar'

import Carousel from './../Carousel'
import usePost from '~/hooks/usePost'
import useLike from '~/hooks/useLike'
import useFollow from '~/hooks/useFollow'
import { useStore } from '~/utils/zustand'
import useComment from '~/hooks/useComment'
import Spinner from '~/utils/icons/Spinner'
import Input from '~/components/atoms/Input'
import { queryClient } from '~/lib/queryClient'
import { useZustand } from '~/hooks/useZustand'
import Hashtag from '~/components/atoms/Hashtag'
import { Reaction } from '~/utils/types/reaction'
import Messageicon from '~/utils/icons/MessageIcon'
import { IComment } from '~/utils/interface/Comment'
import CopyLink from '~/components/molecules/CopyLink'
import useScreenCondition from '~/hooks/useScreenCondition'
import CommentList from '~/components/molecules/CommentList'
import Button from '~/components/atoms/Buttons/ButtonAction'
import ReactionButton from '~/components/molecules/ReactionButton'
import { CommentFormValues, CommentSchema } from '~/utils/yup-schema'
import { formatTimeDifference } from '~/helpers/formatTimeDifference'
import PostDropdownMenu from '~/components/molecules/PostDropdownMenu'
import { convertHashtagsToLinks } from '~/helpers/convertHastagsToLinks'
import PostModalSkeletonLoading from '~/components/atoms/Skeletons/PostModalSkeletonLoading'

const montserrat = Montserrat({ subsets: ['latin'] })

const ReactNiceAvatar = dynamic(async () => await import('react-nice-avatar'), { ssr: false })

type PostModalProps = {
  isOpen: boolean
  closeModal: () => void
  postId: string | string[] | undefined
}

const PostModal: FC<PostModalProps> = ({ isOpen, closeModal, postId }): JSX.Element => {
  const router = useRouter()

  // * REACT HOOK FORM
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(CommentSchema)
  })

  // * POST HOOKS
  const { getSinglePost, handleDeletePostMutation } = usePost()
  const deletePostMethod = handleDeletePostMutation()
  const { data: postData, isLoading: isLoadingPost } = getSinglePost(Number(postId))
  const userPost = postData?.findOnePost
  const myConfig = genConfig(userPost?.user?.email as AvatarFullConfig)

  // * ZUSTAND STORE HOOKS
  const store = useZustand(useStore, (state) => state)

  // * LIKE HOOKS
  const { checkIsUserLikePost, handleLike, handleUnlike } = useLike()
  const likeMethod = handleLike()
  const unlikeMethod = handleUnlike()
  const likeStatuses = checkIsUserLikePost(Number(userPost?.id))

  const isLikePost = likeStatuses?.data?.checkUserLikePost ?? false
  const isPostAuthor = userPost?.user?.id === store?.user?.id

  // * SCREEN CONDITION HOOKS
  const isMediumScreen = useScreenCondition('(max-width: 768px)')

  // * FOLLOW HOOKS
  const { checkIsFollowed, handleFollow, handleUnfollow } = useFollow()
  const followMethod = handleFollow()
  const unFollowMethod = handleUnfollow()

  const followStatuses = checkIsFollowed(userPost?.user?.id ?? 0)
  const isFollowed = followStatuses?.data?.checkUserFollowed ?? false

  // * COMMENT HOOKS
  const { handleComment, getAllCommentsByPostId } = useComment()
  const commentMethod = handleComment()
  const {
    data: allComments,
    isLoading: isLoadingComments,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = getAllCommentsByPostId(Number(userPost?.id))

  const comments =
    allComments?.pages.reduce((acc: IComment[], page: any) => {
      const pagePosts = page?.findAllCommentByPostId as IComment[]
      return [...acc, ...pagePosts]
    }, []) ?? []

  const reactions = [
    {
      type: 'heart',
      count: userPost?._count?.likes ?? 0
    },
    {
      type: 'comment',
      count: userPost?._count?.comments ?? 0
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

  const handleFollowUnfollow = async (): Promise<void> => {
    if (isFollowed) {
      await unFollowMethod.mutateAsync(
        {
          id: userPost?.user?.id ?? 0
        },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries()
          }
        }
      )
    } else {
      await followMethod.mutateAsync(
        {
          id: userPost?.user?.id ?? 0
        },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries()
          }
        }
      )
    }
  }

  const handleLikePost = async (): Promise<void> => {
    if (isLikePost) {
      await unlikeMethod.mutateAsync(
        {
          id: Number(userPost?.id ?? 0)
        },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries(['like', Number(userPost?.id)])
            void queryClient.invalidateQueries(['posts'])
          }
        }
      )
    } else {
      await likeMethod.mutateAsync(
        {
          id: Number(userPost?.id ?? 0)
        },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries(['like', Number(userPost?.id)])
            void queryClient.invalidateQueries(['posts'])
          }
        }
      )
    }
  }

  const handleDeletePost = async (): Promise<void> => {
    await deletePostMethod.mutateAsync(
      {
        id: Number(userPost?.id)
      },
      {
        onSuccess: () => {
          void queryClient.invalidateQueries(['posts'])
          void queryClient.invalidateQueries(['like', Number(userPost?.id)])
          toast.success('Successfully Deleted!')
          void router.replace(`/@${userPost?.user?.username ?? ''}`)
        }
      }
    )
  }

  const handleCommentPost: SubmitHandler<CommentFormValues> = async (data): Promise<void> => {
    if (isEmpty(data?.text?.trim())) {
      return
    }

    await commentMethod.mutateAsync(
      {
        postId: Number(userPost?.id),
        text: data?.text as string
      },
      {
        onSuccess: () => {
          reset({
            text: ''
          })
        }
      }
    )
  }

  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      center
      classNames={{
        overlay: 'customPostModalOverlay',
        modal: 'customPostModal'
      }}
      showCloseIcon={false}
    >
      <div
        className={clsx(
          'flex text-sm text-secondary-300 overflow-hidden font-sans',
          montserrat.className
        )}
      >
        {!isMediumScreen && (
          <section className="relative flex-1 bg-black flex justify-center">
            <div className="h-full w-ful flex justify-center items-center max-w-md overflow-hidden">
              <Carousel>
                {
                  userPost?.mediaFiles?.map((asset, idx) => {
                    if (asset.url.endsWith('.mp4')) {
                      return (
                        <video key={idx} src={asset.url} autoPlay muted loop className="w-full">
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
                          blurDataURL={asset.url}
                          className="z-50"
                          alt=""
                        />
                      )
                    }
                  }) as ReactNode[]
                }
              </Carousel>
            </div>
            {isPostAuthor && (
              <div className="absolute right-0 mx-6 my-2">
                <PostDropdownMenu
                  {...{
                    actions: {
                      handleDeletePost
                    }
                  }}
                />
              </div>
            )}
          </section>
        )}
        {isLoadingPost ? (
          <PostModalSkeletonLoading />
        ) : (
          <section className="w-full md:w-[450px] flex mx-auto flex-col">
            <header className="p-6">
              {/* Reaction Button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <Link href={`/@${userPost?.user.username ?? ''}`} className="outline-primary">
                    <ReactNiceAvatar
                      className={clsx(
                        'border-[3px] border-white rounded-full outline-4 shadow shrink-0',
                        'w-14 h-14'
                      )}
                      {...myConfig}
                    />
                  </Link>
                  <div className="leading-none">
                    <Link
                      href={`/@${userPost?.user?.username ?? ''}`}
                      className="line-clamp-1 font-bold text-base hover:underline"
                    >
                      {userPost?.user.username}
                    </Link>
                    <span className="text-xs">
                      {userPost?.user.name} &bull;{' '}
                      {formatTimeDifference(userPost?.createdAt as string)}
                    </span>
                  </div>
                </div>
                {!isPostAuthor && (
                  <Button
                    type="submit"
                    onClick={() => {
                      void handleFollowUnfollow()
                    }}
                    disabled={followMethod.isLoading || unFollowMethod.isLoading}
                    variant={!isFollowed ? 'primary' : 'primary-outline'}
                    className="px-2 text-sm py-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {!isFollowed ? 'Follow' : 'Following'}
                  </Button>
                )}
              </div>
              <div className="flex items-center flex-wrap space-x-1 py-2">
                {convertHashtagsToLinks(userPost?.title ?? '')}
                {userPost?.postHashtags?.map(
                  (item: { hashtag: { tag: string } }, index: number) => (
                    <Hashtag key={index} tag={item.hashtag.tag} />
                  )
                )}
              </div>
              {/* Post Interaction Button */}
              <div className="mt-4 inline-flex items-center gap-x-4">
                {reactions.map((reaction, idx) => (
                  <React.Fragment key={idx}>
                    {reaction.type === Reaction.heart && (
                      <ReactionButton
                        count={reaction.count}
                        direction="flex-row"
                        className="p-2 rounded-full"
                        onClick={() => {
                          void handleLikePost()
                        }}
                        btnStyle={isLikePost ? '!bg-rose-50 !border-rose-100' : ''}
                      >
                        <Heart fill={isLikePost ? '#f43f5e' : '#586ca0'} stroke="none" />
                      </ReactionButton>
                    )}
                    {reaction.type === Reaction.comment && (
                      <ReactionButton
                        count={reaction.count}
                        direction="flex-row"
                        className="p-2 rounded-full"
                      >
                        <Messageicon className="w-4 h-4 fill-current" />
                      </ReactionButton>
                    )}
                    {reaction.type === Reaction.bookmark && (
                      <ReactionButton
                        count={reaction.count}
                        direction="flex-row"
                        className="p-2 rounded-full"
                      >
                        <Bookmark
                          fill="#586ca0"
                          stroke="none"
                          strokeLinecap="round"
                          className="w-5 h-5"
                        />
                      </ReactionButton>
                    )}
                  </React.Fragment>
                ))}
              </div>
              {/* Copy Link Input */}
              <CopyLink
                url={
                  `http://localhost:3000/@${userPost?.user?.username as string}/posts/${
                    router?.query.postId as string
                  }` ?? ''
                }
              />
            </header>
            <main
              className={clsx(
                'max-h-[400px] min-h-[400px] h-full px-6 py-4 border-y',
                'border-stroke-1 custom-scrollbar overflow-y-auto'
              )}
            >
              {isLoadingComments ? (
                <div className="flex justify-center py-3">
                  <Spinner width={5} height={5} />
                </div>
              ) : (
                <>
                  {comments?.length === 0 ? (
                    <p className="text-xs text-center text-secondary-100">No comment</p>
                  ) : (
                    <>
                      <CommentList
                        {...{
                          comments
                        }}
                      />
                      {isFetchingNextPage ? (
                        <div className="flex justify-center py-3">
                          <Spinner width={5} height={5} />
                        </div>
                      ) : null}

                      {(hasNextPage as boolean) && (
                        <div className="mt-4 text-left">
                          <span
                            onClick={() => {
                              void fetchNextPage()
                            }}
                            className="text-xs flex cursor-pointer font-medium text-secondary-200 hover:underline"
                          >
                            View more comments
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </main>
            <footer>
              <form
                className="flex items-center px-4 py-3"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onSubmit={handleSubmit(handleCommentPost)}
              >
                <div className="relative w-full flex items-center">
                  <Input
                    type="text"
                    {...register('text')}
                    disabled={isSubmitting}
                    placeholder="Add comment..."
                    className="placeholder:text-secondary-200 py-2 text-sm pr-16"
                  />
                  <div className="absolute flex items-center right-9 inset-y-0">
                    <button type="button" className="outline-none active:scale-95">
                      <AtSign className="stroke-1 w-5 h-5" />
                    </button>
                  </div>
                  <div className="absolute flex items-center right-2 inset-y-0">
                    <button type="button" className="outline-none active:scale-95">
                      <Smile className="stroke-1 w-5 h-5" />
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !isDirty || !isValid}
                  className={clsx(
                    'outline-none text-secondary-100 px-2 font-medium',
                    isSubmitting ? 'opacity-50 text-secondary-100' : '',
                    isSubmitting || !isDirty || !isValid ? '' : 'hover:text-primary'
                  )}
                >
                  Post
                </button>
              </form>
            </footer>
          </section>
        )}
      </div>
    </Modal>
  )
}

export default PostModal
