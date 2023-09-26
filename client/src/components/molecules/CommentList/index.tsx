import React, { FC } from 'react'

import Comment from '~/components/organisms/Comment'
import { IComment } from '~/utils/interface/Comment'

type Props = {
  comments: IComment[]
  isPostAuthor: boolean
}

const CommentList: FC<Props> = ({ comments, isPostAuthor }): JSX.Element => {
  return (
    <div className="flex flex-col space-y-4">
      {comments?.map((comment, index) => (
        <Comment
          key={index}
          {...{
            comment,
            isPostAuthor
          }}
        />
      ))}
    </div>
  )
}

export default CommentList
