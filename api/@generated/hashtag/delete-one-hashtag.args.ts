import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneHashtagArgs {

    @Field(() => HashtagWhereUniqueInput, {nullable:false})
    @Type(() => HashtagWhereUniqueInput)
    where!: Prisma.AtLeast<HashtagWhereUniqueInput, 'id' | 'tag'>;
}
