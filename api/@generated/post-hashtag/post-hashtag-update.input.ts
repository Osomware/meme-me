import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PostUpdateOneRequiredWithoutPostHashtagsNestedInput } from '../post/post-update-one-required-without-post-hashtags-nested.input';
import { HashtagUpdateOneRequiredWithoutPostHashtagsNestedInput } from '../hashtag/hashtag-update-one-required-without-post-hashtags-nested.input';

@InputType()
export class PostHashtagUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PostUpdateOneRequiredWithoutPostHashtagsNestedInput, {nullable:true})
    post?: PostUpdateOneRequiredWithoutPostHashtagsNestedInput;

    @Field(() => HashtagUpdateOneRequiredWithoutPostHashtagsNestedInput, {nullable:true})
    hashtag?: HashtagUpdateOneRequiredWithoutPostHashtagsNestedInput;
}
