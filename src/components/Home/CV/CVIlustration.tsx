
'use client'
import { motion } from 'framer-motion';


export default function CVIllustration() {
    return (
        <svg width="200" height="200" viewBox="0 0 200 200" className="w-full h-auto" >
            <defs>
                <linearGradient id="cvGrad1" x1="0%" y1="0%" x2="100%" y2="100%" >
                    <stop offset="0%" stopColor="#4C9EEB" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#7C4DFF" stopOpacity="0.3" />
                </linearGradient>
                < linearGradient id="cvGrad2" x1="0%" y1="0%" x2="100%" y2="100%" >
                    <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#4C9EEB" stopOpacity="0.4" />
                </linearGradient>
            </defs>

            {/* Documents stack */}
            <motion.g
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }
                }
            >
                {/* Back document */}
                < rect x="50" y="65" width="90" height="110" rx="6" fill="#161B22" stroke="#4C9EEB" strokeWidth="1.5" opacity="0.5" />

                {/* Middle document */}
                < rect x="55" y="60" width="90" height="110" rx="6" fill="#161B22" stroke="#7C4DFF" strokeWidth="1.5" opacity="0.7" />

                {/* Front document */}
                < rect x="60" y="55" width="90" height="110" rx="8" fill="#12151B" stroke="url(#cvGrad1)" strokeWidth="2" />

                {/* Document lines */}
                < rect x="70" y="70" width="50" height="3" rx="1.5" fill="#4C9EEB" opacity="0.6" />
                <rect x="70" y="80" width="60" height="3" rx="1.5" fill="#7C4DFF" opacity="0.5" />
                <rect x="70" y="90" width="45" height="3" rx="1.5" fill="#22D3EE" opacity="0.4" />
                <rect x="70" y="100" width="55" height="3" rx="1.5" fill="#4C9EEB" opacity="0.4" />
                <rect x="70" y="110" width="40" height="3" rx="1.5" fill="#7C4DFF" opacity="0.3" />
            </motion.g>

            {/* Floating checkmarks */}
            <motion.g
                animate={{ x: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
                <circle cx="160" cy="50" r="12" fill="url(#cvGrad2)" />
                <path d="M156 50 L159 53 L164 47" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </motion.g>

            < motion.g
                animate={{ x: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
                <circle cx="40" cy="80" r="10" fill="url(#cvGrad2)" />
                <path d="M37 80 L39 82 L43 77" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </motion.g>

            {/* Stars */}
            {
                [
                    { x: 30, y: 140, delay: 0 },
                    { x: 165, y: 120, delay: 0.5 },
                    { x: 170, y: 160, delay: 1 },
                ].map((star, i) => (
                    <motion.circle
                        key={i}
                        cx={star.x}
                        cy={star.y}
                        r="2"
                        fill="#22D3EE"
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: star.delay
                        }}
                    />
                ))}
        </svg>
    );
}