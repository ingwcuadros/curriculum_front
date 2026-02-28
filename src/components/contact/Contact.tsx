'use client';

import React from "react";
import { motion } from "framer-motion";
import HeroBanner from "@/components/contact/HeroBanner";
import ContactForm from "@/components/contact/ContactForm";
import ContactCards from "@/components/contact/ContactCards";
import BackgroundBlobs from "@/components/contact/BackgroundBlobs";
import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('contactForm');
    return (
        <div className="min-h-screen" style={{ background: "#0B1020" }}>
            <BackgroundBlobs />

            {/* Hero */}
            <HeroBanner />

            {/* Main content */}
            <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-10">
                {/* Form Section */}
                <section id="contact-form" className="py-20 lg:py-24">
                    <div className="max-w-xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                                    {t('sectionTitle')}
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-3">
                                {t('title')}{" "}
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage: "linear-gradient(135deg, #22D3EE, #8B5CF6)",
                                    }}
                                >
                                    {t('subtitle')}
                                </span>
                            </h2>
                            <p className="text-slate-500 text-sm">
                                {t('description')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="rounded-2xl border border-white/[0.06] p-8 sm:p-10 backdrop-blur-sm"
                            style={{ background: "rgba(255,255,255,0.02)" }}
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
                </section>

                {/* Contact Cards Section */}
                <section className="pb-24 lg:pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center mb-10"
                    >
                        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                                {t('ways')}
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold text-white">
                            {t('message')}
                        </h2>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        <ContactCards />
                    </div>
                </section>
            </div>
        </div>

    );
}