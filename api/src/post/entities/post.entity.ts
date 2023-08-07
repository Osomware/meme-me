import { ObjectType, Field, Int, ID } from '@nestjs/graphql'
import { User } from '~/user/user.entity'

@ObjectType()
export class Post {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => String, { nullable: true })
  title?: string | null

  @Field(() => [String], { nullable: true })
  mediaUrls?: Array<string>

  @Field(() => Int, { nullable: true })
  userId?: number

  @Field(() => Date, { nullable: true })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  updatedAt?: Date

  @Field(() => User, { nullable: true })
  user?: User
}
