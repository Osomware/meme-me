import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';
import { HashtagRelationFilter } from '../hashtag/hashtag-relation-filter.input';

@InputType()
export class PostHashtagWhereInput {

    @Field(() => [PostHashtagWhereInput], {nullable:true})
    AND?: Array<PostHashtagWhereInput>;

    @Field(() => [PostHashtagWhereInput], {nullable:true})
    OR?: Array<PostHashtagWhereInput>;

    @Field(() => [PostHashtagWhereInput], {nullable:true})
    NOT?: Array<PostHashtagWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
