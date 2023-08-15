import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class PostHashtagSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true

  @Field(() => Boolean, { nullable: true })
  postId?: true

  @Field(() => Boolean, { nullable: true })
  hashtagId?: true
}
