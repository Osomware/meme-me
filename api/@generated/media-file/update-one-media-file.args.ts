import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaFileUpdateInput } from './media-file-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MediaFileWhereUniqueInput } from './media-file-where-unique.input';

@ArgsType()
export class UpdateOneMediaFileArgs {

    @Field(() => MediaFileUpdateInput, {nullable:false})
    @Type(() => MediaFileUpdateInput)
    data!: MediaFileUpdateInput;

    @Field(() => MediaFileWhereUniqueInput, {nullable:false})
    @Type(() => MediaFileWhereUniqueInput)
    where!: Prisma.AtLeast<MediaFileWhereUniqueInput, 'id'>;
}
