import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostHashtagWhereUniqueInput } from './post-hashtag-where-unique.input';
import { Type } from 'class-transformer';
import { PostHashtagCreateWithoutHashtagInput } from './post-hashtag-create-without-hashtag.input';

@InputType()
export class PostHashtagCreateOrConnectWithoutHashtagInput {

    @Field(() => PostHashtagWhereUniqueInput, {nullable:false})
    @Type(() => PostHashtagWhereUniqueInput)
    where!: Prisma.AtLeast<PostHashtagWhereUniqueInput, 'id' | 'postId_hashtagId'>;

    @Field(() => PostHashtagCreateWithoutHashtagInput, {nullable:false})
    @Type(() => PostHashtagCreateWithoutHashtagInput)
    create!: PostHashtagCreateWithoutHashtagInput;
}
