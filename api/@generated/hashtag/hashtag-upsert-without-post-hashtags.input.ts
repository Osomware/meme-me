import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HashtagUpdateWithoutPostHashtagsInput } from './hashtag-update-without-post-hashtags.input';
import { Type } from 'class-transformer';
import { HashtagCreateWithoutPostHashtagsInput } from './hashtag-create-without-post-hashtags.input';
import { HashtagWhereInput } from './hashtag-where.input';

@InputType()
export class HashtagUpsertWithoutPostHashtagsInput {

    @Field(() => HashtagUpdateWithoutPostHashtagsInput, {nullable:false})
    @Type(() => HashtagUpdateWithoutPostHashtagsInput)
    update!: HashtagUpdateWithoutPostHashtagsInput;

    @Field(() => HashtagCreateWithoutPostHashtagsInput, {nullable:false})
    @Type(() => HashtagCreateWithoutPostHashtagsInput)
    create!: HashtagCreateWithoutPostHashtagsInput;

    @Field(() => HashtagWhereInput, {nullable:true})
    @Type(() => HashtagWhereInput)
    where?: HashtagWhereInput;
}
