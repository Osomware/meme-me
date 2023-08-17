import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HashtagCreateWithoutPostHashtagsInput } from './hashtag-create-without-post-hashtags.input';
import { Type } from 'class-transformer';
import { HashtagCreateOrConnectWithoutPostHashtagsInput } from './hashtag-create-or-connect-without-post-hashtags.input';
import { HashtagUpsertWithoutPostHashtagsInput } from './hashtag-upsert-without-post-hashtags.input';
import { Prisma } from '@prisma/client';
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input';
import { HashtagUpdateToOneWithWhereWithoutPostHashtagsInput } from './hashtag-update-to-one-with-where-without-post-hashtags.input';

@InputType()
export class HashtagUpdateOneRequiredWithoutPostHashtagsNestedInput {

    @Field(() => HashtagCreateWithoutPostHashtagsInput, {nullable:true})
    @Type(() => HashtagCreateWithoutPostHashtagsInput)
    create?: HashtagCreateWithoutPostHashtagsInput;

    @Field(() => HashtagCreateOrConnectWithoutPostHashtagsInput, {nullable:true})
    @Type(() => HashtagCreateOrConnectWithoutPostHashtagsInput)
    connectOrCreate?: HashtagCreateOrConnectWithoutPostHashtagsInput;

    @Field(() => HashtagUpsertWithoutPostHashtagsInput, {nullable:true})
    @Type(() => HashtagUpsertWithoutPostHashtagsInput)
    upsert?: HashtagUpsertWithoutPostHashtagsInput;

    @Field(() => HashtagWhereUniqueInput, {nullable:true})
    @Type(() => HashtagWhereUniqueInput)
    connect?: Prisma.AtLeast<HashtagWhereUniqueInput, 'id' | 'tag'>;

    @Field(() => HashtagUpdateToOneWithWhereWithoutPostHashtagsInput, {nullable:true})
    @Type(() => HashtagUpdateToOneWithWhereWithoutPostHashtagsInput)
    update?: HashtagUpdateToOneWithWhereWithoutPostHashtagsInput;
}
