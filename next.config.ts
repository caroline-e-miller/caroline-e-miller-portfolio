import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/caroline-e-miller-portfolio',
  /* config options here */
};

module.exports = {
  env: {
    customKey: 'my-value',
  },
}

export default nextConfig;
