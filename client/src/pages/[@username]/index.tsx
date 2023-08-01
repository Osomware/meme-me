import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import HomeLayout from '~/components/templates/HomeLayout'

const Username: NextPage = (): JSX.Element => {
  const router = useRouter()
  const { '@username': username } = router.query

  return (
    <HomeLayout metaTitle="Profile" className="flex">
      <h2>This is the Username/ID</h2>
      <h1>User: {username}</h1>
    </HomeLayout>
  )
}

export default Username
