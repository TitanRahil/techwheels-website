import { RevealWrapper } from '../ui/RevealWrapper';
import { SpotlightCard } from '../ui/SpotlightCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTA() {
    return (
        <section id="contact" className="py-32 relative z-10 mt-16">
            <div className="container mx-auto px-6 max-w-5xl">
                <RevealWrapper className="p-0 border-none bg-transparent shadow-none">
                    <SpotlightCard className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] px-6 py-12 sm:p-12 md:p-24 text-center flex flex-col items-center justify-center border-white/20">

                        {/* Animated Background Gradients inside the CTA block */}
                        <div className="absolute inset-0 bg-[#0A0A0E]/80 -z-20" />
                        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-40 -z-10 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.4) 0%, rgba(0,0,0,0) 70%)' }} />
                        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-40 -z-10 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(62,242,194,0.4) 0%, rgba(0,0,0,0) 70%)' }} />

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold text-white mb-6 sm:mb-8 leading-[1.1] max-w-4xl tracking-tight">
                            Ready to launch your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet to-accent-mint drop-shadow-none">business website?</span>
                        </h2>
                        <p className="text-muted text-base sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                            Stop losing customers to your competition. Partner with TechWheels today to build a digital presence that actually drives revenue.
                        </p>

                        <Link to="/contact" className="group relative inline-flex items-center justify-center gap-2 text-base sm:text-xl font-bold bg-white text-black px-7 py-4 sm:px-10 sm:py-5 rounded-full overflow-hidden transition-all hover:scale-105">
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Project
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                            {/* Subtle button gleam */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-black/10 to-transparent skew-x-12" />
                        </Link>

                        <p className="text-muted text-sm mt-8 font-medium bg-white/5 px-4 py-2 rounded-full border border-white/10">
                            Typical response time: Under 2 hours.
                        </p>
                    </SpotlightCard>
                </RevealWrapper>
            </div>
        </section>
    );
}
