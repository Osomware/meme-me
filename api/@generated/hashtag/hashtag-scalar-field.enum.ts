import { registerEnumType } from '@nestjs/graphql';

export enum HashtagScalarFieldEnum {
    id = "id",
    tag = "tag",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(HashtagScalarFieldEnum, { name: 'HashtagScalarFieldEnum', description: undefined })
