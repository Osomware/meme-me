import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MediaFileUpdateManyWithoutPostNestedInput } from '../media-file/media-file-update-many-without-post-nested.input';
import { UserUpdateOneRequiredWithoutPostsNestedInput } from '../user/user-update-one-required-without-posts-nested.input';
import { PostHashtagUpdateManyWithoutPostNestedInput } from '../post-hashtag/post-hashtag-update-many-without-post-nested.input';
import { CommentUpdateManyWithoutPostNestedInput } from '../comment/comment-update-many-without-post-nested.input';

@InputType()
export class PostUpdateWithoutLikesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHideLikeAndCount?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isTurnOffComment?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MediaFileUpdateManyWithoutPostNestedInput, {nullable:true})
    mediaFiles?: MediaFileUpdateManyWithoutPostNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutPostsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutPostsNestedInput;

    @Field(() => PostHashtagUpdateManyWithoutPostNestedInput, {nullable:true})
    postHashtags?: PostHashtagUpdateManyWithoutPostNestedInput;

    @Field(() => CommentUpdateManyWithoutPostNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutPostNestedInput;
}
