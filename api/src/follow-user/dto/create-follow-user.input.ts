import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateFollowUserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
