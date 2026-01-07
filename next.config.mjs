/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Typescript errors ki wajah se build nahi rukegi
    ignoreBuildErrors: true,
  },
  eslint: {
    // Linting errors ko ignore karega
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;