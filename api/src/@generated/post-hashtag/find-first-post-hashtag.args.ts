import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PostHashtagWhereInput } from './post-hashtag-where.input'
import { Type } from 'class-transformer'
import { PostHashtagOrderByWithRelationInput } from './post-hashtag-order-by-with-relation.input'
import { Prisma } from '@prisma/client'
import { PostHashtagWhereUniqueInput } from './post-hashtag-where-unique.input'
import { Int } from '@nestjs/graphql'
import { PostHashtagScalarFieldEnum } from './post-hashtag-scalar-field.enum'

@ArgsType()
export class FindFirstPostHashtagArgs {
  @Field(() => PostHashtagWhereInput, { nullable: true })
  @Type(() => PostHashtagWhereInput)
  where?: PostHashtagWhereInput

  @Field(() => [PostHashtagOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PostHashtagOrderByWithRelationInput>

  @Field(() => PostHashtagWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<PostHashtagWhereUniqueInput, 'id' | 'postId_hashtagId'>

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [PostHashtagScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PostHashtagScalarFieldEnum>
}
