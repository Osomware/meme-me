import { Module } from '@nestjs/common'

import { PrismaService } from '~/prisma/prisma.service'
import { PostHashtagService } from './post-hashtag.service'
import { PostHashtagResolver } from './post-hashtag.resolver'

@Module({
  providers: [PostHashtagResolver, PostHashtagService, PrismaService]
})
export class PostHashtagModule {}
