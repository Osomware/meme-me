import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

import { User } from '~/user/user.entity'
import { Post } from '~/post/entities/post.entity'

@ObjectType()
export class LikePost {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => Int, { nullable: false })
  userId!: number

  @Field(() => Int, { nullable: false })
  postId!: number

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => User, { nullable: false })
  user?: User

  @Field(() => Post, { nullable: false })
  post?: Post
}
