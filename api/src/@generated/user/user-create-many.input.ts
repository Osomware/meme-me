import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import * as Validator from 'class-validator'
import { Role } from '../prisma/role.enum'

@InputType()
export class UserCreateManyInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: false })
  email!: string

  @Field(() => String, { nullable: false })
  @Validator.MinLength(5)
  username!: string

  @Field(() => String, { nullable: false })
  @Validator.MinLength(3)
  name!: string

  @Field(() => String, { nullable: false })
  @Validator.MinLength(6)
  password!: string

  @Field(() => String, { nullable: true })
  refreshToken?: string

  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}