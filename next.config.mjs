/** @type {import('next').NextConfig} */
const repoName = "portfolio";
const isPagesBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  basePath: isPagesBuild ? `/${repoName}` : "",
  assetPrefix: isPagesBuild ? `/${repoName}/` : "",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isPagesBuild ? `/${repoName}` : ""
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
