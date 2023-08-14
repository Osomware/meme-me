import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input'
import { PostUpdatemediaUrlsInput } from './post-updatemedia-urls.input'
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { HashtagUpdateManyWithoutPostsNestedInput } from '../hashtag/hashtag-update-many-without-posts-nested.input'

@InputType()
export class PostUpdateWithoutUserInput {
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  title?: NullableStringFieldUpdateOperationsInput

  @Field(() => PostUpdatemediaUrlsInput, { nullable: true })
  mediaUrls?: PostUpdatemediaUrlsInput

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isHideLikeAndCount?: BoolFieldUpdateOperationsInput

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isTurnOffComment?: BoolFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => HashtagUpdateManyWithoutPostsNestedInput, { nullable: true })
  hashtags?: HashtagUpdateManyWithoutPostsNestedInput
}
