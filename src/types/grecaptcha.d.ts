// src/types/grecaptcha.d.ts

export { };

declare global {
    interface Grecaptcha {
        ready: (cb: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
    }

    // Variable global inyectada por el script de Google
    const grecaptcha: Grecaptcha;
}