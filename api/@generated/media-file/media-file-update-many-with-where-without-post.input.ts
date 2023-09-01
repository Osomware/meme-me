import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaFileScalarWhereInput } from './media-file-scalar-where.input';
import { Type } from 'class-transformer';
import { MediaFileUpdateManyMutationInput } from './media-file-update-many-mutation.input';

@InputType()
export class MediaFileUpdateManyWithWhereWithoutPostInput {

    @Field(() => MediaFileScalarWhereInput, {nullable:false})
    @Type(() => MediaFileScalarWhereInput)
    where!: MediaFileScalarWhereInput;

    @Field(() => MediaFileUpdateManyMutationInput, {nullable:false})
    @Type(() => MediaFileUpdateManyMutationInput)
    data!: MediaFileUpdateManyMutationInput;
}
