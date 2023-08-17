import { registerEnumType } from '@nestjs/graphql';

export enum PostScalarFieldEnum {
    id = "id",
    title = "title",
    mediaUrls = "mediaUrls",
    userId = "userId",
    isHideLikeAndCount = "isHideLikeAndCount",
    isTurnOffComment = "isTurnOffComment",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined })
