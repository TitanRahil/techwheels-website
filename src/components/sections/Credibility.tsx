import { Zap, Target, Smartphone, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';
import { RevealWrapper } from '../ui/RevealWrapper';
import { SpotlightCard } from '../ui/SpotlightCard';
import bgImage from '../imgs/Space_stars_earth_lower_part_8c0e21eb7d.jpg';
import mobileBg from '../imgs/section3 bg.jpg';

const features = [
    {
        icon: <Zap className="w-6 h-6 text-accent-violet" />,
        title: "Fast Launch Timelines",
        description: "We build and deploy your website in weeks, not months. Speed to market is entirely prioritized.",
    },
    {
        icon: <Target className="w-6 h-6 text-accent-mint" />,
        title: "Conversion-Focused",
        description: "Every element is designed with one goal: turning your casual visitors into paying customers.",
    },
    {
        icon: <Smartphone className="w-6 h-6 text-accent-violet" />,
        title: "Mobile-First Design",
        description: "Over 60% of traffic is mobile. We ensure your site looks and performs flawlessly on every device.",
    },
    {
        icon: <Gauge className="w-6 h-6 text-accent-mint" />,
        title: "Optimized Performance",
        description: "Lightning-fast load times improve SEO rankings and keep your users engaged from the first click.",
    }
];

export function Credibility() {
    return (
        <section id="credibility" className="py-16 md:py-32 relative z-10 overflow-hidden [clip-path:inset(0)]">
            {/* Desktop Background Layer */}
            <div
                className="hidden lg:block absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            
            {/* Mobile Fixed Background Layer (using clip-path + fixed for absolute stationarity) */}
            <div className="lg:hidden fixed inset-0 -z-20 pointer-events-none">
                <img 
                    src={mobileBg} 
                    alt="" 
                    className="w-full h-full object-cover" 
                    style={{ transform: 'translate3d(0,0,0)' }} 
                />
                {/* Middle ground overlay for mobile to ensure image visibility while keeping text readable */}
                <div className="absolute inset-0 bg-[#060608]/65" />
            </div>

            {/* Desktop-only dark overlay */}
            <div className="hidden lg:block absolute inset-0 -z-10 bg-[#060608]/65" />

            <div className="container mx-auto px-6 max-w-7xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 tracking-tight">
                        Why Top Businesses Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet to-accent-mint">TechWheels</span>
                    </h2>
                    <p className="text-muted text-lg md:text-xl leading-relaxed">
                        We don't just build websites; we build absolute growth engines. Our approach combines cutting-edge technology with proven sales psychology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <RevealWrapper key={i} delay={i * 0.1} className="bg-transparent border-none p-0 shadow-none backdrop-blur-none inline-block w-full">
                            <SpotlightCard className="h-full p-8 rounded-2xl flex flex-col items-start">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-inner relative group-hover:scale-110 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-accent-violet/20 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-heading font-bold text-foreground mb-4 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-muted leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </SpotlightCard>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
