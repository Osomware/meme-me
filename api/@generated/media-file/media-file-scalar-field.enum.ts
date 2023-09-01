import { registerEnumType } from '@nestjs/graphql';

export enum MediaFileScalarFieldEnum {
    id = "id",
    key = "key",
    url = "url",
    postId = "postId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(MediaFileScalarFieldEnum, { name: 'MediaFileScalarFieldEnum', description: undefined })
