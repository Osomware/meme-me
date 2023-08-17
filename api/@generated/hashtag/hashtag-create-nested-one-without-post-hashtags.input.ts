import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HashtagCreateWithoutPostHashtagsInput } from './hashtag-create-without-post-hashtags.input';
import { Type } from 'class-transformer';
import { HashtagCreateOrConnectWithoutPostHashtagsInput } from './hashtag-create-or-connect-without-post-hashtags.input';
import { Prisma } from '@prisma/client';
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input';

@InputType()
export class HashtagCreateNestedOneWithoutPostHashtagsInput {

    @Field(() => HashtagCreateWithoutPostHashtagsInput, {nullable:true})
    @Type(() => HashtagCreateWithoutPostHashtagsInput)
    create?: HashtagCreateWithoutPostHashtagsInput;

    @Field(() => HashtagCreateOrConnectWithoutPostHashtagsInput, {nullable:true})
    @Type(() => HashtagCreateOrConnectWithoutPostHashtagsInput)
    connectOrCreate?: HashtagCreateOrConnectWithoutPostHashtagsInput;

    @Field(() => HashtagWhereUniqueInput, {nullable:true})
    @Type(() => HashtagWhereUniqueInput)
    connect?: Prisma.AtLeast<HashtagWhereUniqueInput, 'id' | 'tag'>;
}
