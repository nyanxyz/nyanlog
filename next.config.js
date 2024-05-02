/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/Home',
        },
      ],
    };
  },
};

module.exports = nextConfig;
