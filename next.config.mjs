await import('./src/env.mjs');
import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        port: '',
        pathname: '/hello_world/images/**',
      },
    ],
  },
};

export default withContentCollections(nextConfig);
