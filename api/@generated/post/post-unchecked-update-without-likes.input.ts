import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MediaFileUncheckedUpdateManyWithoutPostNestedInput } from '../media-file/media-file-unchecked-update-many-without-post-nested.input';
import { PostHashtagUncheckedUpdateManyWithoutPostNestedInput } from '../post-hashtag/post-hashtag-unchecked-update-many-without-post-nested.input';

@InputType()
export class PostUncheckedUpdateWithoutLikesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHideLikeAndCount?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isTurnOffComment?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MediaFileUncheckedUpdateManyWithoutPostNestedInput, {nullable:true})
    mediaFiles?: MediaFileUncheckedUpdateManyWithoutPostNestedInput;

    @Field(() => PostHashtagUncheckedUpdateManyWithoutPostNestedInput, {nullable:true})
    postHashtags?: PostHashtagUncheckedUpdateManyWithoutPostNestedInput;
}