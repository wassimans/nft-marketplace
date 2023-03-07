/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["eincode.mypinata.cloud", "tailwindui.com"],
  },
};

module.exports = nextConfig;
