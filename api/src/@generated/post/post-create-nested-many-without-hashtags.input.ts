import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostCreateWithoutHashtagsInput } from './post-create-without-hashtags.input'
import { Type } from 'class-transformer'
import { PostCreateOrConnectWithoutHashtagsInput } from './post-create-or-connect-without-hashtags.input'
import { Prisma } from '@prisma/client'
import { PostWhereUniqueInput } from './post-where-unique.input'

@InputType()
export class PostCreateNestedManyWithoutHashtagsInput {
  @Field(() => [PostCreateWithoutHashtagsInput], { nullable: true })
  @Type(() => PostCreateWithoutHashtagsInput)
  create?: Array<PostCreateWithoutHashtagsInput>

  @Field(() => [PostCreateOrConnectWithoutHashtagsInput], { nullable: true })
  @Type(() => PostCreateOrConnectWithoutHashtagsInput)
  connectOrCreate?: Array<PostCreateOrConnectWithoutHashtagsInput>

  @Field(() => [PostWhereUniqueInput], { nullable: true })
  @Type(() => PostWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>
}
