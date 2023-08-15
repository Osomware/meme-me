import { registerEnumType } from '@nestjs/graphql'

export enum PostHashtagScalarFieldEnum {
  id = 'id',
  postId = 'postId',
  hashtagId = 'hashtagId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt'
}

registerEnumType(PostHashtagScalarFieldEnum, {
  name: 'PostHashtagScalarFieldEnum',
  description: undefined
})
