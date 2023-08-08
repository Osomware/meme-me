export type PostRequestInput = {
  title: string
  mediaUrls: {
    set: string[]
  }
  isHideLikeAndCount: boolean
  isTurnOffComment: boolean
}
