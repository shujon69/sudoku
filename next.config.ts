import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment with a repo name like /mini-sudoku/
  // Uncomment and change the basePath if needed:
  // basePath: '/mini-sudoku',
  // assetPrefix: '/mini-sudoku/',
};

export default nextConfig;
