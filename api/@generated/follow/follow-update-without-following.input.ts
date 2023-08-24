import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutFollowersNestedInput } from '../user/user-update-one-required-without-followers-nested.input';

@InputType()
export class FollowUpdateWithoutFollowingInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutFollowersNestedInput, {nullable:true})
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput;
}
