import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutLikesInput } from './post-create-without-likes.input';

@InputType()
export class PostCreateOrConnectWithoutLikesInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostCreateWithoutLikesInput, {nullable:false})
    @Type(() => PostCreateWithoutLikesInput)
    create!: PostCreateWithoutLikesInput;
}
