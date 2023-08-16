-- DropForeignKey
ALTER TABLE "PostHashtag" DROP CONSTRAINT "PostHashtag_postId_fkey";

-- AddForeignKey
ALTER TABLE "PostHashtag" ADD CONSTRAINT "PostHashtag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
