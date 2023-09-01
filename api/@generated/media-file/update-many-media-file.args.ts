import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaFileUpdateManyMutationInput } from './media-file-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MediaFileWhereInput } from './media-file-where.input';

@ArgsType()
export class UpdateManyMediaFileArgs {

    @Field(() => MediaFileUpdateManyMutationInput, {nullable:false})
    @Type(() => MediaFileUpdateManyMutationInput)
    data!: MediaFileUpdateManyMutationInput;

    @Field(() => MediaFileWhereInput, {nullable:true})
    @Type(() => MediaFileWhereInput)
    where?: MediaFileWhereInput;
}
