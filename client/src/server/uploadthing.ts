import { createUploadthing } from 'uploadthing/next-legacy'

const f = createUploadthing()

// * File Router -- Can contain multiple files
export const ourFileRouter = {
  // * Takes a 4 2mb images and/or 1 256mb video
  mediaPost: f({
    image: { maxFileSize: '32MB', maxFileCount: 10 },
    video: { maxFileSize: '256MB', maxFileCount: 5 }
  }).onUploadComplete(() => {})
}

export type OurFileRouter = typeof ourFileRouter
