import React from 'react';
import { motion } from 'framer-motion';

interface RevealWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function RevealWrapper({ children, className = '', delay = 0 }: RevealWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className={`relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] ${className}`}
        >
            {/* Subtle top reflection for SaaS window feel */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {children}
        </motion.div>
    );
}
