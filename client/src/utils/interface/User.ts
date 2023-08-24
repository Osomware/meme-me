export interface IUser {
  id: number
  email: string
  name: string
  username: string
  role: string
  _count: {
    followers: number
    following: number
    posts: number
  }
}
