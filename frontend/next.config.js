/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/cv",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
