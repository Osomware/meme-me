import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MediaFileWhereInput } from './media-file-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';

@InputType()
export class MediaFileWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [MediaFileWhereInput], {nullable:true})
    AND?: Array<MediaFileWhereInput>;

    @Field(() => [MediaFileWhereInput], {nullable:true})
    OR?: Array<MediaFileWhereInput>;

    @Field(() => [MediaFileWhereInput], {nullable:true})
    NOT?: Array<MediaFileWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    postId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PostRelationFilter, {nullable:true})
    post?: PostRelationFilter;
}
