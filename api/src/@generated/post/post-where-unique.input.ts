import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { PostWhereInput } from './post-where.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input'
import { IntFilter } from '../prisma/int-filter.input'
import { BoolFilter } from '../prisma/bool-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { UserRelationFilter } from '../user/user-relation-filter.input'
import { PostHashtagListRelationFilter } from '../post-hashtag/post-hashtag-list-relation-filter.input'

@InputType()
export class PostWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => [PostWhereInput], { nullable: true })
  AND?: Array<PostWhereInput>

  @Field(() => [PostWhereInput], { nullable: true })
  OR?: Array<PostWhereInput>

  @Field(() => [PostWhereInput], { nullable: true })
  NOT?: Array<PostWhereInput>

  @Field(() => StringNullableFilter, { nullable: true })
  title?: StringNullableFilter

  @Field(() => StringNullableListFilter, { nullable: true })
  mediaUrls?: StringNullableListFilter

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter

  @Field(() => BoolFilter, { nullable: true })
  isHideLikeAndCount?: BoolFilter

  @Field(() => BoolFilter, { nullable: true })
  isTurnOffComment?: BoolFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter

  @Field(() => PostHashtagListRelationFilter, { nullable: true })
  postHashtags?: PostHashtagListRelationFilter
}
