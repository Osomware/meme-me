import { Injectable } from '@nestjs/common'

import { PrismaService } from '~/prisma/prisma.service'
import { CommentPost } from './entities/comment-post.entity'
import { CommentCreateWithoutUserInput } from '@generated/comment/comment-create-without-user.input'

@Injectable()
export class CommentPostService {
  constructor(private prisma: PrismaService) {}

  async create(
    commentWithoutUserInput: CommentCreateWithoutUserInput,
    userId: number
  ): Promise<CommentPost> {
    await this.prisma.post.findUniqueOrThrow({
      where: {
        id: commentWithoutUserInput.post.connect.id
      }
    })

    return await this.prisma.comment.create({
      data: {
        userId,
        postId: commentWithoutUserInput.post.connect.id,
        text: commentWithoutUserInput.text
      },
      include: {
        user: true,
        post: true,
        parent: true,
        _count: true,
        childComments: true
      }
    })
  }
}