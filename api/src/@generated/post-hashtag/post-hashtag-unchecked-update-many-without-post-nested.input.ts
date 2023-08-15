import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostHashtagCreateWithoutPostInput } from './post-hashtag-create-without-post.input'
import { Type } from 'class-transformer'
import { PostHashtagCreateOrConnectWithoutPostInput } from './post-hashtag-create-or-connect-without-post.input'
import { PostHashtagUpsertWithWhereUniqueWithoutPostInput } from './post-hashtag-upsert-with-where-unique-without-post.input'
import { PostHashtagCreateManyPostInputEnvelope } from './post-hashtag-create-many-post-input-envelope.input'
import { Prisma } from '@prisma/client'
import { PostHashtagWhereUniqueInput } from './post-hashtag-where-unique.input'
import { PostHashtagUpdateWithWhereUniqueWithoutPostInput } from './post-hashtag-update-with-where-unique-without-post.input'
import { PostHashtagUpdateManyWithWhereWithoutPostInput } from './post-hashtag-update-many-with-where-without-post.input'
import { PostHashtagScalarWhereInput } from './post-hashtag-scalar-where.input'

@InputType()
export class PostHashtagUncheckedUpdateManyWithoutPostNestedInput {
  @Field(() => [PostHashtagCreateWithoutPostInput], { nullable: true })
  @Type(() => PostHashtagCreateWithoutPostInput)
  create?: Array<PostHashtagCreateWithoutPostInput>

  @Field(() => [PostHashtagCreateOrConnectWithoutPostInput], { nullable: true })
  @Type(() => PostHashtagCreateOrConnectWithoutPostInput)
  connectOrCreate?: Array<PostHashtagCreateOrConnectWithoutPostInput>

  @Field(() => [PostHashtagUpsertWithWhereUniqueWithoutPostInput], { nullable: true })
  @Type(() => PostHashtagUpsertWithWhereUniqueWithoutPostInput)
  upsert?: Array<PostHashtagUpsertWithWhereUniqueWithoutPostInput>

  @Field(() => PostHashtagCreateManyPostInputEnvelope, { nullable: true })
  @Type(() => PostHashtagCreateManyPostInputEnvelope)
  createMany?: PostHashtagCreateManyPostInputEnvelope

  @Field(() => [PostHashtagWhereUniqueInput], { nullable: true })
  @Type(() => PostHashtagWhereUniqueInput)
  set?: Array<Prisma.AtLeast<PostHashtagWhereUniqueInput, 'id' | 'postId_hashtagId'>>

  @Field(() => [PostHashtagWhereUniqueInput], { nullable: true })
  @Type(() => PostHashtagWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<PostHashtagWhereUniqueInput, 'id' | 'postId_hashtagId'>>

  @Field(() => [PostHashtagWhereUniqueInput], { nullable: true })
  @Type(() => PostHashtagWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<PostHashtagWhereUniqueInput, 'id' | 'postId_hashtagId'>>

  @Field(() => [PostHashtagWhereUniqueInput], { nullable: true })
  @Type(() => PostHashtagWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<PostHashtagWhereUniqueInput, 'id' | 'postId_hashtagId'>>

  @Field(() => [PostHashtagUpdateWithWhereUniqueWithoutPostInput], { nullable: true })
  @Type(() => PostHashtagUpdateWithWhereUniqueWithoutPostInput)
  update?: Array<PostHashtagUpdateWithWhereUniqueWithoutPostInput>

  @Field(() => [PostHashtagUpdateManyWithWhereWithoutPostInput], { nullable: true })
  @Type(() => PostHashtagUpdateManyWithWhereWithoutPostInput)
  updateMany?: Array<PostHashtagUpdateManyWithWhereWithoutPostInput>

  @Field(() => [PostHashtagScalarWhereInput], { nullable: true })
  @Type(() => PostHashtagScalarWhereInput)
  deleteMany?: Array<PostHashtagScalarWhereInput>
}
