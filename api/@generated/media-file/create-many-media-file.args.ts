import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaFileCreateManyInput } from './media-file-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMediaFileArgs {

    @Field(() => [MediaFileCreateManyInput], {nullable:false})
    @Type(() => MediaFileCreateManyInput)
    data!: Array<MediaFileCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
