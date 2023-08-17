import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutUserInput } from './post-create-without-user.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutUserInput } from './post-create-or-connect-without-user.input';
import { PostUpsertWithWhereUniqueWithoutUserInput } from './post-upsert-with-where-unique-without-user.input';
import { PostCreateManyUserInputEnvelope } from './post-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithWhereUniqueWithoutUserInput } from './post-update-with-where-unique-without-user.input';
import { PostUpdateManyWithWhereWithoutUserInput } from './post-update-many-with-where-without-user.input';
import { PostScalarWhereInput } from './post-scalar-where.input';

@InputType()
export class PostUpdateManyWithoutUserNestedInput {

    @Field(() => [PostCreateWithoutUserInput], {nullable:true})
    @Type(() => PostCreateWithoutUserInput)
    create?: Array<PostCreateWithoutUserInput>;

    @Field(() => [PostCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutUserInput>;

    @Field(() => [PostUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PostCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyUserInputEnvelope)
    createMany?: PostCreateManyUserInputEnvelope;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;

    @Field(() => [PostUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PostUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}
