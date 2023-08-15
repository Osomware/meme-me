import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PostHashtagCreateWithoutHashtagInput } from './post-hashtag-create-without-hashtag.input'
import { Type } from 'class-transformer'
import { PostHashtagCreateOrConnectWithoutHashtagInput } from './post-hashtag-create-or-connect-without-hashtag.input'
import { PostHashtagCreateManyHashtagInputEnvelope } from './post-hashtag-create-many-hashtag-input-envelope.input'
import { Prisma } from '@prisma/client'
import { PostHashtagWhereUniqueInput } from './post-hashtag-where-unique.input'

@InputType()
export class PostHashtagUncheckedCreateNestedManyWithoutHashtagInput {
  @Field(() => [PostHashtagCreateWithoutHashtagInput], { nullable: true })
  @Type(() => PostHashtagCreateWithoutHashtagInput)
  create?: Array<PostHashtagCreateWithoutHashtagInput>

  @Field(() => [PostHashtagCreateOrConnectWithoutHashtagInput], { nullable: true })
  @Type(() => PostHashtagCreateOrConnectWithoutHashtagInput)
  connectOrCreate?: Array<PostHashtagCreateOrConnectWithoutHashtagInput>

  @Field(() => PostHashtagCreateManyHashtagInputEnvelope, { nullable: true })
  @Type(() => PostHashtagCreateManyHashtagInputEnvelope)
  createMany?: PostHashtagCreateManyHashtagInputEnvelope

  @Field(() => [PostHashtagWhereUniqueInput], { nullable: true })
  @Type(() => PostHashtagWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<PostHashtagWhereUniqueInput, 'id' | 'postId_hashtagId'>>
}
