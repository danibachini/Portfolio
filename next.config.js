/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'thumbnails-portfolio.s3.eu-west-3.amazonaws.com',
            port: '',
            pathname: '**',
          },
        ],
      },
}, nextConfig
