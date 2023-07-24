import { GqlExecutionContext } from '@nestjs/graphql'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const CurrentUserId = createParamDecorator(
  (_: undefined, context: ExecutionContext): ParameterDecorator => {
    const ctx = GqlExecutionContext.create(context)
    const req = ctx.getContext().req

    return req.user.userId
  }
)
