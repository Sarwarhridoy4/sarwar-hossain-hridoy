/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',   // allows any hostname
        port: '',
        pathname: '/**',  // allows any path
      },
    ],
  },
};
