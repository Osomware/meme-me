import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class PostMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true

  @Field(() => Boolean, { nullable: true })
  title?: true

  @Field(() => Boolean, { nullable: true })
  userId?: true

  @Field(() => Boolean, { nullable: true })
  isHideLikeAndCount?: true

  @Field(() => Boolean, { nullable: true })
  isTurnOffComment?: true

  @Field(() => Boolean, { nullable: true })
  createdAt?: true

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true
}
