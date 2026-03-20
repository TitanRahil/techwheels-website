import { motion } from 'framer-motion';

export function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
            aria-live="polite"
            aria-busy="true"
        >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                {/* Outer ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-t-2 border-accent-violet border-r-2 border-r-transparent border-b-2 border-b-transparent border-l-2 border-l-transparent opacity-80"
                />
                
                {/* Inner ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute inset-2 rounded-full border-b-2 border-accent-mint border-l-2 border-l-transparent border-t-2 border-t-transparent border-r-2 border-r-transparent opacity-80"
                />
                
                {/* Center pulse */}
                <motion.div
                    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                />
            </div>
            <motion.p 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="mt-8 text-sm sm:text-base font-medium text-white/70 tracking-widest uppercase"
            >
                Loading Experienc<span className="text-accent-violet">e</span>
            </motion.p>
        </motion.div>
    );
}
