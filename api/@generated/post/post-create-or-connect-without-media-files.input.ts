import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutMediaFilesInput } from './post-create-without-media-files.input';

@InputType()
export class PostCreateOrConnectWithoutMediaFilesInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostCreateWithoutMediaFilesInput, {nullable:false})
    @Type(() => PostCreateWithoutMediaFilesInput)
    create!: PostCreateWithoutMediaFilesInput;
}
