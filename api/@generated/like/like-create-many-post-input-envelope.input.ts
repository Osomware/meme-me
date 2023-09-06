import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateManyPostInput } from './like-create-many-post.input';
import { Type } from 'class-transformer';

@InputType()
export class LikeCreateManyPostInputEnvelope {

    @Field(() => [LikeCreateManyPostInput], {nullable:false})
    @Type(() => LikeCreateManyPostInput)
    data!: Array<LikeCreateManyPostInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
