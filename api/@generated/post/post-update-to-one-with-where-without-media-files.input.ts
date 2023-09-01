import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereInput } from './post-where.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutMediaFilesInput } from './post-update-without-media-files.input';

@InputType()
export class PostUpdateToOneWithWhereWithoutMediaFilesInput {

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: PostWhereInput;

    @Field(() => PostUpdateWithoutMediaFilesInput, {nullable:false})
    @Type(() => PostUpdateWithoutMediaFilesInput)
    data!: PostUpdateWithoutMediaFilesInput;
}
