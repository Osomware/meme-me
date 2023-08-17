import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostHashtagCreateInput } from './post-hashtag-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePostHashtagArgs {

    @Field(() => PostHashtagCreateInput, {nullable:false})
    @Type(() => PostHashtagCreateInput)
    data!: PostHashtagCreateInput;
}
