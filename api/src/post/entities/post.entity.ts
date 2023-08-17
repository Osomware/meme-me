import { ObjectType, Field, Int, ID } from '@nestjs/graphql'

import { User } from '~/user/user.entity'
import { Hashtag } from './hashtag.entity'
import { PostHashtagEntity } from './post.hashtag.entity'

@ObjectType()
export class Post {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => String, { nullable: true })
  title?: string | null

  @Field(() => [String], { nullable: true })
  mediaUrls?: Array<string>

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isHideLikeAndCount!: boolean

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isTurnOffComment!: boolean

  @Field(() => Int, { nullable: true })
  userId?: number

  @Field(() => [Hashtag], { nullable: true })
  hashtags?: Array<Hashtag>

  @Field(() => Date, { nullable: true })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  updatedAt?: Date

  @Field(() => User, { nullable: true })
  user?: User

  @Field(() => [PostHashtagEntity], { nullable: true })
  postHashtags?: Array<PostHashtagEntity>
}
