import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUpdateWithoutLikesInput } from './post-update-without-likes.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutLikesInput } from './post-create-without-likes.input';
import { PostWhereInput } from './post-where.input';

@InputType()
export class PostUpsertWithoutLikesInput {

    @Field(() => PostUpdateWithoutLikesInput, {nullable:false})
    @Type(() => PostUpdateWithoutLikesInput)
    update!: PostUpdateWithoutLikesInput;

    @Field(() => PostCreateWithoutLikesInput, {nullable:false})
    @Type(() => PostCreateWithoutLikesInput)
    create!: PostCreateWithoutLikesInput;

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: PostWhereInput;
}
