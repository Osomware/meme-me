import React from 'react'
import type { NextPage } from 'next'

import HomeLayout from '~/components/templates/HomeLayout'

const SavedPost: NextPage = (): JSX.Element => {
  return (
    <HomeLayout metaTitle="Saved Post" className="flex">
      <div className="max-w-5xl w-full mx-auto px-8">This is saved post pages</div>
      <div className="w-72 sticky top-0">Sticky here</div>
    </HomeLayout>
  )
}

export default SavedPost
