import { Resolver, Mutation, Query, Args } from '@nestjs/graphql'

import { LikePostService } from './like-post.service'
import { LikePost } from './entities/like-post.entity'
import { TargetPostInput } from './entities/target-post.input'
import { CurrentUserId } from '~/auth/decorators/currentUserId.decotrator'

@Resolver(() => LikePost)
export class LikePostResolver {
  constructor(private readonly likePostService: LikePostService) {}

  @Mutation(() => LikePost, { name: 'likePost' })
  likePost(
    @Args('targetPostInput') targetPostInput: TargetPostInput,
    @CurrentUserId() userId: number
  ): Promise<LikePost> {
    return this.likePostService.likePost(targetPostInput, userId)
  }

  @Mutation(() => LikePost, { name: 'unlikePost' })
  unlikePost(
    @Args('targetPostInput') targetPostInput: TargetPostInput,
    @CurrentUserId() userId: number
  ): Promise<LikePost> {
    return this.likePostService.unlikePost(targetPostInput, userId)
  }

  @Query(() => Boolean, { name: 'checkUserLikePost' })
  async checkUserLikePost(
    @CurrentUserId() userId: number,
    @Args('targetPostInput') targetPostInput: TargetPostInput
  ): Promise<Boolean> {
    return await this.likePostService.checkUserLikePost(userId, targetPostInput)
  }
}
