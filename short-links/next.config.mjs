/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true, // Enables support for the `app/` directory inside `src`
    },
  };
  
module.exports = nextConfig;
  