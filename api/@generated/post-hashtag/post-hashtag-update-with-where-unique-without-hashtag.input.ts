import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostHashtagWhereUniqueInput } from './post-hashtag-where-unique.input';
import { Type } from 'class-transformer';
import { PostHashtagUpdateWithoutHashtagInput } from './post-hashtag-update-without-hashtag.input';

@InputType()
export class PostHashtagUpdateWithWhereUniqueWithoutHashtagInput {

    @Field(() => PostHashtagWhereUniqueInput, {nullable:false})
    @Type(() => PostHashtagWhereUniqueInput)
    where!: Prisma.AtLeast<PostHashtagWhereUniqueInput, 'id' | 'postId_hashtagId'>;

    @Field(() => PostHashtagUpdateWithoutHashtagInput, {nullable:false})
    @Type(() => PostHashtagUpdateWithoutHashtagInput)
    data!: PostHashtagUpdateWithoutHashtagInput;
}
