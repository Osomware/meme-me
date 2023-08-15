import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostHashtagCreateManyPostInput } from './post-hashtag-create-many-post.input'
import { Type } from 'class-transformer'

@InputType()
export class PostHashtagCreateManyPostInputEnvelope {
  @Field(() => [PostHashtagCreateManyPostInput], { nullable: false })
  @Type(() => PostHashtagCreateManyPostInput)
  data!: Array<PostHashtagCreateManyPostInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
