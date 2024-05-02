/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/Home',
      },
    ];
  },
};

module.exports = nextConfig;
