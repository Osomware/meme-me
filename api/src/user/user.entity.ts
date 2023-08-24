import { ObjectType, Field, Int } from '@nestjs/graphql'

import { Followers } from './followers.entity'
import { Role } from '@generated/prisma/role.enum'
import { Post } from '~/post/entities/post.entity'
import { Follow } from '@generated/follow/follow.model'
import { UserCount } from '@generated/user/user-count.output'

@ObjectType()
export class User {
  @Field(() => Int!, { nullable: false })
  id!: number

  @Field(() => String, { nullable: false })
  email!: string

  @Field(() => String, { nullable: false })
  username!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  password!: string

  @Field(() => String, { nullable: true })
  refreshToken!: string | null

  @Field(() => Role, { nullable: false, defaultValue: 'USER' })
  role!: keyof typeof Role

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => [Post], { nullable: true })
  posts?: Array<Post>

  @Field(() => [Followers], { nullable: true })
  followers?: Array<Follow>

  @Field(() => [Followers], { nullable: true })
  following?: Array<Follow>

  @Field(() => UserCount, { nullable: false })
  _count?: UserCount
}
