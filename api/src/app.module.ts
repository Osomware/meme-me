import { join } from 'path'
import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'

import { AuthModule } from '~/auth/auth.module'
import { UserModule } from '~/user/user.module'
import { PostModule } from './post/post.module'
import { PrismaService } from '~/prisma/prisma.service'
import { LikePostModule } from './like-post/like-post.module'
import { AccessTokenGuard } from '~/auth/guards/accessToken.guard'
import { FollowUserModule } from './follow-user/follow-user.module'
import { PostHashtagModule } from './post-hashtag/post-hashtag.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),
    AuthModule,
    UserModule,
    PostModule,
    FollowUserModule,
    PostHashtagModule,
    LikePostModule
  ],
  controllers: [],
  providers: [PrismaService, { provide: APP_GUARD, useClass: AccessTokenGuard }]
})
export class AppModule {}
