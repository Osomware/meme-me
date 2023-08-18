import { Injectable, NotFoundException } from '@nestjs/common'

import { Post } from '@generated/post/post.model'
import { PrismaService } from '~/prisma/prisma.service'
import { FindManyPostArgs } from '@generated/post/find-many-post.args'
import { FindFirstPostOrThrowArgs } from '@generated/post/find-first-post-or-throw.args'
import { PostCreateWithoutUserInput } from '@generated/post/post-create-without-user.input'

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(createPostInput: PostCreateWithoutUserInput, userId: number): Promise<Post> {
    const { mediaUrls } = createPostInput

    if (mediaUrls.set.length === 0) {
      throw new NotFoundException('Photos/Videos is required field. Pleace re-upload!')
    }

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
        postHashtags: true
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
        }
      }
    })
  }
}
