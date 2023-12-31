import { ID } from '@nestjs/graphql'
import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

import { Post } from '@generated/post/post.model'
import { Role } from '@generated/prisma/role.enum'
import { Follow } from '@generated/follow/follow.model'
import { UserCount } from '@generated/user/user-count.output'

@ObjectType()
export class UserFollowEntity {
  @Field(() => ID, { nullable: false })
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

  @Field(() => [Follow], { nullable: true })
  followers?: Array<Follow>

  @Field(() => [Follow], { nullable: true })
  following?: Array<Follow>

  @Field(() => UserCount, { nullable: false })
  _count?: UserCount
}
