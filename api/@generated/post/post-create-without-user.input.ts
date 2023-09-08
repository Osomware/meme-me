import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaFileCreateNestedManyWithoutPostInput } from '../media-file/media-file-create-nested-many-without-post.input';
import { PostHashtagCreateNestedManyWithoutPostInput } from '../post-hashtag/post-hashtag-create-nested-many-without-post.input';
import { LikeCreateNestedManyWithoutPostInput } from '../like/like-create-nested-many-without-post.input';
import { CommentCreateNestedManyWithoutPostInput } from '../comment/comment-create-nested-many-without-post.input';

@InputType()
export class PostCreateWithoutUserInput {

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

    @Field(() => MediaFileCreateNestedManyWithoutPostInput, {nullable:true})
    mediaFiles?: MediaFileCreateNestedManyWithoutPostInput;

    @Field(() => PostHashtagCreateNestedManyWithoutPostInput, {nullable:true})
    postHashtags?: PostHashtagCreateNestedManyWithoutPostInput;

    @Field(() => LikeCreateNestedManyWithoutPostInput, {nullable:true})
    likes?: LikeCreateNestedManyWithoutPostInput;

    @Field(() => CommentCreateNestedManyWithoutPostInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutPostInput;
}
