import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Posts: NextPage = (): JSX.Element => {
  const router = useRouter()
  const { '@username': username, id } = router.query

  return (
    <div>
      <h2>This is the Posts/ID</h2>
      <h1>User: {username}</h1>
      <h2>Post ID: {id}</h2>
      {/* Rest of your component */}
    </div>
  )
}

export default Posts
