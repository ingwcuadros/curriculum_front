// src/app/[locale]/contact/RecaptchaWrapper.tsx
'use client';

import { useEffect } from 'react';

type Props = {
    children: React.ReactNode;
};

export function RecaptchaWrapper({ children }: Props) {
    useEffect(() => {
        // 1. Inyectar el script de reCAPTCHA v3
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
        script.async = true;
        script.defer = true;
        script.id = 'recaptcha-script-contact'; // por si quieres identificarlo
        document.head.appendChild(script);

        return () => {
            // 2. Eliminar la etiqueta <script> que agregamos
            const existingScript = document.getElementById('recaptcha-script-contact');
            if (existingScript && existingScript.parentNode) {
                existingScript.parentNode.removeChild(existingScript);
            }

            // 3. Eliminar el badge de reCAPTCHA si existe
            const badge = document.querySelector('.grecaptcha-badge') as HTMLElement | null;
            if (badge && badge.parentNode) {
                badge.parentNode.removeChild(badge);
            }


            if (typeof window !== 'undefined' && (window as any).grecaptcha) {

                delete (window as any).grecaptcha;
            }
        };
    }, []);

    return <>{children}</>;
}