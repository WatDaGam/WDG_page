/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: 'https://github.com/WatDaGam/WatDaGam.github.io',
  output: 'export',
};

module.exports = nextConfig
