import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostHashtagWhereUniqueInput } from './post-hashtag-where-unique.input';
import { Type } from 'class-transformer';
import { PostHashtagUpdateWithoutPostInput } from './post-hashtag-update-without-post.input';
import { PostHashtagCreateWithoutPostInput } from './post-hashtag-create-without-post.input';

@InputType()
export class PostHashtagUpsertWithWhereUniqueWithoutPostInput {

    @Field(() => PostHashtagWhereUniqueInput, {nullable:false})
    @Type(() => PostHashtagWhereUniqueInput)
    where!: Prisma.AtLeast<PostHashtagWhereUniqueInput, 'id' | 'postId_hashtagId'>;

    @Field(() => PostHashtagUpdateWithoutPostInput, {nullable:false})
    @Type(() => PostHashtagUpdateWithoutPostInput)
    update!: PostHashtagUpdateWithoutPostInput;

    @Field(() => PostHashtagCreateWithoutPostInput, {nullable:false})
    @Type(() => PostHashtagCreateWithoutPostInput)
    create!: PostHashtagCreateWithoutPostInput;
}
