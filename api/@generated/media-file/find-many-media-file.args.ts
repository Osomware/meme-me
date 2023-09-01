import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaFileWhereInput } from './media-file-where.input';
import { Type } from 'class-transformer';
import { MediaFileOrderByWithRelationInput } from './media-file-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MediaFileWhereUniqueInput } from './media-file-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MediaFileScalarFieldEnum } from './media-file-scalar-field.enum';

@ArgsType()
export class FindManyMediaFileArgs {

    @Field(() => MediaFileWhereInput, {nullable:true})
    @Type(() => MediaFileWhereInput)
    where?: MediaFileWhereInput;

    @Field(() => [MediaFileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MediaFileOrderByWithRelationInput>;

    @Field(() => MediaFileWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MediaFileWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MediaFileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MediaFileScalarFieldEnum>;
}
