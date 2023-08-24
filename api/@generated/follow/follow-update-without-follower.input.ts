import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutFollowingNestedInput } from '../user/user-update-one-required-without-following-nested.input';

@InputType()
export class FollowUpdateWithoutFollowerInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutFollowingNestedInput, {nullable:true})
    following?: UserUpdateOneRequiredWithoutFollowingNestedInput;
}
