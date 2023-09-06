import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PostUpdateManyWithoutUserNestedInput } from '../post/post-update-many-without-user-nested.input';
import { LikeUpdateManyWithoutUserNestedInput } from '../like/like-update-many-without-user-nested.input';
import { FollowUpdateManyWithoutFollowingNestedInput } from '../follow/follow-update-many-without-following-nested.input';

@InputType()
export class UserUpdateWithoutFollowersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    refreshToken?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PostUpdateManyWithoutUserNestedInput, {nullable:true})
    posts?: PostUpdateManyWithoutUserNestedInput;

    @Field(() => LikeUpdateManyWithoutUserNestedInput, {nullable:true})
    likes?: LikeUpdateManyWithoutUserNestedInput;

    @Field(() => FollowUpdateManyWithoutFollowingNestedInput, {nullable:true})
    following?: FollowUpdateManyWithoutFollowingNestedInput;
}
