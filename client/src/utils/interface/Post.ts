import { MediaFiles } from './../types/input'

export interface IPost {
  id: string
  title: string
  mediaFiles: MediaFiles[]
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
  postHashtags: {
    [x: string]: any
    hashtag: {
      tag: string
    }
  }
  _count: {
    likes: number
    comments: number
  }
}
