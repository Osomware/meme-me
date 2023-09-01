import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MediaFileScalarWhereInput {

    @Field(() => [MediaFileScalarWhereInput], {nullable:true})
    AND?: Array<MediaFileScalarWhereInput>;

    @Field(() => [MediaFileScalarWhereInput], {nullable:true})
    OR?: Array<MediaFileScalarWhereInput>;

    @Field(() => [MediaFileScalarWhereInput], {nullable:true})
    NOT?: Array<MediaFileScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}
