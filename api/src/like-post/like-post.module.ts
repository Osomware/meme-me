import { Module } from '@nestjs/common'

import { LikePostService } from './like-post.service'
import { LikePostResolver } from './like-post.resolver'
import { PrismaService } from '~/prisma/prisma.service'

@Module({
  providers: [LikePostResolver, LikePostService, PrismaService]
})
export class LikePostModule {}
