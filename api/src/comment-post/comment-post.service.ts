import { Injectable } from '@nestjs/common'

import { PrismaService } from '~/prisma/prisma.service'
import { CommentPost } from './entities/comment-post.entity'
import { FindManyCommentArgs } from '@generated/comment/find-many-comment.args'
import { CommentCreateWithoutUserInput } from '@generated/comment/comment-create-without-user.input'
import { DeleteCommentPostInput } from './dto/delete-comment-post.input'

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

  async findAllByPostId(args: FindManyCommentArgs): Promise<CommentPost[]> {
    return await this.prisma.comment.findMany({
      ...args,
      include: {
        user: true,
        post: true,
        childComments: true,
        parent: true,
        _count: true
      }
    })
  }

  async countAllComment(args: FindManyCommentArgs): Promise<number> {
    return await this.prisma.comment.count(args)
  }

  async deleteComment(
    deleteCommentInput: DeleteCommentPostInput,
    userId: number
  ): Promise<CommentPost> {
    const findUserPost = await this.prisma.comment.findFirst({
      where: {
        id: {
          equals: deleteCommentInput.id
        },
        userId: {
          equals: userId
        }
      }
    })

    if (!findUserPost) {
      throw new Error('You are not authorized to delete this comment!')
    }

    return await this.prisma.comment.delete({
      where: {
        id: deleteCommentInput.id,
        userId
      },
      include: {
        user: true,
        _count: true
      }
    })
  }
}
