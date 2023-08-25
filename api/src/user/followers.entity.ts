import { Field } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

import { User } from './user.entity'

@ObjectType()
export class Followers {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => Int, { nullable: false })
  followerId!: number

  @Field(() => Int, { nullable: false })
  followingId!: number

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => User, { nullable: false })
  follower?: User

  @Field(() => User, { nullable: false })
  following?: User
}
