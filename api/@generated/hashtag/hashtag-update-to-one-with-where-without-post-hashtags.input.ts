import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HashtagWhereInput } from './hashtag-where.input';
import { Type } from 'class-transformer';
import { HashtagUpdateWithoutPostHashtagsInput } from './hashtag-update-without-post-hashtags.input';

@InputType()
export class HashtagUpdateToOneWithWhereWithoutPostHashtagsInput {

    @Field(() => HashtagWhereInput, {nullable:true})
    @Type(() => HashtagWhereInput)
    where?: HashtagWhereInput;

    @Field(() => HashtagUpdateWithoutPostHashtagsInput, {nullable:false})
    @Type(() => HashtagUpdateWithoutPostHashtagsInput)
    data!: HashtagUpdateWithoutPostHashtagsInput;
}
