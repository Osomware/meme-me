import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { PostWhereUniqueInput } from './post-where-unique.input'
import { Type } from 'class-transformer'
import { PostCreateWithoutHashtagsInput } from './post-create-without-hashtags.input'

@InputType()
export class PostCreateOrConnectWithoutHashtagsInput {
  @Field(() => PostWhereUniqueInput, { nullable: false })
  @Type(() => PostWhereUniqueInput)
  where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>

  @Field(() => PostCreateWithoutHashtagsInput, { nullable: false })
  @Type(() => PostCreateWithoutHashtagsInput)
  create!: PostCreateWithoutHashtagsInput
}
