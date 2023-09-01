import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaFileCreateInput } from './media-file-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMediaFileArgs {

    @Field(() => MediaFileCreateInput, {nullable:false})
    @Type(() => MediaFileCreateInput)
    data!: MediaFileCreateInput;
}
