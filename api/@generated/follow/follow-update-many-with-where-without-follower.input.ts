import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowScalarWhereInput } from './follow-scalar-where.input';
import { Type } from 'class-transformer';
import { FollowUpdateManyMutationInput } from './follow-update-many-mutation.input';

@InputType()
export class FollowUpdateManyWithWhereWithoutFollowerInput {

    @Field(() => FollowScalarWhereInput, {nullable:false})
    @Type(() => FollowScalarWhereInput)
    where!: FollowScalarWhereInput;

    @Field(() => FollowUpdateManyMutationInput, {nullable:false})
    @Type(() => FollowUpdateManyMutationInput)
    data!: FollowUpdateManyMutationInput;
}
