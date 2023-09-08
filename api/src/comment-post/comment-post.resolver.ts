import { Resolver, Mutation, Args } from '@nestjs/graphql'

import { CommentPostService } from './comment-post.service'
import { CommentPost } from './entities/comment-post.entity'
import { CurrentUserId } from '~/auth/decorators/currentUserId.decotrator'
import { CommentCreateWithoutUserInput } from '@generated/comment/comment-create-without-user.input'

@Resolver(() => CommentPost)
export class CommentPostResolver {
  constructor(private readonly commentPostService: CommentPostService) {}

  @Mutation(() => CommentPost, { name: 'commentPost' })
  createCommentPost(
    @Args('commentCreateWithoutUserInput')
    commentCreateWithoutUserInput: CommentCreateWithoutUserInput,
    @CurrentUserId() userId: number
  ): Promise<CommentPost> {
    return this.commentPostService.create(commentCreateWithoutUserInput, userId)
  }
}