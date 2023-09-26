import { Injectable } from '@nestjs/common'

import { Post } from '@generated/post/post.model'
import { PrismaService } from '~/prisma/prisma.service'
import { DeletePostInput } from './dto/delete-post.input'
import { FindManyPostArgs } from '@generated/post/find-many-post.args'
import { FindFirstPostOrThrowArgs } from '@generated/post/find-first-post-or-throw.args'
import { PostCreateWithoutUserInput } from '@generated/post/post-create-without-user.input'
import { CountUsernameInput } from './dto/count-username.input'

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

  async countAllPostByUsername(countUsernameInput: CountUsernameInput): Promise<number> {
    return await this.prisma.post.count({
      where: {
        user: {
          username: {
            equals: countUsernameInput.username
          }
        }
      }
    })
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

  // FILTERED ALL FOLLOWING POSTS
  async filterFollowingPosts(args: FindManyPostArgs, userId: number): Promise<Post[]> {
    const { filter, ...filteredArgs }: { [x: string]: any } = args
    const followers = await this.prisma.follow.findMany({
      where: {
        followingId: userId
      },
      select: {
        followerId: true
      }
    })

    const followerIds = followers.map((follow) => follow.followerId)

    const posts = await this.prisma.post.findMany({
      ...filteredArgs,
      where: {
        userId: {
          in: followerIds
        }
      },
      include: {
        user: true,
        _count: true,
        comments: true,
        likes: true,
        mediaFiles: true
      }
    })

    return posts
  }

  // FILTERED ALL NEW POSTS
  async filterNewestPosts(args: FindManyPostArgs): Promise<Post[]> {
    const { filter, ...filteredArgs }: { [x: string]: any } = args
    const posts = await this.prisma.post.findMany({
      ...filteredArgs,
      include: {
        user: true,
        _count: true,
        comments: true,
        likes: true,
        mediaFiles: true
      }
    })

    return posts
  }

  // FILTERED ALL POPULAR POSTS
  async filterPopularPosts(args: FindManyPostArgs): Promise<Post[]> {
    const { filter, ...filteredArgs }: { [x: string]: any } = args
    const posts = await this.prisma.post.findMany({
      ...filteredArgs,
      include: {
        user: true,
        _count: {
          select: {
            likes: true,
            comments: true
          }
        },
        comments: true,
        likes: true,
        mediaFiles: true
      }
    })

    // Sort the posts based on the sum of likes and comments counts
    const sortedPosts = posts.sort((postA, postB) => {
      const countA = postA._count.likes + postA._count.comments
      const countB = postB._count.likes + postB._count.comments

      // Sort in descending order
      return countB - countA
    })

    return sortedPosts
  }
}
