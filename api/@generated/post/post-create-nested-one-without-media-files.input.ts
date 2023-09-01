import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutMediaFilesInput } from './post-create-without-media-files.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutMediaFilesInput } from './post-create-or-connect-without-media-files.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedOneWithoutMediaFilesInput {

    @Field(() => PostCreateWithoutMediaFilesInput, {nullable:true})
    @Type(() => PostCreateWithoutMediaFilesInput)
    create?: PostCreateWithoutMediaFilesInput;

    @Field(() => PostCreateOrConnectWithoutMediaFilesInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutMediaFilesInput)
    connectOrCreate?: PostCreateOrConnectWithoutMediaFilesInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
