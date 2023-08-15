import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostCreatemediaUrlsInput } from './post-createmedia-urls.input'
import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input'

@InputType()
export class PostCreateWithoutPostHashtagsInput {
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

  @Field(() => UserCreateNestedOneWithoutPostsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutPostsInput
}
