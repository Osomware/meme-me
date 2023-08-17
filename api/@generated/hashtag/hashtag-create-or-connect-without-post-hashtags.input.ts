import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input';
import { Type } from 'class-transformer';
import { HashtagCreateWithoutPostHashtagsInput } from './hashtag-create-without-post-hashtags.input';

@InputType()
export class HashtagCreateOrConnectWithoutPostHashtagsInput {

    @Field(() => HashtagWhereUniqueInput, {nullable:false})
    @Type(() => HashtagWhereUniqueInput)
    where!: Prisma.AtLeast<HashtagWhereUniqueInput, 'id' | 'tag'>;

    @Field(() => HashtagCreateWithoutPostHashtagsInput, {nullable:false})
    @Type(() => HashtagCreateWithoutPostHashtagsInput)
    create!: HashtagCreateWithoutPostHashtagsInput;
}
