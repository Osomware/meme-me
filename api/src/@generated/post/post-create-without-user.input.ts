import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreatemediaUrlsInput } from './post-createmedia-urls.input';

@InputType()
export class PostCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => PostCreatemediaUrlsInput, {nullable:true})
    mediaUrls?: PostCreatemediaUrlsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
