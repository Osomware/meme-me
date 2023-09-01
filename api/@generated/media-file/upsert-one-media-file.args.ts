import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MediaFileWhereUniqueInput } from './media-file-where-unique.input';
import { Type } from 'class-transformer';
import { MediaFileCreateInput } from './media-file-create.input';
import { MediaFileUpdateInput } from './media-file-update.input';

@ArgsType()
export class UpsertOneMediaFileArgs {

    @Field(() => MediaFileWhereUniqueInput, {nullable:false})
    @Type(() => MediaFileWhereUniqueInput)
    where!: Prisma.AtLeast<MediaFileWhereUniqueInput, 'id'>;

    @Field(() => MediaFileCreateInput, {nullable:false})
    @Type(() => MediaFileCreateInput)
    create!: MediaFileCreateInput;

    @Field(() => MediaFileUpdateInput, {nullable:false})
    @Type(() => MediaFileUpdateInput)
    update!: MediaFileUpdateInput;
}
