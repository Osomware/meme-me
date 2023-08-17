import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereInput } from './post-where.input';

@InputType()
export class PostRelationFilter {

    @Field(() => PostWhereInput, {nullable:true})
    is?: PostWhereInput;

    @Field(() => PostWhereInput, {nullable:true})
    isNot?: PostWhereInput;
}
