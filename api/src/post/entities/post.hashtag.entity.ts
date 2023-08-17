import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

import { Hashtag } from './hashtag.entity'

@ObjectType()
export class PostHashtagEntity {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => Int, { nullable: false })
  postId!: number

  @Field(() => Int, { nullable: false })
  hashtagId!: number

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Hashtag, { nullable: false })
  hashtag?: Hashtag
}
