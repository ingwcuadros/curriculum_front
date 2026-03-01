
'use client';

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { FIELD_CONFIG } from "@/components/contact/FIELD_CONFIG";
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';



function InputField({ id, config, value, onChange, error, touched }: {
    id: string;
    config: { type: string; label: string; placeholder: string; validate: (value: string) => string | null };
    value: string;
    onChange: (id: string, value: string) => void;
    error: string | null;
    touched: boolean;
}) {
    const isTextarea = config.type === "textarea";
    const hasError = touched && error;
    const Tag = isTextarea ? "textarea" : "input";

    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-sm font-medium text-slate-300">
                {config.label}
            </label>
            <div className="relative group">
                <Tag
                    id={id}
                    name={id}
                    type={!isTextarea ? config.type : undefined}
                    placeholder={config.placeholder}
                    value={value}
                    onChange={(e) => onChange(id, e.target.value)}
                    rows={isTextarea ? 5 : undefined}
                    aria-invalid={hasError ? "true" : "false"}
                    aria-describedby={hasError ? `${id}-error` : undefined}
                    className={`
            w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-slate-500
            bg-white/[0.04] border backdrop-blur-sm
            transition-all duration-300 outline-none resize-none
            ${hasError
                            ? "border-red-500/50 focus:border-red-400"
                            : "border-white/[0.08] focus:border-cyan-400/50"
                        }
            focus:bg-white/[0.06]
            focus:shadow-[0_0_0_3px_rgba(34,211,238,0.08)]
          `}
                />
                {/* Animated focus glow */}
                <div
                    className="absolute -inset-px rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(139,92,246,0.15))",
                        filter: "blur(1px)",
                        zIndex: -1,
                    }}
                />
            </div>
            <AnimatePresence>
                {hasError && (
                    <motion.p
                        id={`${id}-error`}
                        role="alert"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="text-xs text-red-400 flex items-center gap-1.5"
                    >
                        <AlertCircle className="w-3 h-3" />
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}

function SuccessState() {
    const t = useTranslations('contactSuccess');
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative text-center py-12 px-6"
        >
            {/* Particles */}
            {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        background: i % 2 === 0 ? "#22D3EE" : "#8B5CF6",
                        left: `${20 + Math.random() * 60}%`,
                        bottom: "40%",
                    }}
                    animate={{
                        y: [0, -80 - Math.random() * 60],
                        x: [0, (Math.random() - 0.5) * 40],
                        opacity: [1, 0],
                        scale: [1, 0.3],
                    }}
                    transition={{
                        duration: 1.5 + Math.random(),
                        delay: i * 0.12,
                        repeat: Infinity,
                        repeatDelay: 2,
                    }}
                />
            ))}

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                style={{
                    background: "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(96,165,250,0.15))",
                    boxShadow: "0 0 40px rgba(34,211,238,0.2)",
                }}
            >
                <CheckCircle2 className="w-8 h-8 text-cyan-400" />
            </motion.div>

            <h3 className="text-xl font-semibold text-white mb-2">{t('title')}</h3>
            <p className="text-slate-400 text-sm">
                {t('subtitle')}
            </p>
        </motion.div>
    );
}

export default function ContactForm() {
    const locale = useLocale();

    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [cooldown, setCooldown] = useState(false);
    const honeypotRef = useRef(null);

    const handleChange = (field: string, value: string) => {
        setForm((p) => ({ ...p, [field]: value }));
        if (touched[field]) {
            const err = FIELD_CONFIG[locale][field].validate(value);
            setErrors((p) => ({ ...p, [field]: err }));
        }
    };

    const handleBlur = (field) => {
        setTouched((p) => ({ ...p, [field]: true }));
        const err = FIELD_CONFIG[locale][field].validate(form[field]);
        setErrors((p) => ({ ...p, [field]: err }));
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();



        if (cooldown || status === "loading") {

            return;
        }

        // Check honeypot

        if (honeypotRef.current?.value) {

            return;
        }

        // Validate all
        const allTouched = { name: true, email: true, message: true };
        setTouched(allTouched as any);

        const newErrors: Record<string, string | null> = {};


        Object.keys(FIELD_CONFIG[locale] || {}).forEach((key) => {
            const err = FIELD_CONFIG[locale][key].validate((form as any)[key]);
            if (err) newErrors[key] = err;
        });

        setErrors(newErrors as any);

        if (Object.keys(newErrors).length > 0) {

            return;
        }



        setStatus("loading");
        setCooldown(true);

        try {


            if (typeof window === "undefined" || typeof grecaptcha === "undefined") {
                throw new Error("reCAPTCHA no está disponible");
            }
            await new Promise<void>((resolve) => {
                grecaptcha.ready(() => resolve());
            });

            const recaptchaToken = await grecaptcha.execute(
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string,
                { action: "submit" }
            );

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...form, recaptchaToken }),
            });



            if (!res.ok) {
                const text = await res.text().catch(() => '');
                console.error('[ContactForm] Response not OK, body:', text);
                throw new Error('Error al enviar el formulario');
            }

            setStatus('success');
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error('[ContactForm] catch error:', err);
            setStatus('error');
        } finally {
            setTimeout(() => {

                setCooldown(false);
            }, 2000);
        }
    };
    if (status === "success") {
        return (
            <div
                className="rounded-2xl border border-white/[0.06] overflow-hidden"
                style={{ background: "rgba(255,255,255,0.03)" }}
            >
                <SuccessState />
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-live="polite">
            {/* Honeypot */}
            <input
                ref={honeypotRef}
                type="text"
                name="middleField"
                tabIndex={-1}
                autoComplete="off"
                className="absolute opacity-0 h-0 w-0 pointer-events-none"
                aria-hidden="true"
            />

            {Object.keys(FIELD_CONFIG[locale]).map((key) => (
                <div key={key} onBlur={() => handleBlur(key)}>
                    <InputField
                        id={key}
                        config={FIELD_CONFIG[locale][key]}
                        value={form[key]}
                        onChange={handleChange}
                        error={errors[key]}
                        touched={touched[key]}
                    />
                </div>
            ))}

            {status === "error" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-red-500/20 bg-red-500/5 text-sm text-red-300"
                >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Hubo un error al enviar. Inténtalo de nuevo.
                </motion.div>
            )}

            <motion.button
                type="submit"
                disabled={status === "loading" || cooldown}
                className="group relative w-full py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden disabled:opacity-60"
                style={{
                    background: "linear-gradient(135deg, #22D3EE, #60A5FA, #8B5CF6)",
                }}
                whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.99 }}
            >
                {/* Gloss */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                        background: "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.12) 50%, transparent 75%)",
                    }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === "loading" ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Enviando…
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4" />
                            Enviar mensaje
                        </>
                    )}
                </span>
            </motion.button>
        </form>
    );
}