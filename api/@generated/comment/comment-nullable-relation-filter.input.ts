import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';

@InputType()
export class CommentNullableRelationFilter {

    @Field(() => CommentWhereInput, {nullable:true})
    is?: CommentWhereInput;

    @Field(() => CommentWhereInput, {nullable:true})
    isNot?: CommentWhereInput;
}
