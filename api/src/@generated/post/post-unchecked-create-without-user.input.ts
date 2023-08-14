import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { PostCreatemediaUrlsInput } from './post-createmedia-urls.input'
import { HashtagUncheckedCreateNestedManyWithoutPostsInput } from '../hashtag/hashtag-unchecked-create-nested-many-without-posts.input'

@InputType()
export class PostUncheckedCreateWithoutUserInput {
  @Field(() => Int, { nullable: true })
  id?: number

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

  @Field(() => HashtagUncheckedCreateNestedManyWithoutPostsInput, { nullable: true })
  hashtags?: HashtagUncheckedCreateNestedManyWithoutPostsInput
}
