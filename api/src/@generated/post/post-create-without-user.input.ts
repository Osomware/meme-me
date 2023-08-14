import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostCreatemediaUrlsInput } from './post-createmedia-urls.input'
import { HashtagCreateNestedManyWithoutPostsInput } from '../hashtag/hashtag-create-nested-many-without-posts.input'

@InputType()
export class PostCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  title?: string

  @Field(() => PostCreatemediaUrlsInput, { nullable: true })
  mediaUrls?: PostCreatemediaUrlsInput

  @Field(() => Boolean, { nullable: true })
  isHideLikeAndCount?: boolean

  @Field(() => Boolean, { nullable: true })
  isTurnOffComment?: boolean

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => HashtagCreateNestedManyWithoutPostsInput, { nullable: true })
  hashtags?: HashtagCreateNestedManyWithoutPostsInput
}
