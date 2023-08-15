import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { PostHashtagUncheckedUpdateManyWithoutHashtagNestedInput } from '../post-hashtag/post-hashtag-unchecked-update-many-without-hashtag-nested.input'

@InputType()
export class HashtagUncheckedUpdateInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  tag?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => PostHashtagUncheckedUpdateManyWithoutHashtagNestedInput, { nullable: true })
  postHashtags?: PostHashtagUncheckedUpdateManyWithoutHashtagNestedInput
}
