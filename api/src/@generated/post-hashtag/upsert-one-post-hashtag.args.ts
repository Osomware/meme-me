import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { PostHashtagWhereUniqueInput } from './post-hashtag-where-unique.input'
import { Type } from 'class-transformer'
import { PostHashtagCreateInput } from './post-hashtag-create.input'
import { PostHashtagUpdateInput } from './post-hashtag-update.input'

@ArgsType()
export class UpsertOnePostHashtagArgs {
  @Field(() => PostHashtagWhereUniqueInput, { nullable: false })
  @Type(() => PostHashtagWhereUniqueInput)
  where!: Prisma.AtLeast<PostHashtagWhereUniqueInput, 'id' | 'postId_hashtagId'>

  @Field(() => PostHashtagCreateInput, { nullable: false })
  @Type(() => PostHashtagCreateInput)
  create!: PostHashtagCreateInput

  @Field(() => PostHashtagUpdateInput, { nullable: false })
  @Type(() => PostHashtagUpdateInput)
  update!: PostHashtagUpdateInput
}
