import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'

import { PostService } from './post.service'
import { Post } from './entities/post.entity'
import { FindManyPostArgs } from '~/@generated/post/find-many-post.args'
import { CurrentUserId } from '~/auth/decorators/currentUserId.decotrator'
import { PostCreateWithoutUserInput } from '~/@generated/post/post-create-without-user.input'

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

  // * Name: Represents the name in graphql playground
  @Query(() => [Post], { name: 'findAllPost' })
  findAll(@Args() args: FindManyPostArgs): Promise<Post[]> {
    return this.postService.findAll(args)
  }

  @Query(() => Post, { name: 'findOnePost' })
  findOne(@Args('id', { type: () => Int }) id: number): string {
    return this.postService.findOne(id)
  }
}
