import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutCommentsInput } from './post-create-without-comments.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutCommentsInput } from './post-create-or-connect-without-comments.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedOneWithoutCommentsInput {

    @Field(() => PostCreateWithoutCommentsInput, {nullable:true})
    @Type(() => PostCreateWithoutCommentsInput)
    create?: PostCreateWithoutCommentsInput;

    @Field(() => PostCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
