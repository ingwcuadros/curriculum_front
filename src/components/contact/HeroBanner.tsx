import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTranslations } from 'next-intl';


export default function HeroBanner() {
    const ref = useRef(null);
    const t = useTranslations('contactPage');
    const imageUrl = process.env.NEXT_PUBLIC_BASE_URL_IMAGE + "lanorando.webp"; // URL de la imagen en S3
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.2]);

    const scrollToForm = () => {
        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={ref}
            className="relative w-full min-h-[75vh] lg:min-h-[82vh] overflow-hidden flex items-center"
            style={{ background: "#0B1020" }}
        >
            {/* Background grid */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Gradient blobs */}
            <motion.div
                className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[120px]"
                style={{
                    background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)",
                    opacity: glowOpacity,
                }}
                animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
                style={{
                    background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
                }}
                animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Content container */}
            <div className="relative z-10 w-full">
                <div className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch min-h-[60vh] lg:min-h-[70vh]">

                    {/* Text side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 lg:py-0 px-6 lg:pl-16 xl:pl-24 lg:pr-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                <span className="text-xs font-medium tracking-widest uppercase text-cyan-300/80">
                                    {t('tagline')}
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-white mb-6">
                                {t('title') + " "}
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage: "linear-gradient(135deg, #22D3EE, #60A5FA, #8B5CF6)",
                                    }}
                                >
                                    {t('subtitle')}
                                </span>
                            </h1>

                            <p className="text-lg text-slate-400 leading-relaxed max-w-md mb-10">
                                {t('message')}
                            </p>

                            <motion.button
                                onClick={scrollToForm}
                                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg, #22D3EE, #60A5FA, #8B5CF6)",
                                }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Gloss effect */}
                                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
                                    }}
                                />
                                <span className="relative z-10">{t('cta')}</span>
                                <ArrowDown className="relative z-10 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Image side */}
                    <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end overflow-hidden">
                        <motion.div
                            className="relative w-full h-[50vh] lg:h-full min-h-[350px]"

                        >
                            <motion.img
                                src={imageUrl}
                                alt="Product Owner en entorno tecnológico futurista"
                                className="w-full h-full object-cover object-center"
                                initial={{ opacity: 0, scale: 1.04 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                    maskImage: "linear-gradient(to left, black 45%, transparent 90%)",
                                    WebkitMaskImage: "linear-gradient(to left, black 45%, transparent 90%)",
                                }}
                            />

                            {/* Neon glow overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent opacity-60 pointer-events-none" />
                            <div
                                className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none"
                                style={{
                                    background: "radial-gradient(ellipse at 60% 50%, rgba(34,211,238,0.3), transparent 70%)",
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B1020] to-transparent" />

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
                onClick={scrollToForm}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Scroll</span>
                <motion.div
                    className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1"
                >
                    <motion.div
                        className="w-1 h-1.5 rounded-full bg-cyan-400"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}