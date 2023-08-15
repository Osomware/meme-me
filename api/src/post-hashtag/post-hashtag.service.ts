import { Injectable } from '@nestjs/common'

import { PrismaService } from '~/prisma/prisma.service'
import { Hashtag } from '~/@generated/hashtag/hashtag.model'
import { FindManyHashtagArgs } from '~/@generated/hashtag/find-many-hashtag.args'

@Injectable()
export class PostHashtagService {
  constructor(private prisma: PrismaService) {}

  async findAll(args: FindManyHashtagArgs): Promise<Hashtag[]> {
    return await this.prisma.hashtag.findMany(args)
  }

  async search(query: string): Promise<Hashtag[]> {
    return await this.prisma.hashtag.findMany({
      where: {
        tag: {
          contains: query,
          mode: 'insensitive'
        }
      }
    })
  }
}
