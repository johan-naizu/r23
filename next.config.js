/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com',"localhost", "api.ragam.co.in", "api.staging.ragam.co.in"],
  },
  env:  {
    NEXT_PUBLIC_BACKEND_URL:process.env.BACKEND_URL
  }
}

module.exports = nextConfig
