import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedOneWithoutMediaFilesInput } from '../post/post-create-nested-one-without-media-files.input';

@InputType()
export class MediaFileCreateInput {

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PostCreateNestedOneWithoutMediaFilesInput, {nullable:false})
    post!: PostCreateNestedOneWithoutMediaFilesInput;
}
