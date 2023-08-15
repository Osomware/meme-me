import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostWhereInput } from './post-where.input'
import { Type } from 'class-transformer'
import { PostUpdateWithoutPostHashtagsInput } from './post-update-without-post-hashtags.input'

@InputType()
export class PostUpdateToOneWithWhereWithoutPostHashtagsInput {
  @Field(() => PostWhereInput, { nullable: true })
  @Type(() => PostWhereInput)
  where?: PostWhereInput

  @Field(() => PostUpdateWithoutPostHashtagsInput, { nullable: false })
  @Type(() => PostUpdateWithoutPostHashtagsInput)
  data!: PostUpdateWithoutPostHashtagsInput
}
