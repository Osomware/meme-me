import React from 'react'
import type { NextPage } from 'next'

import PostList from '~/components/molecules/PostList'
import StoryList from '~/components/molecules/StoryList'
import HomeLayout from '~/components/templates/HomeLayout'
import useScreenCondition from '~/hooks/useScreenCondition'
import { dummyPosts } from '~/utils/constants/dummyUserPost'
import FeedFilterTab from '~/components/molecules/FeedFilterTab'
import SuggestionRightBar from '~/components/organisms/SuggestionRightbar'

const Home: NextPage = (): JSX.Element => {
  // SCREEN SIZE CONDITION HOOKS
  const isMaxWidth = useScreenCondition('(max-width: 1380px)')

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

        {/* User Post */}
        <PostList posts={dummyPosts} />
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
