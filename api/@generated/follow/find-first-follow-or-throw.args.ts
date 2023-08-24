import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowWhereInput } from './follow-where.input';
import { Type } from 'class-transformer';
import { FollowOrderByWithRelationInput } from './follow-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FollowWhereUniqueInput } from './follow-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FollowScalarFieldEnum } from './follow-scalar-field.enum';

@ArgsType()
export class FindFirstFollowOrThrowArgs {

    @Field(() => FollowWhereInput, {nullable:true})
    @Type(() => FollowWhereInput)
    where?: FollowWhereInput;

    @Field(() => [FollowOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FollowOrderByWithRelationInput>;

    @Field(() => FollowWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FollowWhereUniqueInput, 'id' | 'followerId_followingId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FollowScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FollowScalarFieldEnum>;
}
