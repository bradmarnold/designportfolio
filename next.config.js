// next.config.js
/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'designportfolio';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: isGitHubPages ? `/${repo}/` : undefined,
  basePath: isGitHubPages ? `/${repo}` : undefined,
};

module.exports = nextConfig;
