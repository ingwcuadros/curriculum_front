import React from "react";
import { motion } from "framer-motion";

export default function BackgroundBlobs() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.06]"
                style={{
                    background: "radial-gradient(circle, #22D3EE, transparent)",
                    top: "20%",
                    left: "-10%",
                }}
                animate={{
                    x: [0, 80, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.05]"
                style={{
                    background: "radial-gradient(circle, #8B5CF6, transparent)",
                    bottom: "10%",
                    right: "-5%",
                }}
                animate={{
                    x: [0, -60, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.04]"
                style={{
                    background: "radial-gradient(circle, #60A5FA, transparent)",
                    top: "60%",
                    left: "40%",
                }}
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -40, 20, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}