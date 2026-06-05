/** @type {import('next').NextConfig} */
const repoName = "portfolio";
const isPagesBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  basePath: isPagesBuild ? `/${repoName}` : "",
  assetPrefix: isPagesBuild ? `/${repoName}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
