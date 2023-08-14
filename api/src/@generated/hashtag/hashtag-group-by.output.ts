import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { HashtagCountAggregate } from './hashtag-count-aggregate.output'
import { HashtagAvgAggregate } from './hashtag-avg-aggregate.output'
import { HashtagSumAggregate } from './hashtag-sum-aggregate.output'
import { HashtagMinAggregate } from './hashtag-min-aggregate.output'
import { HashtagMaxAggregate } from './hashtag-max-aggregate.output'

@ObjectType()
export class HashtagGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number

  @Field(() => String, { nullable: false })
  tag!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => HashtagCountAggregate, { nullable: true })
  _count?: HashtagCountAggregate

  @Field(() => HashtagAvgAggregate, { nullable: true })
  _avg?: HashtagAvgAggregate

  @Field(() => HashtagSumAggregate, { nullable: true })
  _sum?: HashtagSumAggregate

  @Field(() => HashtagMinAggregate, { nullable: true })
  _min?: HashtagMinAggregate

  @Field(() => HashtagMaxAggregate, { nullable: true })
  _max?: HashtagMaxAggregate
}
