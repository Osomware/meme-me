import { CustomDecorator, SetMetadata } from '@nestjs/common'

export const Public = (): CustomDecorator<string> => SetMetadata('isPublic', true)
