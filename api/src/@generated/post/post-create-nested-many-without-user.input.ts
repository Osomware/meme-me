import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutUserInput } from './post-create-without-user.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutUserInput } from './post-create-or-connect-without-user.input';
import { PostCreateManyUserInputEnvelope } from './post-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedManyWithoutUserInput {

    @Field(() => [PostCreateWithoutUserInput], {nullable:true})
    @Type(() => PostCreateWithoutUserInput)
    create?: Array<PostCreateWithoutUserInput>;

    @Field(() => [PostCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutUserInput>;

    @Field(() => PostCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyUserInputEnvelope)
    createMany?: PostCreateManyUserInputEnvelope;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
}
