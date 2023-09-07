import { Injectable } from '@nestjs/common'

import { Post } from '@generated/post/post.model'
import { PrismaService } from '~/prisma/prisma.service'
import { DeletePostInput } from './dto/delete-post.input'
import { FindManyPostArgs } from '@generated/post/find-many-post.args'
import { FindFirstPostOrThrowArgs } from '@generated/post/find-first-post-or-throw.args'
import { PostCreateWithoutUserInput } from '@generated/post/post-create-without-user.input'

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(createPostInput: PostCreateWithoutUserInput, userId: number): Promise<Post> {
    return await this.prisma.post.create({
      data: {
        ...createPostInput,
        user: {
          connect: {
            id: userId
          }
        }
      },
      include: {
        user: true,
        postHashtags: true,
        mediaFiles: true
      }
    })
  }

  async findAll(args: FindManyPostArgs): Promise<Post[]> {
    return await this.prisma.post.findMany({
      ...args,
      include: {
        user: true,
        postHashtags: {
          include: {
            hashtag: true
          }
        },
        mediaFiles: true,
        _count: true
      }
    })
  }

  async findOne(args: FindFirstPostOrThrowArgs): Promise<Post> {
    return await this.prisma.post.findFirstOrThrow({
      ...args,
      include: {
        user: true,
        postHashtags: {
          include: {
            hashtag: true
          }
        },
        mediaFiles: true,
        _count: true
      }
    })
  }

  async findAllByUsername(args: FindManyPostArgs): Promise<Post[]> {
    return await this.prisma.post.findMany({
      ...args,
      include: {
        user: true,
        postHashtags: {
          include: {
            hashtag: true
          }
        },
        mediaFiles: true,
        _count: true
      }
    })
  }

  async countAllPost(): Promise<number> {
    return await this.prisma.post.count()
  }

  async delete(deletePostInput: DeletePostInput, userId: number): Promise<Post> {
    const findUserPost = await this.prisma.post.findFirst({
      where: {
        id: {
          equals: deletePostInput.id
        },
        userId: {
          equals: userId
        }
      }
    })

    if (!findUserPost) {
      throw new Error('You are not authorized to delete this post!')
    }

    return await this.prisma.post.delete({
      where: {
        id: deletePostInput.id,
        userId
      },
      include: {
        user: true,
        likes: true,
        _count: true
      }
    })
  }
}
