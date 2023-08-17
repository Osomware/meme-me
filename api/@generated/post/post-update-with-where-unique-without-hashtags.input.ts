import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { PostWhereUniqueInput } from './post-where-unique.input'
import { Type } from 'class-transformer'
import { PostUpdateWithoutHashtagsInput } from './post-update-without-hashtags.input'

@InputType()
export class PostUpdateWithWhereUniqueWithoutHashtagsInput {
  @Field(() => PostWhereUniqueInput, { nullable: false })
  @Type(() => PostWhereUniqueInput)
  where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>

  @Field(() => PostUpdateWithoutHashtagsInput, { nullable: false })
  @Type(() => PostUpdateWithoutHashtagsInput)
  data!: PostUpdateWithoutHashtagsInput
}
