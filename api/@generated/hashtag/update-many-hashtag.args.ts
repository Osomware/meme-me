import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HashtagUpdateManyMutationInput } from './hashtag-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HashtagWhereInput } from './hashtag-where.input';

@ArgsType()
export class UpdateManyHashtagArgs {

    @Field(() => HashtagUpdateManyMutationInput, {nullable:false})
    @Type(() => HashtagUpdateManyMutationInput)
    data!: HashtagUpdateManyMutationInput;

    @Field(() => HashtagWhereInput, {nullable:true})
    @Type(() => HashtagWhereInput)
    where?: HashtagWhereInput;
}
