import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostCreateWithoutPostHashtagsInput } from './post-create-without-post-hashtags.input'
import { Type } from 'class-transformer'
import { PostCreateOrConnectWithoutPostHashtagsInput } from './post-create-or-connect-without-post-hashtags.input'
import { PostUpsertWithoutPostHashtagsInput } from './post-upsert-without-post-hashtags.input'
import { Prisma } from '@prisma/client'
import { PostWhereUniqueInput } from './post-where-unique.input'
import { PostUpdateToOneWithWhereWithoutPostHashtagsInput } from './post-update-to-one-with-where-without-post-hashtags.input'

@InputType()
export class PostUpdateOneRequiredWithoutPostHashtagsNestedInput {
  @Field(() => PostCreateWithoutPostHashtagsInput, { nullable: true })
  @Type(() => PostCreateWithoutPostHashtagsInput)
  create?: PostCreateWithoutPostHashtagsInput

  @Field(() => PostCreateOrConnectWithoutPostHashtagsInput, { nullable: true })
  @Type(() => PostCreateOrConnectWithoutPostHashtagsInput)
  connectOrCreate?: PostCreateOrConnectWithoutPostHashtagsInput

  @Field(() => PostUpsertWithoutPostHashtagsInput, { nullable: true })
  @Type(() => PostUpsertWithoutPostHashtagsInput)
  upsert?: PostUpsertWithoutPostHashtagsInput

  @Field(() => PostWhereUniqueInput, { nullable: true })
  @Type(() => PostWhereUniqueInput)
  connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>

  @Field(() => PostUpdateToOneWithWhereWithoutPostHashtagsInput, { nullable: true })
  @Type(() => PostUpdateToOneWithWhereWithoutPostHashtagsInput)
  update?: PostUpdateToOneWithWhereWithoutPostHashtagsInput
}
