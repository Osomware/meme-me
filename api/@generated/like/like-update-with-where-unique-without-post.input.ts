import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeUpdateWithoutPostInput } from './like-update-without-post.input';

@InputType()
export class LikeUpdateWithWhereUniqueWithoutPostInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId'>;

    @Field(() => LikeUpdateWithoutPostInput, {nullable:false})
    @Type(() => LikeUpdateWithoutPostInput)
    data!: LikeUpdateWithoutPostInput;
}
