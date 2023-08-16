import React, { FC } from 'react'
import dynamic from 'next/dynamic'

import { HashtagResponse } from '~/hooks/useHashtag'
import { delimiters, Tag } from '~/helpers/tagHelpers'

const ReactTags = dynamic(async () => (await import('react-tag-input')).WithContext, {
  ssr: false
})

export type TagInputProps = {
  state: {
    tags: Tag[]
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>
  }
  data: HashtagResponse | undefined
}

const TagInput: FC<TagInputProps> = (props): JSX.Element => {
  const {
    state: { tags, setTags },
    data
  } = props

  const handleDeleteTag = (i: number): void => {
    setTags(tags.filter((_, index) => index !== i))
  }

  const handleAdditionTag = (tag: Tag): void => {
    setTags([...tags, tag])
  }

  const handleDragTag = (tag: Tag, currPos: number, newPos: number): void => {
    const newTags = tags.slice()

    newTags.splice(currPos, 1)
    newTags.splice(newPos, 0, tag)

    // re-render
    setTags(newTags)
  }

  return (
    <ReactTags
      tags={tags}
      suggestions={data?.getAllPostHashtag?.map((hashtag) => ({
        id: hashtag.id.toString(),
        text: hashtag.tag
      }))}
      delimiters={delimiters}
      handleDelete={handleDeleteTag}
      handleAddition={handleAdditionTag}
      handleDrag={handleDragTag}
      inputFieldPosition="bottom"
      autocomplete
      placeholder="Add tags"
      renderSuggestion={({ text }, query) => <span>{`#${text}`}</span>}
    />
  )
}

export default TagInput
