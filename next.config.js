/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: 'https://WatDaGam.github.io',
  },
  assetPrefix: 'https://WatDaGam.github.io',
  output: 'export',
};

module.exports = nextConfig
