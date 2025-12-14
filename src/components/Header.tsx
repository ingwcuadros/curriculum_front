
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import NavItem from '@/components/navigation/NavItem';
import LanguageSwitcher from '@/components/LanguageSwitcher';

type Props = {
    nombre: string;
};

export default function Header({ nombre }: Props) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const t = useTranslations('navigation');
    const pathname = usePathname();
    const normalizedPath = pathname.split('/').slice(2).join('/') || '/';
    const locale = pathname.split('/')[1] || 'es';
    const isActive = true;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: t('home'), href: `/` },
        { id: 'articles', label: t('articles'), href: `/articles` },
        { id: 'contact', label: t('contact'), href: `/contact` }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#0B0F14]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20 ">
                    {/* Logo */}
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-2xl font-bold text-white tracking-tight focus:outline-none rounded-lg px-2 py-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="text-[#4C9EEB]">{'{'}</span>
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {nombre.split(' ')[0]}
                        </span>
                        <span className="text-[#7C4DFF]">{'}'}</span>
                    </motion.button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1" role="navigation">
                        {navItems.map((item) => (
                            <NavItem key={item.id} item={item} isActive={normalizedPath === item.href} />
                        ))}
                    </nav>

                    {/* Language Selector & Mobile Menu */}
                    <div className="flex items-center gap-3">
                        <LanguageSwitcher locale={locale} />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors focus:outline-none rounded-lg"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#12151B]/95 backdrop-blur-xl border-b border-white/5"
                    >
                        <nav className="px-4 py-4 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                        ? 'bg-[#4C9EEB]/10 text-[#4C9EEB]'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {item.href}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}