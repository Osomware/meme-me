import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HashtagScalarWhereInput } from './hashtag-scalar-where.input'
import { Type } from 'class-transformer'
import { HashtagUpdateManyMutationInput } from './hashtag-update-many-mutation.input'

@InputType()
export class HashtagUpdateManyWithWhereWithoutPostsInput {
  @Field(() => HashtagScalarWhereInput, { nullable: false })
  @Type(() => HashtagScalarWhereInput)
  where!: HashtagScalarWhereInput

  @Field(() => HashtagUpdateManyMutationInput, { nullable: false })
  @Type(() => HashtagUpdateManyMutationInput)
  data!: HashtagUpdateManyMutationInput
}
