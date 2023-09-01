import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaFileWhereInput } from './media-file-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMediaFileArgs {

    @Field(() => MediaFileWhereInput, {nullable:true})
    @Type(() => MediaFileWhereInput)
    where?: MediaFileWhereInput;
}
