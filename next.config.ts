import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    output: 'standalone',
    
    async headers() {
        return [
            {
                source: '/(.*)', // aplica a todo el sitio
                headers: [
                    // ✅ Fuerza HTTPS
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },

                    // ✅ Evita clickjacking
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },

                    // ✅ Evita MIME sniffing
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },

                    // ✅ Controla qué referrer se envía
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },

                    // ✅ Restringe APIs del navegador
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()',
                    },

                    // ✅ Política de contenido (CSP)
                    {
                        key: 'Content-Security-Policy',
                        value: `
                        default-src 'self';
                        script-src 'self' 'unsafe-inline' 'unsafe-eval';
                        style-src 'self' 'unsafe-inline';
                        img-src 'self' data: https:;
                        font-src 'self' https: data:;
                        connect-src 'self' https:;
                        frame-ancestors 'self';
                        `
                        .replace(/\s{2,}/g, ' ')
                        .trim(),
                    },
                ],
            },
            ];
        },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fastly.picsum.photos",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "cv-ingwalter.s3.us-east-2.amazonaws.com",
            },
            {
                protocol: "http",
                hostname: "personalweb-cvwalter-rt70pf-306908-46-225-97-207.traefik.me",
            },
            {
                protocol: "https",
                hostname: "media.ingwaltercuadros.com",
            },
        ],
    },
    
    // No queremos source maps en el navegador en producción
    productionBrowserSourceMaps: false,

    experimental: {
        // Esto desactiva los source maps de servidor en producción,
        // pero en dev a veces Next los sigue generando igual.
        serverSourceMaps: false,
    },

    // 👇 Este override es la clave para tu caso
    webpack(config, { isServer, dev }) {
        if (dev && isServer) {
            // Desactivamos los sourcemaps del bundle de servidor en desarrollo
            config.devtool = false;
        }

        return config;
    },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);