import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PostHashtagCreateManyInput } from './post-hashtag-create-many.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateManyPostHashtagArgs {
  @Field(() => [PostHashtagCreateManyInput], { nullable: false })
  @Type(() => PostHashtagCreateManyInput)
  data!: Array<PostHashtagCreateManyInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
