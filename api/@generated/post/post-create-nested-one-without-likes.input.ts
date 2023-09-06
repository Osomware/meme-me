import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutLikesInput } from './post-create-without-likes.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutLikesInput } from './post-create-or-connect-without-likes.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedOneWithoutLikesInput {

    @Field(() => PostCreateWithoutLikesInput, {nullable:true})
    @Type(() => PostCreateWithoutLikesInput)
    create?: PostCreateWithoutLikesInput;

    @Field(() => PostCreateOrConnectWithoutLikesInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutLikesInput)
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
