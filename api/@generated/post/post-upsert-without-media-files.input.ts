import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUpdateWithoutMediaFilesInput } from './post-update-without-media-files.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutMediaFilesInput } from './post-create-without-media-files.input';
import { PostWhereInput } from './post-where.input';

@InputType()
export class PostUpsertWithoutMediaFilesInput {

    @Field(() => PostUpdateWithoutMediaFilesInput, {nullable:false})
    @Type(() => PostUpdateWithoutMediaFilesInput)
    update!: PostUpdateWithoutMediaFilesInput;

    @Field(() => PostCreateWithoutMediaFilesInput, {nullable:false})
    @Type(() => PostCreateWithoutMediaFilesInput)
    create!: PostCreateWithoutMediaFilesInput;

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: PostWhereInput;
}
