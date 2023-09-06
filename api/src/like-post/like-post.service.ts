import { Injectable } from '@nestjs/common'

import { LikePost } from './entities/like-post.entity'
import { PrismaService } from '~/prisma/prisma.service'
import { TargetPostInput } from './entities/target-post.input'

@Injectable()
export class LikePostService {
  constructor(private prisma: PrismaService) {}

  async likePost(targetPostInput: TargetPostInput, userId: number): Promise<LikePost> {
    return await this.prisma.like.create({
      data: {
        post: {
          connect: {
            id: targetPostInput.id
          }
        },
        user: {
          connect: {
            id: userId
          }
        }
      }
    })
  }

  async unlikePost(targetPostInput: TargetPostInput, userId: number): Promise<LikePost> {
    return await this.prisma.like.delete({
      where: {
        userId_postId: {
          postId: targetPostInput.id,
          userId
        }
      },
      include: {
        post: true,
        user: true
      }
    })
  }

  async checkUserLikePost(userId: number, targetPostInput: TargetPostInput): Promise<Boolean> {
    const likePostRelationship = await this.prisma.like.findUnique({
      where: {
        userId_postId: {
          postId: targetPostInput.id,
          userId
        }
      }
    })

    return !!likePostRelationship
  }
}
