import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { HashtagUpdateInput } from './hashtag-update.input'
import { Type } from 'class-transformer'
import { Prisma } from '@prisma/client'
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input'

@ArgsType()
export class UpdateOneHashtagArgs {
  @Field(() => HashtagUpdateInput, { nullable: false })
  @Type(() => HashtagUpdateInput)
  data!: HashtagUpdateInput

  @Field(() => HashtagWhereUniqueInput, { nullable: false })
  @Type(() => HashtagWhereUniqueInput)
  where!: Prisma.AtLeast<HashtagWhereUniqueInput, 'id' | 'tag'>
}
