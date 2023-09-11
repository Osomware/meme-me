import { IUser } from './User'

export interface IComment {
  id: string
  text: string
  createdAt: string
  updatedAt: string
  user: Pick<IUser, 'id' | 'name' | 'email' | 'username'>
}
