import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';


const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: isProd ? '/Evan-Luo-jpg.github.io' : '',
  assetPrefix: isProd ? '/Evan-Luo-jpg.github.io': '',
};

export default nextConfig;
