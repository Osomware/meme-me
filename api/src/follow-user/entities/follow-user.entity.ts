import { ObjectType, Field, Int, ID } from '@nestjs/graphql'

@ObjectType()
export class FollowUser {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => Int, { nullable: false })
  followerId!: number

  @Field(() => Int, { nullable: false })
  followingId!: number

  @Field(() => Date, { nullable: false })
  createdAt!: Date
}
