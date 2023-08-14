import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input'
import { Type } from 'class-transformer'
import { HashtagUpdateWithoutPostsInput } from './hashtag-update-without-posts.input'

@InputType()
export class HashtagUpdateWithWhereUniqueWithoutPostsInput {
  @Field(() => HashtagWhereUniqueInput, { nullable: false })
  @Type(() => HashtagWhereUniqueInput)
  where!: Prisma.AtLeast<HashtagWhereUniqueInput, 'id' | 'tag'>

  @Field(() => HashtagUpdateWithoutPostsInput, { nullable: false })
  @Type(() => HashtagUpdateWithoutPostsInput)
  data!: HashtagUpdateWithoutPostsInput
}
