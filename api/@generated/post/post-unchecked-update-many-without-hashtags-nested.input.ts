import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostCreateWithoutHashtagsInput } from './post-create-without-hashtags.input'
import { Type } from 'class-transformer'
import { PostCreateOrConnectWithoutHashtagsInput } from './post-create-or-connect-without-hashtags.input'
import { PostUpsertWithWhereUniqueWithoutHashtagsInput } from './post-upsert-with-where-unique-without-hashtags.input'
import { Prisma } from '@prisma/client'
import { PostWhereUniqueInput } from './post-where-unique.input'
import { PostUpdateWithWhereUniqueWithoutHashtagsInput } from './post-update-with-where-unique-without-hashtags.input'
import { PostUpdateManyWithWhereWithoutHashtagsInput } from './post-update-many-with-where-without-hashtags.input'
import { PostScalarWhereInput } from './post-scalar-where.input'

@InputType()
export class PostUncheckedUpdateManyWithoutHashtagsNestedInput {
  @Field(() => [PostCreateWithoutHashtagsInput], { nullable: true })
  @Type(() => PostCreateWithoutHashtagsInput)
  create?: Array<PostCreateWithoutHashtagsInput>

  @Field(() => [PostCreateOrConnectWithoutHashtagsInput], { nullable: true })
  @Type(() => PostCreateOrConnectWithoutHashtagsInput)
  connectOrCreate?: Array<PostCreateOrConnectWithoutHashtagsInput>

  @Field(() => [PostUpsertWithWhereUniqueWithoutHashtagsInput], { nullable: true })
  @Type(() => PostUpsertWithWhereUniqueWithoutHashtagsInput)
  upsert?: Array<PostUpsertWithWhereUniqueWithoutHashtagsInput>

  @Field(() => [PostWhereUniqueInput], { nullable: true })
  @Type(() => PostWhereUniqueInput)
  set?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>

  @Field(() => [PostWhereUniqueInput], { nullable: true })
  @Type(() => PostWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>

  @Field(() => [PostWhereUniqueInput], { nullable: true })
  @Type(() => PostWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>

  @Field(() => [PostWhereUniqueInput], { nullable: true })
  @Type(() => PostWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>

  @Field(() => [PostUpdateWithWhereUniqueWithoutHashtagsInput], { nullable: true })
  @Type(() => PostUpdateWithWhereUniqueWithoutHashtagsInput)
  update?: Array<PostUpdateWithWhereUniqueWithoutHashtagsInput>

  @Field(() => [PostUpdateManyWithWhereWithoutHashtagsInput], { nullable: true })
  @Type(() => PostUpdateManyWithWhereWithoutHashtagsInput)
  updateMany?: Array<PostUpdateManyWithWhereWithoutHashtagsInput>

  @Field(() => [PostScalarWhereInput], { nullable: true })
  @Type(() => PostScalarWhereInput)
  deleteMany?: Array<PostScalarWhereInput>
}
