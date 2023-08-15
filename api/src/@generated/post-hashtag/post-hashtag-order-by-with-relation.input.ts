import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { PostOrderByWithRelationInput } from '../post/post-order-by-with-relation.input'
import { HashtagOrderByWithRelationInput } from '../hashtag/hashtag-order-by-with-relation.input'

@InputType()
export class PostHashtagOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  postId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  hashtagId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => PostOrderByWithRelationInput, { nullable: true })
  post?: PostOrderByWithRelationInput

  @Field(() => HashtagOrderByWithRelationInput, { nullable: true })
  hashtag?: HashtagOrderByWithRelationInput
}
