import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { PostHashtag } from '../post-hashtag/post-hashtag.model'
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

  @Field(() => [PostHashtag], { nullable: true })
  postHashtags?: Array<PostHashtag>

  @Field(() => HashtagCount, { nullable: false })
  _count?: HashtagCount
}
