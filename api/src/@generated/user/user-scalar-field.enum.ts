import { registerEnumType } from '@nestjs/graphql'

export enum UserScalarFieldEnum {
  id = 'id',
  email = 'email',
  username = 'username',
  name = 'name',
  password = 'password',
  refreshToken = 'refreshToken',
  role = 'role',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt'
}

registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
