import type { NextPage } from 'next'
import Alert from '~/components/atoms/Alert'
import React, { FC, ReactNode, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import usePost from '~/hooks/usePost'
import { IPost } from '~/utils/interface/Post'
import PostList from '~/components/molecules/PostList'
import StoryList from '~/components/molecules/StoryList'
import HomeLayout from '~/components/templates/HomeLayout'
import useScreenCondition from '~/hooks/useScreenCondition'
import FeedFilterTab from '~/components/molecules/FeedFilterTab'
import SuggestionRightBar from '~/components/organisms/SuggestionRightbar'
import PostSkeletonLoading from '~/components/atoms/Skeletons/PostSkeletonLoading'

const Home: NextPage = (): JSX.Element => {
  const { getInfinitePosts } = usePost()
  const {
    data: dataPosts,
    fetchNextPage,
    hasNextPage,
    isLoading: isLoadingPosts,
    isError
  } = getInfinitePosts()

  const userPosts = dataPosts?.pages.reduce((acc: any, page: any) => {
    return [...acc, ...page?.findAllPost]
  }, [])

  // console.log(userPosts)

  // SCREEN SIZE CONDITION HOOKS
  const isMaxWidth = useScreenCondition('(max-width: 1380px)')

  if (isLoadingPosts) {
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
      {/* <pre>{JSON.stringify(userPosts, null, 2)}</pre> */}
      <InfiniteScroll
        dataLength={userPosts ? userPosts?.length : 0}
        next={() => {
          fetchNextPage()
        }}
        hasMore={hasNextPage as boolean}
        loader={<div className="text-center text-sm text-secondary-200 py-6">Loading...</div>}
      >
        {userPosts?.length === 0 ? (
          <div className="mt-3">
            <p className="py-2 text-center text-sm text-secondary-200">No Post</p>
          </div>
        ) : (
          <PostList posts={userPosts as any} />
        )}
      </InfiniteScroll>
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
