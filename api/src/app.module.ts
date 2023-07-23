import { join } from 'path'
import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'

import { AuthModule } from '~/auth/auth.module'
import { UserModule } from '~/user/user.module'
import { PrismaService } from '~/prisma/prisma.service'
import { AccessTokenGuard } from '~/auth/guards/accessToken.guard'

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
    UserModule
  ],
  controllers: [],
  providers: [PrismaService, { provide: APP_GUARD, useClass: AccessTokenGuard }]
})
export class AppModule {}
