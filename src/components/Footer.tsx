
'use client';


import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, Twitter, Globe, Heart } from 'lucide-react';

export default function Footer() {

    const t = useTranslations('navigation');
    const socialIcons = {
        LinkedIn: Linkedin,
        GitHub: Github,
        X: Twitter,
        Portfolio: Globe,
    };

    const techBadges = [
        { name: 'NestJS', color: '#E0234E' },
        { name: 'Vue/Next', color: '#42B883' },
        { name: 'GCP', color: '#4285F4' },
        { name: 'Ibexa CMS', color: '#F15A24' },
    ];

    const data = {
        nombre: "Walter Giovanny Cuadros Rincon",
        rol_principal: "Cloud Solutions Architect · Delivery Manager · Product Owner Técnico",
        pitch_breve: "Ayudo a equipos a construir soluciones escalables en la nube, con foco en producto, arquitectura y operación.",
        tags_principales: ["#Cloud", "#Architect", "#ProductOwner", "#DeliveryManager", "#AI", "#GCP", "#NestJS"],
        url_foto_principal: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
        url_cv_pdf: "#",
        links_redes: {
            LinkedIn: "https://linkedin.com",
            GitHub: "https://github.com",
            X: "https://x.com",
            Portfolio: "#"
        },
        año_actual: new Date().getFullYear(),
    };


    return (
        <footer className="relative py-16 lg:py-24 overflow-hidden" >
            {/* Background */}
            < div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] to-[#12151B]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
                    {/* Brand column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-2xl font-bold text-white mb-4">
                            <span className="text-[#4C9EEB]">{"{"}</span>
                            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Walter Giovanny Cuadros Rincón
                            </span>
                            <span className="text-[#7C4DFF]">{"}"}</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                            {t("pitch")}
                        </p>

                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-2">
                            {techBadges.map((tech, index) => (
                                <motion.span
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10"
                                    style={{ color: tech.color }}
                                >
                                    {tech.name}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-white font-semibold mb-6">{t("labelSocialMedia")}</h3>
                        <div className="flex flex-wrap gap-3">
                            {Object.entries(data.links_redes).map(([name, url], index) => {
                                const Icon = socialIcons[name as keyof typeof socialIcons] || Globe;
                                return (
                                    <motion.a
                                        key={name}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#4C9EEB]/50 hover:bg-[#4C9EEB]/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4C9EEB] focus:ring-offset-2 focus:ring-offset-[#0B0F14]"
                                        aria-label={`Visit ${name}`}
                                    >
                                        <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#4C9EEB] transition-colors" />
                                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{name}</span>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>


                </div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="pt-8 border-t border-white/5"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm text-center sm:text-left">
                            {`© ${data.año_actual} ${data.nombre}. All rights reserved.`}
                        </p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">

                            <span>{t("message")}</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4C9EEB]/30 to-transparent" />
        </footer >
    );
}