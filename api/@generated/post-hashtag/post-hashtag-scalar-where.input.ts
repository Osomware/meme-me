import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PostHashtagScalarWhereInput {

    @Field(() => [PostHashtagScalarWhereInput], {nullable:true})
    AND?: Array<PostHashtagScalarWhereInput>;

    @Field(() => [PostHashtagScalarWhereInput], {nullable:true})
    OR?: Array<PostHashtagScalarWhereInput>;

    @Field(() => [PostHashtagScalarWhereInput], {nullable:true})
    NOT?: Array<PostHashtagScalarWhereInput>;

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
}
