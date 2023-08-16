export type PostRequestInput = {
  title: string
  mediaUrls: {
    set: string[]
  }
  isHideLikeAndCount: boolean
  isTurnOffComment: boolean
  postHashtags: {
    create: Array<{
      hashtag: {
        connectOrCreate: {
          where: {
            tag: string
          }
          create: {
            tag: string
          }
        }
      }
    }>
  }
}
