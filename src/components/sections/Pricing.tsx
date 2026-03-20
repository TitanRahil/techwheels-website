import { RevealWrapper } from '../ui/RevealWrapper';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
    {
        name: "Launch Site",
        price: "$199",
        description: "Perfect for new businesses needing a professional online presence immediately.",
        features: [
            "Up to 5 Pages",
            "Premium Design",
            "Mobile Responsive",
            "Basic SEO Setup",
            "Contact Forms",
            "1 Week Turnaround"
        ],
        highlighted: false
    },
    {
        name: "Growth Site",
        price: "$599",
        description: "Our most popular package. Designed to convert traffic into qualified leads.",
        features: [
            "Up to 10 Pages",
            "Custom Animations",
            "CMS Integration",
            "Advanced SEO Optimization",
            "Speed Optimization (99+ Score)",
            "Analytics Integration",
            "3 Weeks Turnaround"
        ],
        highlighted: true
    },
    {
        name: "Authority Site",
        price: "Custom",
        description: "For established businesses that need complex functionality and premium branding.",
        features: [
            "Unlimited Pages",
            "Custom Web Applications",
            "E-commerce Capabilities",
            "Advanced Third-party Integrations",
            "Dedicated Project Manager",
            "Priority Maintenance Setup",
            "Custom Timeline"
        ],
        highlighted: false
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 relative z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none -z-10 opacity-10" style={{ background: 'radial-gradient(circle, rgba(62,242,194,0.4) 0%, rgba(0,0,0,0) 70%)' }} />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 tracking-tight">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-muted text-lg md:text-xl leading-relaxed">
                            No hidden fees or surprise invoices. Choose the package that fits your business goals and start scaling today.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
                    {tiers.map((tier, i) => {
                        const isGrowth = tier.highlighted;

                        return (
                            <div key={i} className={`relative h-full ${isGrowth ? '-mt-8 mb-8 md:mb-0 md:-mt-8 z-20' : 'z-10'}`}>
                                {isGrowth && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-violet to-accent-mint px-6 py-1.5 rounded-full text-sm font-bold text-white uppercase tracking-widest shadow-[0_0_20px_rgba(123,97,255,0.5)] whitespace-nowrap z-50">
                                        Most Popular
                                    </div>
                                )}
                                <RevealWrapper
                                    delay={i * 0.1}
                                    className="flex flex-col p-0 border-none shadow-none bg-transparent h-full relative"
                                >
                                    <SpotlightCard
                                    className={`flex-1 flex flex-col p-8 md:p-10 rounded-[2rem] ${isGrowth
                                        ? 'border-accent-violet/30 bg-gradient-to-b from-[#1E1B2E] to-[#121217]'
                                        : 'border-white/10 bg-[#0F0F12]/80'
                                        }`}
                                    spotlightColor={isGrowth ? "rgba(123,97,255,0.25)" : "rgba(255,255,255,0.05)"}
                                >
                                    <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{tier.name}</h3>
                                    <p className="text-muted text-sm mb-6 min-h-[40px] font-medium leading-relaxed">{tier.description}</p>

                                    <div className="mb-8">
                                        <span className="text-4xl md:text-6xl font-extrabold text-foreground font-heading tracking-tight">{tier.price}</span>
                                    </div>

                                    <ul className="space-y-4 mb-10 flex-1">
                                        {tier.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <div className={`mt-1 p-0.5 rounded-full ${isGrowth ? 'bg-accent-mint/20 text-accent-mint' : 'bg-white/10 text-white'}`}>
                                                    <Check className="w-4 h-4 shrink-0" />
                                                </div>
                                                <span className="text-foreground/80 font-medium text-sm leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href="#contact"
                                        className={`w-full text-center py-4 rounded-xl font-bold transition-all ${isGrowth
                                            ? 'bg-white text-black hover:bg-white/90 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]'
                                            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                                            }`}
                                    >
                                        {tier.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                                    </a>
                                </SpotlightCard>
                            </RevealWrapper>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
