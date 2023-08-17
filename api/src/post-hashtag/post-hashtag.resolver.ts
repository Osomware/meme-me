import { Resolver, Query, Args } from '@nestjs/graphql'

import { PostHashtagService } from './post-hashtag.service'
import { PostHashtag } from './entities/post-hashtag.entity'
import { Hashtag } from '@generated/hashtag/hashtag.model'
import { FindManyHashtagArgs } from '@generated/hashtag/find-many-hashtag.args'

@Resolver(() => PostHashtag)
export class PostHashtagResolver {
  constructor(private readonly postHashtagService: PostHashtagService) {}

  @Query(() => [PostHashtag], { name: 'getAllPostHashtag' })
  async findAll(@Args() args: FindManyHashtagArgs): Promise<Hashtag[]> {
    return this.postHashtagService.findAll(args)
  }

  @Query(() => [PostHashtag], { name: 'searchHashtag' })
  async searchHashtags(@Args('query') query: string): Promise<Hashtag[]> {
    return this.postHashtagService.search(query)
  }
}
