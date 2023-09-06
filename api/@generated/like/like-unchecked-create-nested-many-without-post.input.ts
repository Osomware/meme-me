import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutPostInput } from './like-create-without-post.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutPostInput } from './like-create-or-connect-without-post.input';
import { LikeCreateManyPostInputEnvelope } from './like-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';

@InputType()
export class LikeUncheckedCreateNestedManyWithoutPostInput {

    @Field(() => [LikeCreateWithoutPostInput], {nullable:true})
    @Type(() => LikeCreateWithoutPostInput)
    create?: Array<LikeCreateWithoutPostInput>;

    @Field(() => [LikeCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutPostInput>;

    @Field(() => LikeCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyPostInputEnvelope)
    createMany?: LikeCreateManyPostInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId'>>;
}
