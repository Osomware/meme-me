import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowCreateInput } from './follow-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFollowArgs {

    @Field(() => FollowCreateInput, {nullable:false})
    @Type(() => FollowCreateInput)
    data!: FollowCreateInput;
}
