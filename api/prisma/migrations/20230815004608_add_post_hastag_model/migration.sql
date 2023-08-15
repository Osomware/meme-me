/*
  Warnings:

  - You are about to drop the `_PostHashtags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PostHashtags" DROP CONSTRAINT "_PostHashtags_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostHashtags" DROP CONSTRAINT "_PostHashtags_B_fkey";

-- DropTable
DROP TABLE "_PostHashtags";

-- CreateTable
CREATE TABLE "PostHashtag" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "hashtagId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PostHashtag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PostHashtag_postId_hashtagId_key" ON "PostHashtag"("postId", "hashtagId");

-- AddForeignKey
ALTER TABLE "PostHashtag" ADD CONSTRAINT "PostHashtag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostHashtag" ADD CONSTRAINT "PostHashtag_hashtagId_fkey" FOREIGN KEY ("hashtagId") REFERENCES "Hashtag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
