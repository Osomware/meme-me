import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowCreateManyFollowerInput } from './follow-create-many-follower.input';
import { Type } from 'class-transformer';

@InputType()
export class FollowCreateManyFollowerInputEnvelope {

    @Field(() => [FollowCreateManyFollowerInput], {nullable:false})
    @Type(() => FollowCreateManyFollowerInput)
    data!: Array<FollowCreateManyFollowerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
