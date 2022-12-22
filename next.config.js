/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ['themoviedb.org', 'image.tmdb.org'],
  },
};

module.exports = nextConfig;
