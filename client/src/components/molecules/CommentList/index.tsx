import React, { FC } from 'react'

import Comment from '~/components/organisms/Comment'
import { IComment } from '~/utils/interface/Comment'

type Props = {
  comments: IComment[]
}

const CommentList: FC<Props> = ({ comments }): JSX.Element => {
  return (
    <div className="flex flex-col space-y-4">
      {comments?.map((comment, index) => (
        <Comment
          key={index}
          {...{
            comment
          }}
        />
      ))}
    </div>
  )
}

export default CommentList
