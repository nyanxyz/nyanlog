/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return {
      afterFiles: [
        {
          source: '/',
          destination: '/Home',
        },
      ],
    };
  },
};

module.exports = nextConfig;
