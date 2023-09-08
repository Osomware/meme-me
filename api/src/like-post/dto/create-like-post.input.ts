import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateLikePostInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
