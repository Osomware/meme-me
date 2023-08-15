import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { User } from '../user/user.model'
import { PostHashtag } from '../post-hashtag/post-hashtag.model'
import { PostCount } from './post-count.output'

@ObjectType()
export class Post {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => String, { nullable: true })
  title!: string | null

  @Field(() => [String], { nullable: true })
  mediaUrls!: Array<string>

  @Field(() => Int, { nullable: false })
  userId!: number

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isHideLikeAndCount!: boolean

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isTurnOffComment!: boolean

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => User, { nullable: false })
  user?: User

  @Field(() => [PostHashtag], { nullable: true })
  postHashtags?: Array<PostHashtag>

  @Field(() => PostCount, { nullable: false })
  _count?: PostCount
}
