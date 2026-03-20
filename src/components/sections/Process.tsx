import { RevealWrapper } from '../ui/RevealWrapper';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Search, PenTool, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import processBg from '../imgs/process.png';

const steps = [
    {
        icon: <Search className="w-8 h-8 text-accent-violet" />,
        title: "1. Strategy",
        description: "We dive deep into your business goals, target audience, and competition to map out a clear path to high conversions."
    },
    {
        icon: <PenTool className="w-8 h-8 text-foreground" />,
        title: "2. Build",
        description: "Our team designs and develops a premium, high-performance website using modern architecture and best practices."
    },
    {
        icon: <Rocket className="w-8 h-8 text-accent-mint" />,
        title: "3. Launch",
        description: "We deliver a lightning-fast, fully optimized site that's ready to generate leads and scale your business from day one."
    }
];

export function Process() {
    return (
        <section id="process" className="py-24 relative z-10 overflow-hidden bg-black">
            {/* Solid black background for the section */}
            <div className="absolute inset-0 -z-10 bg-black" />

            {/* Top Grid Pattern overlay */}
            <div className="absolute inset-x-0 top-0 bottom-1/2 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_60%,transparent)] pointer-events-none">
                <div 
                    className="absolute inset-0 bg-[#000000]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '15px 15px',
                        transform: 'perspective(1000px) rotateX(-70deg) translateY(50px) scale(3)',
                        transformOrigin: 'bottom center'
                    }}
                />
            </div>

            {/* Bottom Grid Pattern overlay */}
            <div className="absolute inset-x-0 bottom-0 top-1/2 -z-10 overflow-hidden [mask-image:linear-gradient(to_top,transparent_0%,black_60%,transparent)] pointer-events-none">
                <div 
                    className="absolute inset-0 bg-[#000000]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '15px 15px',
                        transform: 'perspective(1000px) rotateX(70deg) translateY(-50px) scale(3)',
                        transformOrigin: 'top center'
                    }}
                />
            </div>
            {/* Center ambient glow for the grids - simplified without blur filter */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] rounded-full pointer-events-none -z-10 opacity-30" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)' }} />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 tracking-tight">
                            A Streamlined Process for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet to-accent-mint">Success</span>
                        </h2>
                    </motion.div>

                    {/* Desktop Image: Kept between text and cards */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="hidden md:block relative w-full max-w-4xl mx-auto h-[400px] lg:h-[450px] mt-4 mb-4 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl z-0 pointer-events-none"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${processBg})` }}
                        />
                        <div className="absolute inset-0 bg-[#060608]/20" />
                    </motion.div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-0 md:gap-8 relative">
                    {steps.map((step, i) => (
                        <div key={i} className="contents">
                            <RevealWrapper delay={i * 0.15} className="relative z-10 p-0 bg-transparent border-none shadow-none">
                                <SpotlightCard className="p-10 text-center rounded-3xl h-full bg-black/10 border border-white/30 shadow-lg transition-all duration-300 hover:border-accent-violet/50 hover:shadow-accent-violet/10 hover:shadow-xl">
                                    <div className="relative w-24 h-24 mx-auto mb-8">
                                        <div className="absolute inset-x-0 bottom-0 top-1/2 rounded-full z-0 opacity-50" style={{ background: 'radial-gradient(ellipse at bottom, rgba(123,97,255,0.3) 0%, rgba(0,0,0,0) 70%)' }} />
                                        <div className="absolute inset-0 bg-transparent rounded-2xl flex items-center justify-center border border-white/30 shadow-lg z-10 group-hover:scale-110 group-hover:border-accent-violet/50 transition-all duration-500">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-foreground mb-4 tracking-tight">{step.title}</h3>
                                    <p className="text-muted leading-relaxed font-medium">{step.description}</p>
                                </SpotlightCard>
                            </RevealWrapper>

                            {/* Mobile Image: Inserted after the Strategy card (index 0) */}
                            {i === 0 && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    className="md:hidden relative w-full h-[500px] -mt-24 -mb-24 z-0 pointer-events-none"
                                >
                                    <div
                                        className="absolute inset-0 bg-contain bg-center bg-no-repeat scale-[1.5]"
                                        style={{ backgroundImage: `url(${processBg})` }}
                                    />
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
