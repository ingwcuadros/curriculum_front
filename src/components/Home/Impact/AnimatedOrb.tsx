import { motion,  } from 'framer-motion';
import {  TrendingUp } from 'lucide-react';

export default function AnimatedOrb() {
  return (
    <div className="relative w-56 h-56 flex items-center justify-center" aria-hidden="true">
      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-dashed border-[#22D3EE]/30"
      />
      {/* Middle rotating ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-6 rounded-full border border-dashed border-[#60A5FA]/25"
      />
      {/* Pulsing glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-12 rounded-full bg-gradient-to-br from-[#22D3EE]/30 to-[#8B5CF6]/30 blur-xl"
      />
      {/* Center icon */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#22D3EE]/20 to-[#8B5CF6]/20 border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-[#22D3EE]/10"
      >
        <TrendingUp className="w-9 h-9 text-[#22D3EE]" strokeWidth={1.5} />
      </motion.div>
      {/* Orbiting dots */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
          style={{ transformOrigin: '50% 50%' }}
        >
          <div
            className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#60A5FA] shadow-sm shadow-[#22D3EE]/50"
            style={{
              top: '4px',
              left: '50%',
              transform: `translateX(-50%) rotate(${deg}deg) translateY(-104px) rotate(-${deg}deg)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}