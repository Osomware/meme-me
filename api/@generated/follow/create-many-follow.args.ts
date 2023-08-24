import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowCreateManyInput } from './follow-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFollowArgs {

    @Field(() => [FollowCreateManyInput], {nullable:false})
    @Type(() => FollowCreateManyInput)
    data!: Array<FollowCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
