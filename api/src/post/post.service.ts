import { Injectable } from '@nestjs/common'

import { Post } from '~/@generated/post/post.model'
import { PrismaService } from '~/prisma/prisma.service'
import { FindManyPostArgs } from '~/@generated/post/find-many-post.args'
import { PostCreateWithoutUserInput } from '~/@generated/post/post-create-without-user.input'

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
      select: {
        id: true,
        title: true,
        userId: true,
        mediaUrls: true,
        createdAt: true,
        updatedAt: true,
        isHideLikeAndCount: true,
        isTurnOffComment: true,
        user: true
      }
    })
  }

  async findAll(args: FindManyPostArgs): Promise<Post[]> {
    return await this.prisma.post.findMany(args)
  }

  findOne(id: number): string {
    return `This action returns a #${id} post`
  }
}
