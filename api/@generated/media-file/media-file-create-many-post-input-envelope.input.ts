import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaFileCreateManyPostInput } from './media-file-create-many-post.input';
import { Type } from 'class-transformer';

@InputType()
export class MediaFileCreateManyPostInputEnvelope {

    @Field(() => [MediaFileCreateManyPostInput], {nullable:false})
    @Type(() => MediaFileCreateManyPostInput)
    data!: Array<MediaFileCreateManyPostInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
