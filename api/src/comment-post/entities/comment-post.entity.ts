import { ObjectType, Field, Int, ID } from '@nestjs/graphql'

import { User } from '~/user/user.entity'
import { Post } from '~/post/entities/post.entity'
import { CommentCount } from '@generated/comment/comment-count.output'

@ObjectType()
export class CommentPost {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => String, { nullable: false })
  text!: string

  @Field(() => Int, { nullable: false })
  userId!: number

  @Field(() => Int, { nullable: false })
  postId!: number

  @Field(() => Int, { nullable: true })
  parentId!: number | null

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => User, { nullable: false })
  user?: User

  @Field(() => Post, { nullable: false })
  post?: Post

  @Field(() => CommentPost, { nullable: true })
  parent?: CommentPost | null

  @Field(() => [CommentPost], { nullable: true })
  childComments?: Array<CommentPost>

  @Field(() => CommentCount, { nullable: false })
  _count?: CommentCount
}
