import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostUpdateWithoutPostHashtagsInput } from './post-update-without-post-hashtags.input'
import { Type } from 'class-transformer'
import { PostCreateWithoutPostHashtagsInput } from './post-create-without-post-hashtags.input'
import { PostWhereInput } from './post-where.input'

@InputType()
export class PostUpsertWithoutPostHashtagsInput {
  @Field(() => PostUpdateWithoutPostHashtagsInput, { nullable: false })
  @Type(() => PostUpdateWithoutPostHashtagsInput)
  update!: PostUpdateWithoutPostHashtagsInput

  @Field(() => PostCreateWithoutPostHashtagsInput, { nullable: false })
  @Type(() => PostCreateWithoutPostHashtagsInput)
  create!: PostCreateWithoutPostHashtagsInput

  @Field(() => PostWhereInput, { nullable: true })
  @Type(() => PostWhereInput)
  where?: PostWhereInput
}
