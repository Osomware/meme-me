import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateManyUserInput } from './post-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PostCreateManyUserInputEnvelope {

    @Field(() => [PostCreateManyUserInput], {nullable:false})
    @Type(() => PostCreateManyUserInput)
    data!: Array<PostCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
