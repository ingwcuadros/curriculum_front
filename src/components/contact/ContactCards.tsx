import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileUser } from "lucide-react";

interface CardType {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    value: string;
    href: string;
    color: string;
}

const cards: CardType[] = [
    {
        icon: Mail,
        title: "Email",
        value: "ingwcuadros@gmail.com",
        href: "mailto:ingwcuadros@gmail.com",
        color: "#22D3EE",
    },
    {
        icon: Linkedin,
        title: "LinkedIn",
        value: "/in/ing-walter-cuadros",
        href: "https://www.linkedin.com/in/ing-walter-cuadros/",
        color: "#60A5FA",
    },
    {
        icon: FileUser,
        title: "CV",
        value: "Download CV",
        href: "/cv/cvwaltercuadros.pdf",
        color: "#F59E0B",
    },
];

function ContactCard({ card, index }: { card: CardType; index: number }) {
    return (
        <motion.a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/[0.06] overflow-hidden cursor-pointer"
            style={{ background: "rgba(255,255,255,0.03)" }}
        >
            {/* Glow on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(circle at 50% 100%, ${card.color}15, transparent 70%)`,
                }}
            />

            {/* Border glow */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    boxShadow: `inset 0 0 0 1px ${card.color}30, 0 0 30px ${card.color}10`,
                }}
            />

            {/* Icon */}
            <motion.div
                className="relative z-10 flex items-center justify-center w-14 h-14 rounded-xl mb-5"
                style={{
                    background: `${card.color}10`,
                    border: `1px solid ${card.color}20`,
                }}
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.5 }}
            >

                <span style={{ color: card.color }}>
                    <card.icon className="w-6 h-6" />
                </span>

            </motion.div>

            <h3 className="relative z-10 text-white font-semibold text-sm mb-1">
                {card.title}
            </h3>
            <p className="relative z-10 text-slate-500 text-xs font-mono">
                {card.value}
            </p>
        </motion.a>
    );
}

export default function ContactCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {cards.map((card, i) => (
                <ContactCard key={card.title} card={card} index={i} />
            ))}
        </div>
    );
}