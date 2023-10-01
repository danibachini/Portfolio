/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  // i18n: {
  //   // These are all the locales you want to support in
  //   // your application
  //   locales: ['en',  'fr'],
  //   // This is the default locale you want to be used when visiting
  //   // a non-locale prefixed path e.g. `/hello`
  //   defaultLocale: 'en',
  //   // This is a list of locale domains and the default locale they
  //   // should handle (these are only required when setting up domain routing)
  //   domains: [
  //     {
  //       domain: 'danibachini.com',
  //       defaultLocale: 'en',
  //       // other locales that should be handled on this domain
  //       locales: ['fr'],
  //     },
  //   ],
  // },

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
