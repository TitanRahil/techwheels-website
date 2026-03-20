import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Clock, Zap } from 'lucide-react';

export function Showcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // 0 to 0.15 (60vh) pauses the section keeping it stationary as a physical barrier.
    // 0.15 to 0.85 scrolls the screen content strictly within the bounds.
    // 0.85 to 1.0 (60vh) provides a generous pause buffer at the end before Credibility slides up.
    // We use a responsive end value: mobile needs more scroll because items stack vertically.
    const scrollEnd = isMobile ? "-82%" : "-72%";
    const contentY = useTransform(scrollYProgress, [0.15, 0.85], ["0%", scrollEnd]);

    return (
        <section ref={containerRef} id="showcase" className="relative h-[400vh] bg-transparent z-40 -mt-[100vh] overflow-visible" style={{ position: 'relative' }}>
            {/* The main sticky block that acts like a new window sliding up OVER the Hero */}
            <div 
                className="sticky top-0 left-0 w-full h-screen sm:h-[100dvh] min-h-screen sm:min-h-[100dvh] flex flex-col items-center justify-center pt-20 sm:pt-24 pb-8 border-t border-white/10 rounded-t-[2rem] sm:rounded-t-[3rem] bg-[#050507] will-change-transform"
                style={{ transform: 'translate3d(0,0,0)', zIndex: 40 }}
            >

                {/* Window opening drag handle indicator */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-white/10 rounded-full" />

                <div className="container mx-auto px-4 sm:px-6 max-w-6xl text-center mb-4 relative z-20 shrink-0">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight drop-shadow-lg">
                        Why Great Websites <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet to-accent-mint">Grow Businesses</span>
                    </h2>
                </div>

                {/* PC Mockup Container */}
                <div className="relative w-full max-w-[1200px] mx-auto px-6 flex-1 min-h-[400px]">
                    {/* Intense glow behind PC using performant radial gradient instead of blur */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-30 select-none pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.4) 0%, rgba(0,0,0,0) 70%)' }} />

                    <div className="relative h-full bg-[#121217] rounded-t-2xl border-8 border-b-0 border-[#2A2A35] overflow-hidden flex flex-col">
                        {/* Browser Bar */}
                        <div className="h-10 bg-[#1E1E24] border-b border-white/5 flex items-center px-4 gap-2 shrink-0 relative z-20 shadow-sm">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                            </div>
                            <div className="mx-auto bg-black/40 h-6 w-1/2 max-w-md rounded-md border border-white/5 flex items-center px-3 justify-center shadow-inner">
                                <span className="text-white/30 text-xs font-mono tracking-wide">techwheels.agency/growth-engine</span>
                            </div>
                        </div>

                        {/* Screen Content Window */}
                        <div className="flex-1 relative overflow-hidden bg-[#09090C] border-inner border-white/5">
                            <motion.div
                                style={{ y: contentY, willChange: 'transform' }}
                                className="absolute top-0 left-0 w-full pt-10 px-8 pb-10 flex flex-col gap-8"
                            >
                                {/* 1. Hero Cover inside Mockup */}
                                <div className="w-full bg-[#0D0D12] rounded-3xl border border-white/10 p-10 lg:p-14 flex flex-col items-center justify-center relative shadow-2xl shrink-0 overflow-hidden group/hero">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-[0.08] group-hover/hero:scale-105 transition-transform duration-700" />
                                    
                                    {/* Static background glows for performance instead of animated blur */}
                                    <div 
                                        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-40" 
                                        style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.4) 0%, rgba(0,0,0,0) 70%)' }} 
                                    />
                                    <div 
                                        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none opacity-30" 
                                        style={{ background: 'radial-gradient(circle, rgba(62,242,194,0.3) 0%, rgba(0,0,0,0) 70%)' }} 
                                    />


                                    <div className="relative z-10 text-center max-w-3xl">
                                        <div 
                                            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-xs font-bold mb-8 tracking-wider uppercase"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet mr-2" />
                                            Active Growth Engine
                                        </div>
                                        <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                                            Your Website Is Your Most Powerful{" "}
                                            <motion.span 
                                                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                                style={{ backgroundSize: '200% 200%' }}
                                                className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-white to-accent-mint"
                                            >
                                                Sales Tool
                                            </motion.span>
                                        </h3>
                                        <p className="text-white/60 text-lg lg:text-xl mb-4 font-medium leading-relaxed max-w-2xl mx-auto">A great website does more than look good — it builds trust, attracts customers, and helps your business grow around the clock.</p>
                                    </div>
                                </div>

                                {/* 2. Feature Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
                                    {[
                                        { title: "Builds Instant Trust", desc: "Most customers judge a business within seconds. A professional website establishes credibility immediately.", icon: <Shield className="w-5 h-5 text-accent-violet" />, accent: "accent-violet" },
                                        { title: "Works 24/7", desc: "Unlike a physical store, your website never closes. It continues attracting visitors at any time.", icon: <Clock className="w-5 h-5 text-accent-mint" />, accent: "accent-mint" },
                                        { title: "Converts Visitors", desc: "A well-designed website guides visitors toward taking action — whether booking or buying.", icon: <Zap className="w-5 h-5 text-blue-400" />, accent: "blue-400" }
                                    ].map((feat, i) => (
                                        <motion.div 
                                            key={i}
                                            whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                                            className="group bg-white/[0.03] rounded-2xl border border-white/10 p-6 flex flex-col gap-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-white/20"
                                        >
                                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center shadow-inner shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                                {feat.icon}
                                            </div>
                                            <h4 className="text-white font-bold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">{feat.title}</h4>
                                            <p className="text-white/50 text-sm leading-relaxed font-medium">{feat.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* 3. Analytics Growth Chart */}
                                <div className="w-full bg-[#0D0D12] rounded-3xl border border-white/10 p-8 lg:p-12 flex flex-col shadow-2xl relative overflow-hidden shrink-0 group/chart">
                                    <div className="absolute top-0 right-0 w-64 h-64 opacity-50 select-none pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.2) 0%, rgba(0,0,0,0) 70%)' }} />
                                    
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center shadow-xl backdrop-blur-sm group-hover/chart:scale-110 transition-transform duration-500">
                                                <span className="text-accent-violet font-bold text-2xl">📈</span>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-xl tracking-tight">Traffic & Conversions</h4>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
                                                    <p className="text-white/40 text-sm font-medium">Real-time performance tracking</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            {['D', 'W', 'M', 'Y'].map((t) => (
                                                <div key={t} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border transition-all ${t === 'M' ? 'bg-accent-violet border-accent-violet text-white shadow-lg shadow-accent-violet/20' : 'bg-white/5 border-white/10 text-white/40'}`}>
                                                    {t}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="h-[280px] w-full flex items-end gap-3 sm:gap-6 lg:gap-8 relative px-2">
                                        {/* Dynamic Grid Lines */}
                                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                                            {[1,2,3,4].map(i => <div key={i} className="w-full border-t border-white/10" />)}
                                        </div>

                                        <div className="flex-1 bg-white/5 rounded-t-2xl h-[30%] border-t border-white/10 relative group-hover/chart:bg-white/10 transition-all duration-500">
                                            <div className="absolute -top-1 w-full h-1 bg-white/20 blur-sm rounded-full" />
                                        </div>
                                        <div className="flex-1 bg-white/10 rounded-t-2xl h-[45%] border-t border-white/10 relative group-hover/chart:bg-white/20 transition-all duration-500">
                                            <div className="absolute -top-1 w-full h-1 bg-white/30 blur-sm rounded-full" />
                                        </div>
                                        <div className="flex-1 bg-accent-violet/30 rounded-t-2xl h-[65%] border-t border-accent-violet/50 relative group-hover/chart:bg-accent-violet/40 transition-all duration-500">
                                            <div className="absolute -top-1 w-full h-1 bg-accent-violet/60 blur-sm rounded-full" />
                                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/50" />
                                        </div>
                                        <div className="flex-1 bg-gradient-to-t from-accent-mint/40 via-accent-mint/60 to-accent-mint/80 rounded-t-2xl h-[95%] relative border-t border-accent-mint group-hover/chart:from-accent-mint/50 transition-all duration-500 shadow-[0_0_30px_rgba(62,242,194,0.15)]">
                                            <div className="absolute -top-1 w-full h-1 bg-accent-mint blur-sm rounded-full animate-pulse" />
                                            {/* Data points */}
                                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/40" />

                                            <motion.div 
                                                animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black px-3 py-1.5 rounded-xl shadow-[0_10px_30px_rgba(255,255,255,0.3)] whitespace-nowrap z-20"
                                            >
                                                +320% ROI
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* 4. Statistic Strip Banner */}
                                <div className="w-full bg-gradient-to-br from-accent-violet/20 via-[#1A1A24] to-accent-mint/15 rounded-3xl border border-white/10 p-10 flex flex-col lg:flex-row items-center justify-between shadow-lg relative overflow-hidden shrink-0 group/banner">
                                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(123,97,255,0.1),transparent_70%)]" />
                                    
                                    <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left relative z-10">
                                        <div className="relative">
                                            <span className="text-6xl lg:text-7xl font-black text-white/90 tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">75%</span>
                                            <div className="absolute -inset-2 bg-accent-violet/20 blur-2xl rounded-full -z-10 group-hover/banner:bg-accent-violet/40 transition-all duration-500" />
                                        </div>
                                        <p className="text-white/80 text-xl font-semibold max-w-sm leading-snug tracking-tight">
                                            of customers <span className="text-white underline decoration-accent-violet/50 underline-offset-4">judge credibility</span> based directly on a business’s website.
                                        </p>
                                    </div>

                                    <div className="mt-8 lg:mt-0 flex flex-col items-center gap-4 relative z-10">
                                        <div className="flex gap-2 p-1.5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl shadow-inner group-hover/banner:border-white/20 transition-all">
                                            <div className="w-4 h-4 rounded-full bg-accent-violet shadow-[0_0_10px_rgba(123,97,255,0.5)]" />
                                            <div className="w-4 h-4 rounded-full bg-accent-mint shadow-[0_0_10px_rgba(62,242,194,0.5)]" />
                                            <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                        </div>
                                        <span className="text-white/30 text-[10px] uppercase font-black tracking-[0.2em]">Verified Insight</span>
                                    </div>
                                </div>

                            </motion.div>
                        </div>

                        {/* Bottom PC highlight (chin) */}
                        <div className="h-8 bg-[#1A1A22] border-t border-white/5 shrink-0 flex items-center justify-center z-20">
                            <div className="w-16 h-1 bg-white/5 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
