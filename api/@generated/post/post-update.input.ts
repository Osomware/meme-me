import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PostUpdatemediaUrlsInput } from './post-updatemedia-urls.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutPostsNestedInput } from '../user/user-update-one-required-without-posts-nested.input';
import { PostHashtagUpdateManyWithoutPostNestedInput } from '../post-hashtag/post-hashtag-update-many-without-post-nested.input';

@InputType()
export class PostUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: NullableStringFieldUpdateOperationsInput;

    @Field(() => PostUpdatemediaUrlsInput, {nullable:true})
    mediaUrls?: PostUpdatemediaUrlsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHideLikeAndCount?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isTurnOffComment?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutPostsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutPostsNestedInput;

    @Field(() => PostHashtagUpdateManyWithoutPostNestedInput, {nullable:true})
    postHashtags?: PostHashtagUpdateManyWithoutPostNestedInput;
}
