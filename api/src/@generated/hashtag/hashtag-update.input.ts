import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { PostHashtagUpdateManyWithoutHashtagNestedInput } from '../post-hashtag/post-hashtag-update-many-without-hashtag-nested.input'

@InputType()
export class HashtagUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  tag?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => PostHashtagUpdateManyWithoutHashtagNestedInput, { nullable: true })
  postHashtags?: PostHashtagUpdateManyWithoutHashtagNestedInput
}
