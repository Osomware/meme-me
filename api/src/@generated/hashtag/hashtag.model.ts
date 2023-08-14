import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Post } from '../post/post.model'
import { HashtagCount } from './hashtag-count.output'

@ObjectType()
export class Hashtag {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => String, { nullable: false })
  tag!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => [Post], { nullable: true })
  posts?: Array<Post>

  @Field(() => HashtagCount, { nullable: false })
  _count?: HashtagCount
}
