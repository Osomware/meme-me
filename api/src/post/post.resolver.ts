import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'

import { PostService } from './post.service'
import { Post } from './entities/post.entity'
import { DeletePostInput } from './dto/delete-post.input'
import { FilterPostInput } from './dto/filter-post.input'
import { CountUsernameInput } from './dto/count-username.input'
import { FindManyPostArgs } from '@generated/post/find-many-post.args'
import { CurrentUserId } from '~/auth/decorators/currentUserId.decotrator'
import { FindFirstPostOrThrowArgs } from '@generated/post/find-first-post-or-throw.args'
import { PostCreateWithoutUserInput } from '@generated/post/post-create-without-user.input'

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post, { name: 'createPost' })
  async createPost(
    @Args('createPostInput') createPostInput: PostCreateWithoutUserInput,
    @CurrentUserId() userId: number
  ): Promise<Post> {
    return await this.postService.create(createPostInput, userId)
  }

  @Query(() => [Post], { name: 'findAllPost' })
  findAll(
    @Args() args: FindManyPostArgs,
    @Args() filterInput: FilterPostInput,
    @CurrentUserId() userId: number
  ): Promise<Post[]> {
    switch (filterInput.filter) {
      case 'Following':
        return this.postService.filterFollowingPosts(args, userId)
      case 'Newest':
        return this.postService.filterNewestPosts(args)
      case 'Popular':
        return this.postService.filterPopularPosts(args)
      default:
        return this.postService.findAll(args)
    }
  }

  @Query(() => Post, { name: 'findOnePost' })
  findOne(@Args() args: FindFirstPostOrThrowArgs): Promise<Post> {
    return this.postService.findOne(args)
  }

  @Query(() => [Post], { name: 'findAllPostByUsername' })
  findAllByUsername(@Args() args: FindManyPostArgs): Promise<Post[]> {
    return this.postService.findAllByUsername(args)
  }

  @Query(() => Int, { name: 'countAllPost' })
  countllPost(): Promise<number> {
    return this.postService.countAllPost()
  }

  @Mutation(() => Post, { name: 'deletePost' })
  async deletePost(
    @Args('deletePostInput') deletePostInput: DeletePostInput,
    @CurrentUserId() userId: number
  ): Promise<Post> {
    return this.postService.delete(deletePostInput, userId)
  }

  @Query(() => Int, { name: 'countAllPostByUsername' })
  countAllPostByUsername(@Args() countUsernameInput: CountUsernameInput): Promise<number> {
    return this.postService.countAllPostByUsername(countUsernameInput)
  }
}
