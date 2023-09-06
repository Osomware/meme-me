import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeCreateWithoutPostInput } from './like-create-without-post.input';

@InputType()
export class LikeCreateOrConnectWithoutPostInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId'>;

    @Field(() => LikeCreateWithoutPostInput, {nullable:false})
    @Type(() => LikeCreateWithoutPostInput)
    create!: LikeCreateWithoutPostInput;
}
