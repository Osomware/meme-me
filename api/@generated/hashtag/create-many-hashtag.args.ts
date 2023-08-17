import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HashtagCreateManyInput } from './hashtag-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHashtagArgs {

    @Field(() => [HashtagCreateManyInput], {nullable:false})
    @Type(() => HashtagCreateManyInput)
    data!: Array<HashtagCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
