import { GqlExecutionContext } from '@nestjs/graphql'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

import { JwtPayloadWithRefreshToken } from '~/auth/types'

export const CurrentUser = createParamDecorator(
  (
    data: keyof JwtPayloadWithRefreshToken | undefined,
    context: ExecutionContext
  ): ParameterDecorator => {
    const ctx = GqlExecutionContext.create(context)
    const req = ctx.getContext().req

    if (data) return req.user[data]

    return req.user
  }
)
