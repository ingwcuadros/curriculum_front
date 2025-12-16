
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavItem({ item, isActive }: { item: any; isActive: boolean }) {
    return (
        <Link
            href={item.href}
            className={`relative px-4 py-2 text-base font-sans font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4C9EEB] focus-visible:ring-offset-2 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white '
                }`}
        >
            {item.label}
            {isActive && (
                <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0  left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-[#4C9EEB] to-[#7C4DFF] rounded-full "
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
            )}
        </Link>
    );
}