import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostHashtagCreateWithoutHashtagInput } from './post-hashtag-create-without-hashtag.input'
import { Type } from 'class-transformer'
import { PostHashtagCreateOrConnectWithoutHashtagInput } from './post-hashtag-create-or-connect-without-hashtag.input'
import { PostHashtagUpsertWithWhereUniqueWithoutHashtagInput } from './post-hashtag-upsert-with-where-unique-without-hashtag.input'
import { PostHashtagCreateManyHashtagInputEnvelope } from './post-hashtag-create-many-hashtag-input-envelope.input'
import { Prisma } from '@prisma/client'
import { PostHashtagWhereUniqueInput } from './post-hashtag-where-unique.input'
import { PostHashtagUpdateWithWhereUniqueWithoutHashtagInput } from './post-hashtag-update-with-where-unique-without-hashtag.input'
import { PostHashtagUpdateManyWithWhereWithoutHashtagInput } from './post-hashtag-update-many-with-where-without-hashtag.input'
import { PostHashtagScalarWhereInput } from './post-hashtag-scalar-where.input'

@InputType()
export class PostHashtagUncheckedUpdateManyWithoutHashtagNestedInput {
  @Field(() => [PostHashtagCreateWithoutHashtagInput], { nullable: true })
  @Type(() => PostHashtagCreateWithoutHashtagInput)
  create?: Array<PostHashtagCreateWithoutHashtagInput>

  @Field(() => [PostHashtagCreateOrConnectWithoutHashtagInput], { nullable: true })
  @Type(() => PostHashtagCreateOrConnectWithoutHashtagInput)
  connectOrCreate?: Array<PostHashtagCreateOrConnectWithoutHashtagInput>

  @Field(() => [PostHashtagUpsertWithWhereUniqueWithoutHashtagInput], { nullable: true })
  @Type(() => PostHashtagUpsertWithWhereUniqueWithoutHashtagInput)
  upsert?: Array<PostHashtagUpsertWithWhereUniqueWithoutHashtagInput>

  @Field(() => PostHashtagCreateManyHashtagInputEnvelope, { nullable: true })
  @Type(() => PostHashtagCreateManyHashtagInputEnvelope)
  createMany?: PostHashtagCreateManyHashtagInputEnvelope

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

  @Field(() => [PostHashtagUpdateWithWhereUniqueWithoutHashtagInput], { nullable: true })
  @Type(() => PostHashtagUpdateWithWhereUniqueWithoutHashtagInput)
  update?: Array<PostHashtagUpdateWithWhereUniqueWithoutHashtagInput>

  @Field(() => [PostHashtagUpdateManyWithWhereWithoutHashtagInput], { nullable: true })
  @Type(() => PostHashtagUpdateManyWithWhereWithoutHashtagInput)
  updateMany?: Array<PostHashtagUpdateManyWithWhereWithoutHashtagInput>

  @Field(() => [PostHashtagScalarWhereInput], { nullable: true })
  @Type(() => PostHashtagScalarWhereInput)
  deleteMany?: Array<PostHashtagScalarWhereInput>
}
