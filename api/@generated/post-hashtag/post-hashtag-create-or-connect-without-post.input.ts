import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostHashtagWhereUniqueInput } from './post-hashtag-where-unique.input';
import { Type } from 'class-transformer';
import { PostHashtagCreateWithoutPostInput } from './post-hashtag-create-without-post.input';

@InputType()
export class PostHashtagCreateOrConnectWithoutPostInput {

    @Field(() => PostHashtagWhereUniqueInput, {nullable:false})
    @Type(() => PostHashtagWhereUniqueInput)
    where!: Prisma.AtLeast<PostHashtagWhereUniqueInput, 'id' | 'postId_hashtagId'>;

    @Field(() => PostHashtagCreateWithoutPostInput, {nullable:false})
    @Type(() => PostHashtagCreateWithoutPostInput)
    create!: PostHashtagCreateWithoutPostInput;
}
