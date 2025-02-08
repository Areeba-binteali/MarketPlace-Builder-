/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'],
      unoptimized: true,
    },
    async rewrites() {
      return [
        {
          source: "/:path*",
          destination: "/public/:path*",
        },
      ];
    },
  };
  
  export default nextConfig;
  