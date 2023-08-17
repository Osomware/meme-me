import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostHashtagPostIdHashtagIdCompoundUniqueInput } from './post-hashtag-post-id-hashtag-id-compound-unique.input';
import { PostHashtagWhereInput } from './post-hashtag-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';
import { HashtagRelationFilter } from '../hashtag/hashtag-relation-filter.input';

@InputType()
export class PostHashtagWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => PostHashtagPostIdHashtagIdCompoundUniqueInput, {nullable:true})
    postId_hashtagId?: PostHashtagPostIdHashtagIdCompoundUniqueInput;

    @Field(() => [PostHashtagWhereInput], {nullable:true})
    AND?: Array<PostHashtagWhereInput>;

    @Field(() => [PostHashtagWhereInput], {nullable:true})
    OR?: Array<PostHashtagWhereInput>;

    @Field(() => [PostHashtagWhereInput], {nullable:true})
    NOT?: Array<PostHashtagWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    postId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    hashtagId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PostRelationFilter, {nullable:true})
    post?: PostRelationFilter;

    @Field(() => HashtagRelationFilter, {nullable:true})
    hashtag?: HashtagRelationFilter;
}
