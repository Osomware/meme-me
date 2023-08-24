import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowUpdateInput } from './follow-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FollowWhereUniqueInput } from './follow-where-unique.input';

@ArgsType()
export class UpdateOneFollowArgs {

    @Field(() => FollowUpdateInput, {nullable:false})
    @Type(() => FollowUpdateInput)
    data!: FollowUpdateInput;

    @Field(() => FollowWhereUniqueInput, {nullable:false})
    @Type(() => FollowWhereUniqueInput)
    where!: Prisma.AtLeast<FollowWhereUniqueInput, 'id' | 'followerId_followingId'>;
}
