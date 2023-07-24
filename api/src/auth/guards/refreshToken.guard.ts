import { AuthGuard } from '@nestjs/passport'
import { GqlExecutionContext } from '@nestjs/graphql'
import { ExecutionContext, Injectable } from '@nestjs/common'

@Injectable()
export class RefreshTokenGuard extends AuthGuard('jwt-refresh') {
  constructor() {
    super()
  }

  getRequest(context: ExecutionContext): any {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req
  }
}
