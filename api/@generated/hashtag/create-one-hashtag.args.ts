import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HashtagCreateInput } from './hashtag-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHashtagArgs {

    @Field(() => HashtagCreateInput, {nullable:false})
    @Type(() => HashtagCreateInput)
    data!: HashtagCreateInput;
}
