import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyPostInput } from './comment-create-many-post.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyPostInputEnvelope {

    @Field(() => [CommentCreateManyPostInput], {nullable:false})
    @Type(() => CommentCreateManyPostInput)
    data!: Array<CommentCreateManyPostInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
