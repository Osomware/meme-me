import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { HashtagWhereInput } from './hashtag-where.input'
import { Type } from 'class-transformer'
import { HashtagOrderByWithRelationInput } from './hashtag-order-by-with-relation.input'
import { Prisma } from '@prisma/client'
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input'
import { Int } from '@nestjs/graphql'
import { HashtagScalarFieldEnum } from './hashtag-scalar-field.enum'

@ArgsType()
export class FindManyHashtagArgs {
  @Field(() => HashtagWhereInput, { nullable: true })
  @Type(() => HashtagWhereInput)
  where?: HashtagWhereInput

  @Field(() => [HashtagOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<HashtagOrderByWithRelationInput>

  @Field(() => HashtagWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<HashtagWhereUniqueInput, 'id' | 'tag'>

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [HashtagScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof HashtagScalarFieldEnum>
}
