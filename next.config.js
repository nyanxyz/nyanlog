/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/',
      destination: '/Home',
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
