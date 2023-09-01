import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MediaFileCreateWithoutPostInput {

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
