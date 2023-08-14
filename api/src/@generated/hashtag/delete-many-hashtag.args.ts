import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { HashtagWhereInput } from './hashtag-where.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteManyHashtagArgs {
  @Field(() => HashtagWhereInput, { nullable: true })
  @Type(() => HashtagWhereInput)
  where?: HashtagWhereInput
}
