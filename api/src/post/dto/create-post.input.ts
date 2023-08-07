import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

import { PostCreatemediaUrlsInput } from '~/@generated/post/post-createmedia-urls.input'
@InputType()
export class CreatePostInput {
  @Field(() => String, { nullable: true })
  title?: string

  @Field(() => PostCreatemediaUrlsInput, { nullable: true })
  mediaUrls?: PostCreatemediaUrlsInput
}
