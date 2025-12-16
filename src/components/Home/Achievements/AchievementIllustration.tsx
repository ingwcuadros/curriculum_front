import { motion } from 'framer-motion';


export default function AchievementIllustration() {
    return (
        <svg viewBox="0 0 400 400" className="w-full h-auto">
            {/* Background glow */}
            <defs>
                <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4C9EEB" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#4C9EEB" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#7C4DFF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#7C4DFF" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4C9EEB" />
                    <stop offset="100%" stopColor="#7C4DFF" />
                </linearGradient>
            </defs>

            {/* Animated circles */}
            <motion.circle
                cx="200"
                cy="200"
                r="150"
                fill="none"
                stroke="#4C9EEB"
                strokeWidth="0.5"
                strokeOpacity="0.2"
                animate={{ r: [150, 160, 150] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.circle
                cx="200"
                cy="200"
                r="120"
                fill="none"
                stroke="#7C4DFF"
                strokeWidth="0.5"
                strokeOpacity="0.2"
                animate={{ r: [120, 110, 120] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Central certificate/badge */}
            <motion.g
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <circle cx="200" cy="200" r="60" fill="url(#glow1)" />
                <rect x="160" y="160" width="80" height="80" rx="16" fill="#12151B" stroke="url(#grad1)" strokeWidth="2" />
                <path d="M200 180 L215 200 L200 195 L185 200 Z" fill="#4C9EEB" />
                <rect x="180" y="210" width="40" height="4" rx="2" fill="#4C9EEB" opacity="0.6" />
                <rect x="185" y="220" width="30" height="3" rx="1.5" fill="#7C4DFF" opacity="0.4" />
            </motion.g>

            {/* Floating elements */}
            <motion.g
                animate={{ y: [-10, 10, -10], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
            >
                <circle cx="320" cy="120" r="25" fill="url(#glow2)" />
                <rect x="305" y="105" width="30" height="30" rx="6" fill="#12151B" stroke="#7C4DFF" strokeWidth="1.5" />
                <path d="M320 115 L325 125 L315 125 Z" fill="#22D3EE" />
            </motion.g>

            <motion.g
                animate={{ y: [10, -10, 10], x: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
                <circle cx="80" cy="280" r="20" fill="url(#glow1)" />
                <rect x="65" y="265" width="30" height="30" rx="6" fill="#12151B" stroke="#4C9EEB" strokeWidth="1.5" />
                <rect x="72" y="275" width="16" height="2" rx="1" fill="#4C9EEB" />
                <rect x="72" y="280" width="12" height="2" rx="1" fill="#4C9EEB" opacity="0.6" />
                <rect x="72" y="285" width="14" height="2" rx="1" fill="#4C9EEB" opacity="0.4" />
            </motion.g>

            {/* Connecting lines */}
            <motion.path
                d="M240 175 Q280 120 305 130"
                fill="none"
                stroke="#7C4DFF"
                strokeWidth="1"
                strokeOpacity="0.3"
                strokeDasharray="4 4"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
                d="M160 225 Q120 260 95 275"
                fill="none"
                stroke="#4C9EEB"
                strokeWidth="1"
                strokeOpacity="0.3"
                strokeDasharray="4 4"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Sparkles */}
            {[
                { x: 100, y: 150, delay: 0 },
                { x: 300, y: 250, delay: 0.5 },
                { x: 150, y: 100, delay: 1 },
                { x: 280, y: 320, delay: 1.5 },
            ].map((spark, i) => (
                <motion.circle
                    key={i}
                    cx={spark.x}
                    cy={spark.y}
                    r="2"
                    fill="#22D3EE"
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: spark.delay
                    }}
                />
            ))}
        </svg>
    );
}