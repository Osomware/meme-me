import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaFileWhereInput } from './media-file-where.input';

@InputType()
export class MediaFileListRelationFilter {

    @Field(() => MediaFileWhereInput, {nullable:true})
    every?: MediaFileWhereInput;

    @Field(() => MediaFileWhereInput, {nullable:true})
    some?: MediaFileWhereInput;

    @Field(() => MediaFileWhereInput, {nullable:true})
    none?: MediaFileWhereInput;
}
