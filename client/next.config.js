/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false // Uploadthing
  },
  images: {
    domains: ['blog.hubspot.com', 'images.unsplash.com', 'plus.unsplash.com', 'uploadthing.com']
  }
}

module.exports = nextConfig
