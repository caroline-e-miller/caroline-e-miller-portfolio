import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
};

module.exports = {
  output: 'export',
  env: {
    customKey: 'my-value',
  },
}

export default nextConfig;
