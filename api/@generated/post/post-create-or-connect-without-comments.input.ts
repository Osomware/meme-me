import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutCommentsInput } from './post-create-without-comments.input';

@InputType()
export class PostCreateOrConnectWithoutCommentsInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostCreateWithoutCommentsInput, {nullable:false})
    @Type(() => PostCreateWithoutCommentsInput)
    create!: PostCreateWithoutCommentsInput;
}
