import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutPostInput } from './like-create-without-post.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutPostInput } from './like-create-or-connect-without-post.input';
import { LikeUpsertWithWhereUniqueWithoutPostInput } from './like-upsert-with-where-unique-without-post.input';
import { LikeCreateManyPostInputEnvelope } from './like-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithWhereUniqueWithoutPostInput } from './like-update-with-where-unique-without-post.input';
import { LikeUpdateManyWithWhereWithoutPostInput } from './like-update-many-with-where-without-post.input';
import { LikeScalarWhereInput } from './like-scalar-where.input';

@InputType()
export class LikeUncheckedUpdateManyWithoutPostNestedInput {

    @Field(() => [LikeCreateWithoutPostInput], {nullable:true})
    @Type(() => LikeCreateWithoutPostInput)
    create?: Array<LikeCreateWithoutPostInput>;

    @Field(() => [LikeCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutPostInput>;

    @Field(() => [LikeUpsertWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => LikeUpsertWithWhereUniqueWithoutPostInput)
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutPostInput>;

    @Field(() => LikeCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyPostInputEnvelope)
    createMany?: LikeCreateManyPostInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId'>>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId'>>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId'>>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId'>>;

    @Field(() => [LikeUpdateWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => LikeUpdateWithWhereUniqueWithoutPostInput)
    update?: Array<LikeUpdateWithWhereUniqueWithoutPostInput>;

    @Field(() => [LikeUpdateManyWithWhereWithoutPostInput], {nullable:true})
    @Type(() => LikeUpdateManyWithWhereWithoutPostInput)
    updateMany?: Array<LikeUpdateManyWithWhereWithoutPostInput>;

    @Field(() => [LikeScalarWhereInput], {nullable:true})
    @Type(() => LikeScalarWhereInput)
    deleteMany?: Array<LikeScalarWhereInput>;
}
