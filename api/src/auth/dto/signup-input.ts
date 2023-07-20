import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString, IsEmail } from 'class-validator'

@InputType()
export class SignUpInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  name: string

  @IsNotEmpty()
  @IsString()
  @Field()
  username: string

  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string

  @IsNotEmpty()
  @IsString()
  @Field()
  password: string
}
