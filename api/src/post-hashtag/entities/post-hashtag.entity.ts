import { ObjectType, Field, ID } from '@nestjs/graphql'

import { HashtagCount } from '~/@generated/hashtag/hashtag-count.output'

@ObjectType()
export class PostHashtag {
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
