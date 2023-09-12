import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class FilterPostInput {
  @Field(() => String, { nullable: true })
  filter?: 'Following' | 'Newest' | 'Popular'
}
