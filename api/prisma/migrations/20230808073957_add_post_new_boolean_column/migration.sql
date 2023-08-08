-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "isHideLikeAndCount" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isTurnOffComment" BOOLEAN NOT NULL DEFAULT false;
