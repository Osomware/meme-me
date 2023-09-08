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

export type TargetPostInput = {
  id: number
}

export type DeletePostInput = {
  id: number
}

export type CommentCreateWithoutUserInput = {
  postId: number
  text: string
}
