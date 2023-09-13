import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'
import React, { FC, ReactNode, useEffect } from 'react'

import { HashLoader } from 'react-spinners'
import Alert from '~/components/atoms/Alert'
import { IPost } from '~/utils/interface/Post'
import usePost, { PostFilter } from '~/hooks/usePost'
import PostList from '~/components/molecules/PostList'
import StoryList from '~/components/molecules/StoryList'
import HomeLayout from '~/components/templates/HomeLayout'
import useScreenCondition from '~/hooks/useScreenCondition'
import FeedFilterTab from '~/components/molecules/FeedFilterTab'
import SuggestionRightBar from '~/components/organisms/SuggestionRightbar'
import PostSkeletonLoading from '~/components/atoms/Skeletons/PostSkeletonLoading'

const Home: NextPage = (): JSX.Element => {
  const router = useRouter()
  const filter = router?.query?.filter as string
  const newFilter = filter?.charAt(0).toUpperCase() + filter?.slice(1)
  const { ref, inView } = useInView()

  // * POSTS HOOKS
  const { getAllPosts } = usePost()

  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = getAllPosts(
    newFilter as PostFilter
  )

  const posts =
    data?.pages.reduce((acc: IPost[], page: any) => {
      const pagePosts = page.findAllPost as IPost[]
      return [...acc, ...pagePosts]
    }, []) ?? []

  useEffect(() => {
    if (inView && (hasNextPage as boolean)) {
      void fetchNextPage()
    }
  }, [inView])

  // SCREEN SIZE CONDITION HOOKS
  const isMaxWidth = useScreenCondition('(max-width: 1380px)')

  if (isLoading) {
    return (
      <PageLayout
        {...{
          isMaxWidth
        }}
      >
        <PostSkeletonLoading />
      </PageLayout>
    )
  }

  if (isError) {
    return (
      <PageLayout
        {...{
          isMaxWidth
        }}
      >
        <div className="py-6">
          <Alert type="error" message="Something went wrong fetching data" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout
      {...{
        isMaxWidth
      }}
    >
      <div>
        {posts?.length === 0 ? (
          <div className="mt-3">
            <p className="py-2 text-center text-sm text-secondary-200">No Post</p>
          </div>
        ) : (
          <>
            <PostList posts={posts ?? []} />
          </>
        )}
      </div>

      {isFetchingNextPage ? (
        <div className="flex justify-center">
          <HashLoader size={16} color="#586ca0" />
        </div>
      ) : null}

      <span style={{ visibility: 'hidden' }} ref={ref}>
        intersection observer marker
      </span>
    </PageLayout>
  )
}

const PageLayout: FC<{ children: ReactNode; isMaxWidth: boolean }> = ({ children, isMaxWidth }) => {
  return (
    <HomeLayout metaTitle="Home" className="flex">
      <article className="max-w-3xl w-full mx-auto px-8 py-6">
        {/* User Story List */}
        <StoryList />
        <hr className="my-3 border-1 border-stroke-2" />
        <div className="flex items-center justify-between flex-wrap gap-y-2">
          <h2 className="text-secondary font-bold">Feeds</h2>
          <FeedFilterTab />
        </div>
        {children}
      </article>
      {!isMaxWidth && (
        <aside className="border-l border-stroke-3 h-full w-80 shrink-0 sticky top-0 mx-1">
          <SuggestionRightBar />
        </aside>
      )}
    </HomeLayout>
  )
}

export default Home
