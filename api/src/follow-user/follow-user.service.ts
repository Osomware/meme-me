import { Injectable } from '@nestjs/common'

import { Follow } from '@generated/follow/follow.model'
import { PrismaService } from '~/prisma/prisma.service'
import { TargetUserIdInput } from './dto/target-user-id.input'

@Injectable()
export class FollowUserService {
  constructor(private prisma: PrismaService) {}

  async followUser(userId: number, targetUser: TargetUserIdInput): Promise<Follow> {
    if (userId === targetUser.id) {
      throw new Error('You cannot follow yourself.')
    }

    const targetUserFound = await this.prisma.user.findUnique({
      where: { id: targetUser.id }
    })

    if (!targetUserFound) {
      throw new Error('Target user not found.')
    }

    return await this.prisma.follow.create({
      data: {
        follower: {
          connect: {
            id: targetUser.id
          }
        },
        following: {
          connect: {
            id: userId
          }
        }
      },
      include: {
        follower: true,
        following: true
      }
    })
  }

  async unFollowUser(userId: number, targetUser: TargetUserIdInput): Promise<Follow> {
    if (userId === targetUser.id) {
      throw new Error('You cannot unfollow yourself.')
    }

    const targetUserFound = await this.prisma.user.findMany({
      where: { id: targetUser.id }
    })

    if (!targetUserFound) {
      throw new Error('Target user not found.')
    }

    return await this.prisma.follow.delete({
      where: {
        followerId_followingId: {
          followerId: targetUser.id,
          followingId: userId
        }
      },
      include: {
        follower: true,
        following: true
      }
    })
  }

  async checkUserFollowed(userId: number, targetUser: TargetUserIdInput): Promise<Boolean> {
    const followRelationship = await this.prisma.follow.findUnique({
      where: {
        followerId_followingId: {
          followerId: targetUser.id,
          followingId: userId
        }
      }
    })

    return !!followRelationship
  }
}
