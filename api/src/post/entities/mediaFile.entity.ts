import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

import { Post } from './post.entity'

@ObjectType()
export class MediaFile {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => String, { nullable: false })
  key!: string

  @Field(() => String, { nullable: false })
  url!: string

  @Field(() => Int, { nullable: false })
  postId!: number

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Post, { nullable: false })
  post?: Post
}
