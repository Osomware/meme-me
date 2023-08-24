import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class TargetUserIdInput {
  @Field(() => Int)
  id: number
}
