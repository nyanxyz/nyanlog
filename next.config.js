/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/{/}?', // see https://github.com/vercel/next.js/issues/40549#issuecomment-1278844506
        destination: '/Home',
      },
    ];
  },
};

module.exports = nextConfig;
