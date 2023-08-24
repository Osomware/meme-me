import { registerEnumType } from '@nestjs/graphql';

export enum FollowScalarFieldEnum {
    id = "id",
    followerId = "followerId",
    followingId = "followingId",
    createdAt = "createdAt"
}


registerEnumType(FollowScalarFieldEnum, { name: 'FollowScalarFieldEnum', description: undefined })
