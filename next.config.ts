


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
            }
        ]
    }

};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);