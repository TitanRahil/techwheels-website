
import { SpotlightCard } from '../ui/SpotlightCard';
import { LayoutTemplate, Clock, Code2, LineChart, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const advantages = [
    {
        icon: <LineChart className="w-6 h-6 text-accent-violet" />,
        title: "Built for Conversions",
        description: "Every layout, button, and color choice is engineered to guide users toward contacting you or making a purchase."
    },
    {
        icon: <Clock className="w-6 h-6 text-accent-mint" />,
        title: "Fast Turnaround",
        description: "We utilize modern frameworks and a streamlined process to get your new website live in record time."
    },
    {
        icon: <LayoutTemplate className="w-6 h-6 text-accent-violet" />,
        title: "Modern Premium Design",
        description: "Stand out from competitors with clean, SaaS-style aesthetics that instantly build trust and authority."
    },
    {
        icon: <Code2 className="w-6 h-6 text-accent-mint" />,
        title: "Mobile Optimized",
        description: "Fully responsive layouts that provide an app-like experience for users browsing on smartphones and tablets."
    },
    {
        icon: <Cpu className="w-6 h-6 text-accent-violet" />,
        title: "Scalable Architecture",
        description: "Built on a robust technology stack that grows alongside your business without requiring costly rebuilds."
    }
];

export function WhyUs() {
    return (
        <section className="py-24 relative z-10 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none -z-10 opacity-20" style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.4) 0%, rgba(0,0,0,0) 70%)' }} />

            <div className="container mx-auto px-6 max-w-7xl relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-8 text-foreground leading-tight tracking-tight">
                            The TechWheels <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-[#9b82ff] to-accent-mint">Advantage</span>
                        </h2>
                        <p className="text-muted text-lg md:text-xl md:leading-relaxed mb-10 max-w-lg font-medium">
                            We aren't just web developers. We are technical partners dedicated to accelerating your business growth through superior digital architecture.
                        </p>
                        <div className="flex flex-col gap-8">
                            {advantages.slice(0, 2).map((adv, i) => (
                                <div key={i} className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-500 relative">
                                        <div className="absolute inset-0 bg-accent-violet/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {adv.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-heading font-bold text-foreground mb-2 mt-1">{adv.title}</h4>
                                        <p className="text-muted text-sm leading-relaxed font-medium">{adv.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <SpotlightCard className="p-8 md:p-12 rounded-3xl bg-[#09090C]/80 border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 -z-10 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(62,242,194,0.4) 0%, rgba(0,0,0,0) 70%)' }} />
                            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-30 -z-10 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.4) 0%, rgba(0,0,0,0) 70%)' }} />

                            <h3 className="text-2xl font-heading font-bold mb-10 text-white tracking-tight">Engineered for Excellence</h3>

                            <div className="flex flex-col gap-8">
                                {advantages.slice(2).map((adv, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-500 relative">
                                            <div className="absolute inset-0 bg-accent-mint/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {adv.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-heading font-bold text-foreground mb-2 mt-1">{adv.title}</h4>
                                            <p className="text-muted text-sm leading-relaxed font-medium">{adv.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SpotlightCard>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
