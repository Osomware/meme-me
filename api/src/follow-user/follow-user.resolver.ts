import { Resolver, Mutation, Query, Args } from '@nestjs/graphql'

import { Follow } from '@generated/follow/follow.model'
import { FollowUserService } from './follow-user.service'
import { FollowUser } from './entities/follow-user.entity'
import { TargetUserIdInput } from './dto/target-user-id.input'
import { CurrentUserId } from '~/auth/decorators/currentUserId.decotrator'

@Resolver(() => FollowUser)
export class FollowUserResolver {
  constructor(private readonly followUserService: FollowUserService) {}

  @Mutation(() => FollowUser)
  async followUser(
    @CurrentUserId() userId: number,
    @Args('targetUserIdInput') targetUserInput: TargetUserIdInput
  ): Promise<Follow> {
    return await this.followUserService.followUser(userId, targetUserInput)
  }

  @Mutation(() => FollowUser)
  async unfollowUser(
    @CurrentUserId() userId: number,
    @Args('targetUserIdInput') targetUserInput: TargetUserIdInput
  ): Promise<Follow> {
    return await this.followUserService.unFollowUser(userId, targetUserInput)
  }

  @Query(() => Boolean, { name: 'checkUserFollowed' })
  async checkUserFollowed(
    @CurrentUserId() userId: number,
    @Args('targetUserIdInput') targetUserInput: TargetUserIdInput
  ): Promise<Boolean> {
    return await this.followUserService.checkUserFollowed(userId, targetUserInput)
  }
}
