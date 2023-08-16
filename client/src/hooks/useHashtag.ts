import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { gqlClient } from '~/lib/gqlClient'
import { GET_ALL_HASHTAG_QUERY } from '~/graphql/queries/hashtagQuery'

export type Hashtag = {
  id: string
  tag: string
}
export type HashtagResponse = {
  getAllPostHashtag: Hashtag[]
}
type HashtagQueryType = UseQueryResult<HashtagResponse, unknown>
type ReturnType = {
  getAllHashtags: (isReady?: boolean) => HashtagQueryType
}

const useHashtag = (): ReturnType => {
  const getAllHashtags = (isReady?: boolean): HashtagQueryType =>
    useQuery<HashtagResponse, Error>({
      queryKey: ['hashtag'],
      queryFn: async () => await gqlClient.request(GET_ALL_HASHTAG_QUERY),
      select: (data: HashtagResponse) => data,
      enabled: isReady
    })

  return {
    getAllHashtags
  }
}

export default useHashtag
