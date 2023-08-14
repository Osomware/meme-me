import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HashtagCreateWithoutPostsInput } from './hashtag-create-without-posts.input'
import { Type } from 'class-transformer'
import { HashtagCreateOrConnectWithoutPostsInput } from './hashtag-create-or-connect-without-posts.input'
import { HashtagUpsertWithWhereUniqueWithoutPostsInput } from './hashtag-upsert-with-where-unique-without-posts.input'
import { Prisma } from '@prisma/client'
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input'
import { HashtagUpdateWithWhereUniqueWithoutPostsInput } from './hashtag-update-with-where-unique-without-posts.input'
import { HashtagUpdateManyWithWhereWithoutPostsInput } from './hashtag-update-many-with-where-without-posts.input'
import { HashtagScalarWhereInput } from './hashtag-scalar-where.input'

@InputType()
export class HashtagUpdateManyWithoutPostsNestedInput {
  @Field(() => [HashtagCreateWithoutPostsInput], { nullable: true })
  @Type(() => HashtagCreateWithoutPostsInput)
  create?: Array<HashtagCreateWithoutPostsInput>

  @Field(() => [HashtagCreateOrConnectWithoutPostsInput], { nullable: true })
  @Type(() => HashtagCreateOrConnectWithoutPostsInput)
  connectOrCreate?: Array<HashtagCreateOrConnectWithoutPostsInput>

  @Field(() => [HashtagUpsertWithWhereUniqueWithoutPostsInput], { nullable: true })
  @Type(() => HashtagUpsertWithWhereUniqueWithoutPostsInput)
  upsert?: Array<HashtagUpsertWithWhereUniqueWithoutPostsInput>

  @Field(() => [HashtagWhereUniqueInput], { nullable: true })
  @Type(() => HashtagWhereUniqueInput)
  set?: Array<Prisma.AtLeast<HashtagWhereUniqueInput, 'id' | 'tag'>>

  @Field(() => [HashtagWhereUniqueInput], { nullable: true })
  @Type(() => HashtagWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<HashtagWhereUniqueInput, 'id' | 'tag'>>

  @Field(() => [HashtagWhereUniqueInput], { nullable: true })
  @Type(() => HashtagWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<HashtagWhereUniqueInput, 'id' | 'tag'>>

  @Field(() => [HashtagWhereUniqueInput], { nullable: true })
  @Type(() => HashtagWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<HashtagWhereUniqueInput, 'id' | 'tag'>>

  @Field(() => [HashtagUpdateWithWhereUniqueWithoutPostsInput], { nullable: true })
  @Type(() => HashtagUpdateWithWhereUniqueWithoutPostsInput)
  update?: Array<HashtagUpdateWithWhereUniqueWithoutPostsInput>

  @Field(() => [HashtagUpdateManyWithWhereWithoutPostsInput], { nullable: true })
  @Type(() => HashtagUpdateManyWithWhereWithoutPostsInput)
  updateMany?: Array<HashtagUpdateManyWithWhereWithoutPostsInput>

  @Field(() => [HashtagScalarWhereInput], { nullable: true })
  @Type(() => HashtagScalarWhereInput)
  deleteMany?: Array<HashtagScalarWhereInput>
}
