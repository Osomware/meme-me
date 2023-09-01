import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaFileCreateWithoutPostInput } from './media-file-create-without-post.input';
import { Type } from 'class-transformer';
import { MediaFileCreateOrConnectWithoutPostInput } from './media-file-create-or-connect-without-post.input';
import { MediaFileUpsertWithWhereUniqueWithoutPostInput } from './media-file-upsert-with-where-unique-without-post.input';
import { MediaFileCreateManyPostInputEnvelope } from './media-file-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MediaFileWhereUniqueInput } from './media-file-where-unique.input';
import { MediaFileUpdateWithWhereUniqueWithoutPostInput } from './media-file-update-with-where-unique-without-post.input';
import { MediaFileUpdateManyWithWhereWithoutPostInput } from './media-file-update-many-with-where-without-post.input';
import { MediaFileScalarWhereInput } from './media-file-scalar-where.input';

@InputType()
export class MediaFileUpdateManyWithoutPostNestedInput {

    @Field(() => [MediaFileCreateWithoutPostInput], {nullable:true})
    @Type(() => MediaFileCreateWithoutPostInput)
    create?: Array<MediaFileCreateWithoutPostInput>;

    @Field(() => [MediaFileCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => MediaFileCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<MediaFileCreateOrConnectWithoutPostInput>;

    @Field(() => [MediaFileUpsertWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => MediaFileUpsertWithWhereUniqueWithoutPostInput)
    upsert?: Array<MediaFileUpsertWithWhereUniqueWithoutPostInput>;

    @Field(() => MediaFileCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => MediaFileCreateManyPostInputEnvelope)
    createMany?: MediaFileCreateManyPostInputEnvelope;

    @Field(() => [MediaFileWhereUniqueInput], {nullable:true})
    @Type(() => MediaFileWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MediaFileWhereUniqueInput, 'id'>>;

    @Field(() => [MediaFileWhereUniqueInput], {nullable:true})
    @Type(() => MediaFileWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MediaFileWhereUniqueInput, 'id'>>;

    @Field(() => [MediaFileWhereUniqueInput], {nullable:true})
    @Type(() => MediaFileWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MediaFileWhereUniqueInput, 'id'>>;

    @Field(() => [MediaFileWhereUniqueInput], {nullable:true})
    @Type(() => MediaFileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MediaFileWhereUniqueInput, 'id'>>;

    @Field(() => [MediaFileUpdateWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => MediaFileUpdateWithWhereUniqueWithoutPostInput)
    update?: Array<MediaFileUpdateWithWhereUniqueWithoutPostInput>;

    @Field(() => [MediaFileUpdateManyWithWhereWithoutPostInput], {nullable:true})
    @Type(() => MediaFileUpdateManyWithWhereWithoutPostInput)
    updateMany?: Array<MediaFileUpdateManyWithWhereWithoutPostInput>;

    @Field(() => [MediaFileScalarWhereInput], {nullable:true})
    @Type(() => MediaFileScalarWhereInput)
    deleteMany?: Array<MediaFileScalarWhereInput>;
}
