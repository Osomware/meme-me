import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MediaFileWhereUniqueInput } from './media-file-where-unique.input';
import { Type } from 'class-transformer';
import { MediaFileUpdateWithoutPostInput } from './media-file-update-without-post.input';

@InputType()
export class MediaFileUpdateWithWhereUniqueWithoutPostInput {

    @Field(() => MediaFileWhereUniqueInput, {nullable:false})
    @Type(() => MediaFileWhereUniqueInput)
    where!: Prisma.AtLeast<MediaFileWhereUniqueInput, 'id'>;

    @Field(() => MediaFileUpdateWithoutPostInput, {nullable:false})
    @Type(() => MediaFileUpdateWithoutPostInput)
    data!: MediaFileUpdateWithoutPostInput;
}
