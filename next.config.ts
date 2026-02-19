


import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fastly.picsum.photos'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'cv-ingwalter.s3.us-east-2.amazonaws.com'
            },
            {
                protocol: 'http',
                hostname: 'personalweb-cvwalter-rt70pf-306908-46-225-97-207.traefik.me'
            }

        ]
    }

};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);