import { registerEnumType } from '@nestjs/graphql';

export enum LikeScalarFieldEnum {
    id = "id",
    userId = "userId",
    postId = "postId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(LikeScalarFieldEnum, { name: 'LikeScalarFieldEnum', description: undefined })
