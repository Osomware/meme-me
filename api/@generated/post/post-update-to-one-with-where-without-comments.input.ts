import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereInput } from './post-where.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutCommentsInput } from './post-update-without-comments.input';

@InputType()
export class PostUpdateToOneWithWhereWithoutCommentsInput {

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: PostWhereInput;

    @Field(() => PostUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => PostUpdateWithoutCommentsInput)
    data!: PostUpdateWithoutCommentsInput;
}
