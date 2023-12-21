/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: 'https://github.com/WatDaGam/WDG_page',
  output: 'standalone',
};

module.exports = nextConfig
