import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input'
import { Type } from 'class-transformer'
import { HashtagCreateInput } from './hashtag-create.input'
import { HashtagUpdateInput } from './hashtag-update.input'

@ArgsType()
export class UpsertOneHashtagArgs {
  @Field(() => HashtagWhereUniqueInput, { nullable: false })
  @Type(() => HashtagWhereUniqueInput)
  where!: Prisma.AtLeast<HashtagWhereUniqueInput, 'id' | 'tag'>

  @Field(() => HashtagCreateInput, { nullable: false })
  @Type(() => HashtagCreateInput)
  create!: HashtagCreateInput

  @Field(() => HashtagUpdateInput, { nullable: false })
  @Type(() => HashtagUpdateInput)
  update!: HashtagUpdateInput
}
