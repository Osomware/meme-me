import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class DeletePostInput {
  @Field(() => Int)
  id: number
}
