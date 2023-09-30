/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    EMAIL: process.env.EMAIL,
    EMAIL_PASS: process.env.EMAIL_PASS,

  },

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
