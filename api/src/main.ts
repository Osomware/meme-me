import { NestFactory } from '@nestjs/core'
import { ValidationError } from 'class-validator'
import { NestExpressApplication } from '@nestjs/platform-express'
import { BadRequestException, ValidationPipe } from '@nestjs/common'

import { AppModule } from './app.module'

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []): any => {
        return new BadRequestException(
          validationErrors.map((error) => ({
            field: error.property,
            error: Object.values(error.constraints).join(', ')
          }))
        )
      }
    })
  )
  await app.listen(3030)
}
bootstrap()
