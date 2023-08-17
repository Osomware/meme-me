import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostHashtagCreateManyHashtagInput } from './post-hashtag-create-many-hashtag.input';
import { Type } from 'class-transformer';

@InputType()
export class PostHashtagCreateManyHashtagInputEnvelope {

    @Field(() => [PostHashtagCreateManyHashtagInput], {nullable:false})
    @Type(() => PostHashtagCreateManyHashtagInput)
    data!: Array<PostHashtagCreateManyHashtagInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
