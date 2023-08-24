import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowCreateManyFollowingInput } from './follow-create-many-following.input';
import { Type } from 'class-transformer';

@InputType()
export class FollowCreateManyFollowingInputEnvelope {

    @Field(() => [FollowCreateManyFollowingInput], {nullable:false})
    @Type(() => FollowCreateManyFollowingInput)
    data!: Array<FollowCreateManyFollowingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
