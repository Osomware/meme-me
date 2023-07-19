import clsx from 'clsx'
import moment from 'moment'
import { isEmpty } from 'lodash'
import dynamic from 'next/dynamic'
import { Montserrat } from 'next/font/google'
import { Modal } from 'react-responsive-modal'
import { AtSign, Bookmark, Heart, Smile } from 'react-feather'
import { AvatarFullConfig, genConfig } from 'react-nice-avatar'
import React, { FC, ReactNode, useEffect, useState } from 'react'

import Comment from './../Comment'
import Carousel from './../Carousel'
import Input from '~/components/atoms/Input'
import { Reaction } from '~/utils/types/reaction'
import Messageicon from '~/utils/icons/MessageIcon'
import CopyLink from '~/components/molecules/CopyLink'
import useScreenCondition from '~/hooks/useScreenCondition'
import Button from '~/components/atoms/Buttons/ButtonAction'
import ReactionButton from '~/components/molecules/ReactionButton'
import { dummyPosts, IPost } from '~/utils/constants/dummyUserPost'
import { convertHashtagsToLinks } from '~/helpers/convertHastagsToLinks'

const montserrat = Montserrat({ subsets: ['latin'] })

const ReactNiceAvatar = dynamic(async () => await import('react-nice-avatar'), { ssr: false })

type PostModalProps = {
  isOpen: boolean
  closeModal: () => void
  postId: string | string[] | undefined
}

const PostModal: FC<PostModalProps> = ({ isOpen, closeModal, postId }): JSX.Element => {
  const [post, setPost] = useState<IPost>()
  const myConfig = genConfig(post?.user?.avatar as AvatarFullConfig)

  const isMediumScreen = useScreenCondition('(max-width: 768px)')

  useEffect(() => {
    if (!isEmpty(postId)) {
      const filteredData = dummyPosts.find((item) => item.id.toString() === postId)
      setPost(filteredData)
    }
  }, [postId])

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
        className={clsx('flex text-sm text-secondary-300 overflow-hidden', montserrat.className)}
      >
        {!isMediumScreen && (
          <section className="flex-1 bg-black flex justify-center">
            <div className="h-full w-ful flex justify-center items-center max-w-sm overflow-hidden bg-black">
              <Carousel>
                {
                  post?.content.map((asset, idx) => {
                    if (asset.endsWith('.mp4')) {
                      return (
                        <video key={idx} src={asset} autoPlay muted loop className="w-full">
                          Your browser does not support the video tag.
                        </video>
                      )
                    } else {
                      return (
                        <img
                          key={idx}
                          src={asset}
                          alt=""
                          className="w-full h-full flex-1 object-fill"
                        />
                      )
                    }
                  }) as ReactNode[]
                }
              </Carousel>
            </div>
          </section>
        )}
        <section className="w-full md:w-[450px] flex mx-auto flex-col">
          <header className="p-6">
            {/* Reaction Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <ReactNiceAvatar
                  className={clsx(
                    'border-[3px] border-white rounded-full outline-4 shadow shrink-0',
                    'w-14 h-14'
                  )}
                  {...myConfig}
                />
                <div className="leading-none">
                  <h2 className="line-clamp-1 font-bold text-base">{post?.user.username}</h2>
                  <span className="text-xs">
                    {post?.user.name} &bull; {moment(post?.created_at).format('MM-DD-YY')}
                  </span>
                </div>
              </div>
              <Button
                type="button"
                variant={post?.isFollowed === true ? 'secondary-outline' : 'primary'}
                className="text-xs py-1.5 font-semibold w-[76px]"
              >
                {post?.isFollowed === true ? 'Following' : 'Follow'}
              </Button>
            </div>
            <div className="py-2">{convertHashtagsToLinks(post?.title ?? '')}</div>
            {/* Post Interaction Button */}
            <div className="mt-4 inline-flex items-center gap-x-4">
              {post?.reactions.map((reaction, idx) => (
                <React.Fragment key={idx}>
                  {reaction.type === Reaction.heart && (
                    <ReactionButton
                      count={reaction.count}
                      direction="flex-row"
                      className="p-2 rounded-full"
                    >
                      <Heart fill="#586ca0" stroke="none" className="w-5 h-5" />
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
            <CopyLink url={post?.url ?? ''} />
          </header>
          <main
            className={clsx(
              'max-h-[400px] min-h-[400px] h-full px-6 py-4 border-y',
              'border-stroke-1 custom-scrollbar overflow-y-auto'
            )}
          >
            <Comment />
          </main>
          <footer className="flex items-center px-4 py-3">
            <div className="relative w-full flex items-center">
              <Input
                type="text"
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
              type="button"
              className={clsx(
                'outline-none text-secondary-100 px-2 focus:text-primary',
                'hover:text-primary font-medium'
              )}
            >
              Post
            </button>
          </footer>
        </section>
      </div>
    </Modal>
  )
}

export default PostModal
