import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostHashtagScalarWhereInput } from './post-hashtag-scalar-where.input'
import { Type } from 'class-transformer'
import { PostHashtagUpdateManyMutationInput } from './post-hashtag-update-many-mutation.input'

@InputType()
export class PostHashtagUpdateManyWithWhereWithoutPostInput {
  @Field(() => PostHashtagScalarWhereInput, { nullable: false })
  @Type(() => PostHashtagScalarWhereInput)
  where!: PostHashtagScalarWhereInput

  @Field(() => PostHashtagUpdateManyMutationInput, { nullable: false })
  @Type(() => PostHashtagUpdateManyMutationInput)
  data!: PostHashtagUpdateManyMutationInput
}
