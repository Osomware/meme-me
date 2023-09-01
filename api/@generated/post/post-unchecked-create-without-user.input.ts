import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MediaFileUncheckedCreateNestedManyWithoutPostInput } from '../media-file/media-file-unchecked-create-nested-many-without-post.input';
import { PostHashtagUncheckedCreateNestedManyWithoutPostInput } from '../post-hashtag/post-hashtag-unchecked-create-nested-many-without-post.input';

@InputType()
export class PostUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Boolean, {nullable:true})
    isHideLikeAndCount?: boolean;

    @Field(() => Boolean, {nullable:true})
    isTurnOffComment?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MediaFileUncheckedCreateNestedManyWithoutPostInput, {nullable:true})
    mediaFiles?: MediaFileUncheckedCreateNestedManyWithoutPostInput;

    @Field(() => PostHashtagUncheckedCreateNestedManyWithoutPostInput, {nullable:true})
    postHashtags?: PostHashtagUncheckedCreateNestedManyWithoutPostInput;
}
