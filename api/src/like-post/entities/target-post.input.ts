import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class TargetPostInput {
  @Field(() => Int)
  id: number
}
