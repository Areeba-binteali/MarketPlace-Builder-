/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'],
      unoptimized: true,
    },
    async rewrites() {
      return [
        {
          source: "/public/:path*",
          destination: "/:path*", // Public folder exclude kar raha hai
        },
      ];
    },
  };
  
  export default nextConfig;
  