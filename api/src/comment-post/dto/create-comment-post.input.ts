import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateCommentPostInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
