import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereInput } from './post-where.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutLikesInput } from './post-update-without-likes.input';

@InputType()
export class PostUpdateToOneWithWhereWithoutLikesInput {

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: PostWhereInput;

    @Field(() => PostUpdateWithoutLikesInput, {nullable:false})
    @Type(() => PostUpdateWithoutLikesInput)
    data!: PostUpdateWithoutLikesInput;
}
