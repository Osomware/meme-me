import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutPostHashtagsInput } from './post-create-without-post-hashtags.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutPostHashtagsInput } from './post-create-or-connect-without-post-hashtags.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedOneWithoutPostHashtagsInput {

    @Field(() => PostCreateWithoutPostHashtagsInput, {nullable:true})
    @Type(() => PostCreateWithoutPostHashtagsInput)
    create?: PostCreateWithoutPostHashtagsInput;

    @Field(() => PostCreateOrConnectWithoutPostHashtagsInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutPostHashtagsInput)
    connectOrCreate?: PostCreateOrConnectWithoutPostHashtagsInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
