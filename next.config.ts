import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estático: `npm run build` gera a pasta `out/`,
  // que pode ser hospedada em Vercel, Netlify, GitHub Pages, S3 etc.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
