import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class PostHashtagSumAggregate {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => Int, { nullable: true })
  postId?: number

  @Field(() => Int, { nullable: true })
  hashtagId?: number
}
