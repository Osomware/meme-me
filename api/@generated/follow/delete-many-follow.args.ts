import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowWhereInput } from './follow-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFollowArgs {

    @Field(() => FollowWhereInput, {nullable:true})
    @Type(() => FollowWhereInput)
    where?: FollowWhereInput;
}
