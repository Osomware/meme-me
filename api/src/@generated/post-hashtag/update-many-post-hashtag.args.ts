import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PostHashtagUpdateManyMutationInput } from './post-hashtag-update-many-mutation.input'
import { Type } from 'class-transformer'
import { PostHashtagWhereInput } from './post-hashtag-where.input'

@ArgsType()
export class UpdateManyPostHashtagArgs {
  @Field(() => PostHashtagUpdateManyMutationInput, { nullable: false })
  @Type(() => PostHashtagUpdateManyMutationInput)
  data!: PostHashtagUpdateManyMutationInput

  @Field(() => PostHashtagWhereInput, { nullable: true })
  @Type(() => PostHashtagWhereInput)
  where?: PostHashtagWhereInput
}
