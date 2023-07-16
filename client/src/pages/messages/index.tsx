import React from 'react'
import type { NextPage } from 'next'

import HomeLayout from '~/components/templates/HomeLayout'

const Messages: NextPage = (): JSX.Element => {
  return (
    <HomeLayout metaTitle="Messages" className="flex">
      <div className="max-w-5xl w-full mx-auto px-8">This is message pages</div>
      <div className="w-72 sticky top-0">Sticky here</div>
    </HomeLayout>
  )
}

export default Messages
