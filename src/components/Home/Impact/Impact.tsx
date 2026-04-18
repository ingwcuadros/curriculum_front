"use client";
import { motion, useInView } from 'framer-motion';
import React, { useRef } from "react";
import { Rocket, Layers, Users, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { Variants } from "framer-motion";
import AnimatedOrb from './AnimatedOrb';

export default function Impact() {
    const traslation = useTranslations('impact');
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

    const icons = [
        Rocket,
        Layers,
        Users,
        TrendingUp,
    ];
    const descriptions = [
        traslation('Rocket'),
        traslation('Layers'),
        traslation('Users'),
        traslation('TrendingUp'),
    ];


    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            x: -24,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
            duration: 0.5,
            ease: "easeOut",
            },
        },
    };


  return (
    <section
      ref={ref}
      aria-labelledby="impact-heading"
      className="relative py-20 lg:py-28 overflow-hidden bg-[#0B0F14]"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse,_#22D3EE08_0%,_transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse,_#8B5CF608_0%,_transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center order-2 lg:order-1"
          >
            <AnimatedOrb />
          </motion.div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            {/* Section badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#22D3EE]/15 to-[#60A5FA]/15 border border-[#22D3EE]/25 text-[#22D3EE] text-xs font-semibold mb-5 backdrop-blur-sm"
            >
              <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
              {traslation('track')}
            </motion.div>

            {/* Heading */}
            <motion.h2
              id="impact-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight"
            >
              {traslation('title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-gray-400 text-base mb-8"
            >
              {traslation('sub')}
            </motion.p>

            {/* Items */}
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-4"
              aria-label={traslation('title')}
            >
              
            {icons.map((Icon, i) => (
                <motion.li
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.07] hover:border-[#22D3EE]/20 transition-all duration-300 group"
                >
                    <div
                    className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-[#22D3EE]/20 to-[#60A5FA]/20 border border-[#22D3EE]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                    >
                    <Icon className="w-4.5 h-4.5 text-[#22D3EE]" strokeWidth={1.8} size={18} />
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{descriptions[i]}</p>
                </motion.li>
            ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}