import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'

@ObjectType()
export class PostHashtagAvgAggregate {
  @Field(() => Float, { nullable: true })
  id?: number

  @Field(() => Float, { nullable: true })
  postId?: number

  @Field(() => Float, { nullable: true })
  hashtagId?: number
}
