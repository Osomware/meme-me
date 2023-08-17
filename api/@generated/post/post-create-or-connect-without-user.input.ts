import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutUserInput } from './post-create-without-user.input';

@InputType()
export class PostCreateOrConnectWithoutUserInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostCreateWithoutUserInput, {nullable:false})
    @Type(() => PostCreateWithoutUserInput)
    create!: PostCreateWithoutUserInput;
}
