import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HashtagCreateWithoutPostsInput } from './hashtag-create-without-posts.input'
import { Type } from 'class-transformer'
import { HashtagCreateOrConnectWithoutPostsInput } from './hashtag-create-or-connect-without-posts.input'
import { Prisma } from '@prisma/client'
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input'

@InputType()
export class HashtagCreateNestedManyWithoutPostsInput {
  @Field(() => [HashtagCreateWithoutPostsInput], { nullable: true })
  @Type(() => HashtagCreateWithoutPostsInput)
  create?: Array<HashtagCreateWithoutPostsInput>

  @Field(() => [HashtagCreateOrConnectWithoutPostsInput], { nullable: true })
  @Type(() => HashtagCreateOrConnectWithoutPostsInput)
  connectOrCreate?: Array<HashtagCreateOrConnectWithoutPostsInput>

  @Field(() => [HashtagWhereUniqueInput], { nullable: true })
  @Type(() => HashtagWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<HashtagWhereUniqueInput, 'id' | 'tag'>>
}
