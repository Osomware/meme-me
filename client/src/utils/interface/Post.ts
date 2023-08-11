export interface IPost {
  id: string
  title: string
  mediaUrls: string[]
  createdAt: string
  updatedAt: string
  isHideLikeAndCount: boolean
  isTurnOffComment: boolean
  user: {
    id: number
    name: string
    email: string
    username: string
  }
}
