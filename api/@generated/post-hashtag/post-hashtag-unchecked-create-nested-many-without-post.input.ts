import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostHashtagCreateWithoutPostInput } from './post-hashtag-create-without-post.input';
import { Type } from 'class-transformer';
import { PostHashtagCreateOrConnectWithoutPostInput } from './post-hashtag-create-or-connect-without-post.input';
import { PostHashtagCreateManyPostInputEnvelope } from './post-hashtag-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PostHashtagWhereUniqueInput } from './post-hashtag-where-unique.input';

@InputType()
export class PostHashtagUncheckedCreateNestedManyWithoutPostInput {

    @Field(() => [PostHashtagCreateWithoutPostInput], {nullable:true})
    @Type(() => PostHashtagCreateWithoutPostInput)
    create?: Array<PostHashtagCreateWithoutPostInput>;

    @Field(() => [PostHashtagCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => PostHashtagCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<PostHashtagCreateOrConnectWithoutPostInput>;

    @Field(() => PostHashtagCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => PostHashtagCreateManyPostInputEnvelope)
    createMany?: PostHashtagCreateManyPostInputEnvelope;

    @Field(() => [PostHashtagWhereUniqueInput], {nullable:true})
    @Type(() => PostHashtagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PostHashtagWhereUniqueInput, 'id' | 'postId_hashtagId'>>;
}
