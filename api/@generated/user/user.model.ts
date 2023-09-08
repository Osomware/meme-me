import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Post } from '../post/post.model';
import { Like } from '../like/like.model';
import { Comment } from '../comment/comment.model';
import { Follow } from '../follow/follow.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    refreshToken!: string | null;

    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof Role;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [Follow], {nullable:true})
    followers?: Array<Follow>;

    @Field(() => [Follow], {nullable:true})
    following?: Array<Follow>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
