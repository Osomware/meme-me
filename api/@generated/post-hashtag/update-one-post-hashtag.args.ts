import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostHashtagUpdateInput } from './post-hashtag-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PostHashtagWhereUniqueInput } from './post-hashtag-where-unique.input';

@ArgsType()
export class UpdateOnePostHashtagArgs {

    @Field(() => PostHashtagUpdateInput, {nullable:false})
    @Type(() => PostHashtagUpdateInput)
    data!: PostHashtagUpdateInput;

    @Field(() => PostHashtagWhereUniqueInput, {nullable:false})
    @Type(() => PostHashtagWhereUniqueInput)
    where!: Prisma.AtLeast<PostHashtagWhereUniqueInput, 'id' | 'postId_hashtagId'>;
}
