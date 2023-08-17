import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFilter } from '../prisma/int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class HashtagScalarWhereInput {
  @Field(() => [HashtagScalarWhereInput], { nullable: true })
  AND?: Array<HashtagScalarWhereInput>

  @Field(() => [HashtagScalarWhereInput], { nullable: true })
  OR?: Array<HashtagScalarWhereInput>

  @Field(() => [HashtagScalarWhereInput], { nullable: true })
  NOT?: Array<HashtagScalarWhereInput>

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  tag?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter
}
