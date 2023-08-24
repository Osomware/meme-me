import { Module } from '@nestjs/common'

import { PrismaService } from '~/prisma/prisma.service'
import { FollowUserService } from './follow-user.service'
import { FollowUserResolver } from './follow-user.resolver'

@Module({
  providers: [FollowUserResolver, FollowUserService, PrismaService]
})
export class FollowUserModule {}
