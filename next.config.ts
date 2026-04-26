import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
};

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/caroline-e-miller-portfolio' : '',
  assetPrefix: isProd ? '/caroline-e-miller-portfolio/' : '',
  env: {
    customKey: 'my-value',
    trailingSlash: true,
  },
}

export default nextConfig;
