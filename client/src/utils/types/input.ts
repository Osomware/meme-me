export type PostRequestInput = {
  title: string
  mediaFiles: {
    createMany: {
      data: MediaFiles[]
    }
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

export type TargetUserIdInput = {
  id: number
}

export type MediaFiles = {
  key: string
  url: string
}
