import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MediaFileWhereUniqueInput } from './media-file-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMediaFileOrThrowArgs {

    @Field(() => MediaFileWhereUniqueInput, {nullable:false})
    @Type(() => MediaFileWhereUniqueInput)
    where!: Prisma.AtLeast<MediaFileWhereUniqueInput, 'id'>;
}
