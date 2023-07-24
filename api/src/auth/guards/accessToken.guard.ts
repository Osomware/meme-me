import { Observable } from 'rxjs'
import { Reflector } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'
import { GqlExecutionContext } from '@nestjs/graphql'
import { ExecutionContext, Injectable } from '@nestjs/common'

@Injectable()
export class AccessTokenGuard extends AuthGuard('jwt-access') {
  constructor(private reflector: Reflector) {
    super()
  }

  getRequest(context: ExecutionContext): any {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride('isPublic', [
      context.getHandler(),
      context.getClass()
    ])

    if (isPublic) {
      return true
    }
    return super.canActivate(context)
  }
}
