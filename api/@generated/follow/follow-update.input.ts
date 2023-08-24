import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutFollowersNestedInput } from '../user/user-update-one-required-without-followers-nested.input';
import { UserUpdateOneRequiredWithoutFollowingNestedInput } from '../user/user-update-one-required-without-following-nested.input';

@InputType()
export class FollowUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutFollowersNestedInput, {nullable:true})
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutFollowingNestedInput, {nullable:true})
    following?: UserUpdateOneRequiredWithoutFollowingNestedInput;
}
