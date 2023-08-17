import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutPostHashtagsInput } from './post-create-without-post-hashtags.input';

@InputType()
export class PostCreateOrConnectWithoutPostHashtagsInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostCreateWithoutPostHashtagsInput, {nullable:false})
    @Type(() => PostCreateWithoutPostHashtagsInput)
    create!: PostCreateWithoutPostHashtagsInput;
}
