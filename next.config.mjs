/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // This means it's a permanent redirect (HTTP status 308)
      },
    ];
  },
};

export default nextConfig;
