await import('./src/env.mjs');
import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '/a/ek8hyk1349/*',
      },
    ],
  },
};

export default withContentCollections(nextConfig);
