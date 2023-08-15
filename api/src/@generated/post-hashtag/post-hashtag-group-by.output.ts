import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { PostHashtagCountAggregate } from './post-hashtag-count-aggregate.output'
import { PostHashtagAvgAggregate } from './post-hashtag-avg-aggregate.output'
import { PostHashtagSumAggregate } from './post-hashtag-sum-aggregate.output'
import { PostHashtagMinAggregate } from './post-hashtag-min-aggregate.output'
import { PostHashtagMaxAggregate } from './post-hashtag-max-aggregate.output'

@ObjectType()
export class PostHashtagGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number

  @Field(() => Int, { nullable: false })
  postId!: number

  @Field(() => Int, { nullable: false })
  hashtagId!: number

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => PostHashtagCountAggregate, { nullable: true })
  _count?: PostHashtagCountAggregate

  @Field(() => PostHashtagAvgAggregate, { nullable: true })
  _avg?: PostHashtagAvgAggregate

  @Field(() => PostHashtagSumAggregate, { nullable: true })
  _sum?: PostHashtagSumAggregate

  @Field(() => PostHashtagMinAggregate, { nullable: true })
  _min?: PostHashtagMinAggregate

  @Field(() => PostHashtagMaxAggregate, { nullable: true })
  _max?: PostHashtagMaxAggregate
}
