import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PostHashtagUncheckedCreateNestedManyWithoutHashtagInput } from '../post-hashtag/post-hashtag-unchecked-create-nested-many-without-hashtag.input';

@InputType()
export class HashtagUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    tag!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PostHashtagUncheckedCreateNestedManyWithoutHashtagInput, {nullable:true})
    postHashtags?: PostHashtagUncheckedCreateNestedManyWithoutHashtagInput;
}
