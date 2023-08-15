import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { PostHashtagWhereUniqueInput } from './post-hashtag-where-unique.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteOnePostHashtagArgs {
  @Field(() => PostHashtagWhereUniqueInput, { nullable: false })
  @Type(() => PostHashtagWhereUniqueInput)
  where!: Prisma.AtLeast<PostHashtagWhereUniqueInput, 'id' | 'postId_hashtagId'>
}
