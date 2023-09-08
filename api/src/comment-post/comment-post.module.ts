import { Module } from '@nestjs/common'

import { PrismaService } from '~/prisma/prisma.service'
import { CommentPostService } from './comment-post.service'
import { CommentPostResolver } from './comment-post.resolver'

@Module({
  providers: [CommentPostResolver, CommentPostService, PrismaService]
})
export class CommentPostModule {}
