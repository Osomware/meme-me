import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowUpdateManyMutationInput } from './follow-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FollowWhereInput } from './follow-where.input';

@ArgsType()
export class UpdateManyFollowArgs {

    @Field(() => FollowUpdateManyMutationInput, {nullable:false})
    @Type(() => FollowUpdateManyMutationInput)
    data!: FollowUpdateManyMutationInput;

    @Field(() => FollowWhereInput, {nullable:true})
    @Type(() => FollowWhereInput)
    where?: FollowWhereInput;
}
