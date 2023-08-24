import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PostUncheckedUpdateManyWithoutUserNestedInput } from '../post/post-unchecked-update-many-without-user-nested.input';
import { FollowUncheckedUpdateManyWithoutFollowerNestedInput } from '../follow/follow-unchecked-update-many-without-follower-nested.input';
import { FollowUncheckedUpdateManyWithoutFollowingNestedInput } from '../follow/follow-unchecked-update-many-without-following-nested.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => PostUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => FollowUncheckedUpdateManyWithoutFollowerNestedInput, {nullable:true})
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;

    @Field(() => FollowUncheckedUpdateManyWithoutFollowingNestedInput, {nullable:true})
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput;
}
