import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FollowWhereUniqueInput } from './follow-where-unique.input';
import { Type } from 'class-transformer';
import { FollowCreateInput } from './follow-create.input';
import { FollowUpdateInput } from './follow-update.input';

@ArgsType()
export class UpsertOneFollowArgs {

    @Field(() => FollowWhereUniqueInput, {nullable:false})
    @Type(() => FollowWhereUniqueInput)
    where!: Prisma.AtLeast<FollowWhereUniqueInput, 'id' | 'followerId_followingId'>;

    @Field(() => FollowCreateInput, {nullable:false})
    @Type(() => FollowCreateInput)
    create!: FollowCreateInput;

    @Field(() => FollowUpdateInput, {nullable:false})
    @Type(() => FollowUpdateInput)
    update!: FollowUpdateInput;
}
