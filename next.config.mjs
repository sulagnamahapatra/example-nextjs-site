/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'aceternity.com',
            port: '',
            pathname: '/images/**',
          },
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            port: '',
            pathname: '/demos/**',
          },
        ],
    },
    transpilePackages: ['@lobehub/ui']
};

export default nextConfig;
