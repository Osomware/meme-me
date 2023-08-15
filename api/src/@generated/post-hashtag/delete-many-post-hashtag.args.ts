import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PostHashtagWhereInput } from './post-hashtag-where.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteManyPostHashtagArgs {
  @Field(() => PostHashtagWhereInput, { nullable: true })
  @Type(() => PostHashtagWhereInput)
  where?: PostHashtagWhereInput
}
