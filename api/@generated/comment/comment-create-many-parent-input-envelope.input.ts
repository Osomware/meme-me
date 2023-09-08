import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyParentInput } from './comment-create-many-parent.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyParentInputEnvelope {

    @Field(() => [CommentCreateManyParentInput], {nullable:false})
    @Type(() => CommentCreateManyParentInput)
    data!: Array<CommentCreateManyParentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
