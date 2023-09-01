import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MediaFileWhereUniqueInput } from './media-file-where-unique.input';
import { Type } from 'class-transformer';
import { MediaFileUpdateWithoutPostInput } from './media-file-update-without-post.input';
import { MediaFileCreateWithoutPostInput } from './media-file-create-without-post.input';

@InputType()
export class MediaFileUpsertWithWhereUniqueWithoutPostInput {

    @Field(() => MediaFileWhereUniqueInput, {nullable:false})
    @Type(() => MediaFileWhereUniqueInput)
    where!: Prisma.AtLeast<MediaFileWhereUniqueInput, 'id'>;

    @Field(() => MediaFileUpdateWithoutPostInput, {nullable:false})
    @Type(() => MediaFileUpdateWithoutPostInput)
    update!: MediaFileUpdateWithoutPostInput;

    @Field(() => MediaFileCreateWithoutPostInput, {nullable:false})
    @Type(() => MediaFileCreateWithoutPostInput)
    create!: MediaFileCreateWithoutPostInput;
}
