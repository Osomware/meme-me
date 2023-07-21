import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString, IsEmail } from 'class-validator'

@InputType()
export class SignInInput {
  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string

  @IsNotEmpty()
  @IsString()
  @Field()
  password: string
}
