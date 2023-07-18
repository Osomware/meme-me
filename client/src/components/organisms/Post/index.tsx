import clsx from 'clsx'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import isEmpty from 'lodash/isEmpty'
import { useRouter } from 'next/router'
import { ShareTwo } from '@icon-park/react'
import { Heart, Bookmark } from 'react-feather'
import React, { Dispatch, FC, useEffect } from 'react'
import { AvatarConfig, genConfig } from 'react-nice-avatar'

import Carousel from './../Carousel'
import { Reaction } from '~/utils/types/reaction'
import MessageIcon from '~/utils/icons/MessageIcon'
import { IPost } from '~/utils/constants/dummyUserPost'
import Button from '~/components/atoms/Buttons/ButtonAction'
import ReactionButton from '~/components/molecules/ReactionButton'
import { convertHashtagsToLinks } from '~/helpers/convertHastagsToLinks'

const ReactNiceAvatar = dynamic(async () => await import('react-nice-avatar'), { ssr: false })

type PostProps = {
  post: IPost
  state: {
    setIsModalOpen: Dispatch<React.SetStateAction<boolean>>
  }
}

const Post: FC<PostProps> = ({ post, state: { setIsModalOpen } }): JSX.Element => {
  // Destructured Props
  const { id, content, isFollowed, reactions, title, user } = post

  const router = useRouter()
  const postId = router.query?.postId

  const myConfig = genConfig(user.avatar as AvatarConfig)

  const handleViewCommentModal = (): void => {
    void router.replace(
      {
        query: {
          postId: id
        }
      },
      `/@${user.username}/posts/${id}`
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
        <Link href={`/${user.username}`} className="outline-primary">
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
            href={`/${user.username}`}
            className="group leading-none inline-flex items-center gap-x-2 text-secondary outline-primary"
          >
            <h2 className={clsx('font-bold group-hover:underline')}>{user.username}</h2>
            <span className={clsx('text-sm')}>{user.name}</span>
          </Link>
          {/* User Post */}
          <div className="flex flex-col space-y-1.5">
            {convertHashtagsToLinks(title)}
            <div className="relative shrink-0 max-w-xs w-full ">
              <div className="h-[470px] border-4 border-white shadow overflow-hidden rounded-2xl bg-black">
                <Carousel>
                  {content.map((asset, idx) => {
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
                  })}
                </Carousel>
              </div>
              {/* Post Interaction Button */}
              <div className="absolute bottom-2 -right-16 flex flex-col space-y-2">
                {reactions.map((reaction, idx) => (
                  <React.Fragment key={idx}>
                    {reaction.type === Reaction.heart && (
                      <ReactionButton count={reaction.count}>
                        <Heart fill="#586ca0" stroke="none" />
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
      <section className="mt-2">
        <Button
          type="button"
          variant={isFollowed ? 'primary' : 'primary-outline'}
          className="px-3.5 text-sm py-1"
        >
          {isFollowed ? 'Following' : 'Follow'}
        </Button>
      </section>
    </main>
  )
}

export default Post
