import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class HashtagMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true

  @Field(() => Boolean, { nullable: true })
  tag?: true

  @Field(() => Boolean, { nullable: true })
  createdAt?: true

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true
}
