import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'

import { PostService } from './post.service'
import { Post } from './entities/post.entity'
import { CurrentUserId } from '~/auth/decorators/currentUserId.decotrator'
import { PostCreateWithoutUserInput } from '~/@generated/post/post-create-without-user.input'

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  async createPost(
    @Args('createPostInput') createPostInput: PostCreateWithoutUserInput,
    @CurrentUserId() userId: number
  ): Promise<Post> {
    return await this.postService.create(createPostInput, userId)
  }

  @Query(() => [Post], { name: 'post' })
  findAll(): string {
    return this.postService.findAll()
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => Int }) id: number): string {
    return this.postService.findOne(id)
  }
}
