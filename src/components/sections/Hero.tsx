import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import earthHero from '../imgs/earth_hero.png';
import heroCube from '../imgs/hero-cube.png';
import hero3 from '../imgs/hero_3.png';
import { LoadingScreen } from '../ui/LoadingScreen';

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);
    const [loadedImagesCount, setLoadedImagesCount] = useState(0);

    const handleImageLoad = () => {
        setLoadedImagesCount(prev => prev + 1);
    };

    const isHeroLoading = loadedImagesCount < 3;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Fade out the fixed overlay as user scrolls past the 800vh proxy container
    // Stays fully visible until 85%, then fades to 0 by 100%
    const heroOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);
    const heroPointerEvents = useTransform(scrollYProgress, (v: number) => v >= 0.95 ? 'none' : 'auto');

    useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
        // Step thresholds on the new 700vh track
        if (latest < 0.30) { 
            setActiveStep(0);
        } else if (latest < 0.60) { 
            setActiveStep(1);
        } else {
            setActiveStep(2);
        }
    });

    // Increased duration to slow down the transition slightly as requested
    const transitionProps = { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const };

    return (
        <>
            <AnimatePresence>
                {isHeroLoading && <LoadingScreen />}
            </AnimatePresence>
            <section ref={containerRef} className="relative h-[700vh] bg-background pt-[1px] z-10 overflow-hidden" style={{ position: 'relative' }}>
            <motion.div
                style={{ opacity: heroOpacity, pointerEvents: heroPointerEvents, willChange: 'opacity' }}
                className="fixed inset-0 w-full h-full flex flex-col justify-start pt-30 sm:pt-20 lg:pt-0 lg:justify-center pb-4 lg:pb-0 bg-background z-20 overflow-hidden"
            >

                {/* Background Glows Wrapper (Isolated to prevent horizontal scroll without breaking sticky) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                    <div
                        className="absolute top-1/4 -right-1/4 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full opacity-80"
                        style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.2) 0%, rgba(0,0,0,0) 70%)' }}
                    />
                    <div
                        className="absolute bottom-1/4 -left-1/4 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full opacity-50"
                        style={{ background: 'radial-gradient(circle, rgba(62,242,194,0.15) 0%, rgba(0,0,0,0) 70%)' }}
                    />
                </div>
                <div className="container mx-auto px-5 sm:px-6 max-w-6xl h-full flex flex-col justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-4 lg:gap-12 items-center w-full">

                        {/* Left Text Column */}
                        <div className="grid grid-cols-1 grid-rows-1 place-items-center lg:place-items-start text-center lg:text-left w-full lg:pl-10 relative z-30">
                            {/* Step 1 Content */}
                            <motion.div
                                animate={{
                                    opacity: activeStep === 0 ? 1 : 0,
                                    y: activeStep === 0 ? 0 : (activeStep > 0 ? -15 : 15),
                                    pointerEvents: activeStep === 0 ? 'auto' : 'none'
                                }}
                                transition={transitionProps}
                                className="col-start-1 row-start-1 w-full flex flex-col items-center lg:items-start tracking-tight pt-28 sm:pt-0 mb-[-2rem] sm:mb-0"
                            >
                                <h1 className="text-[1.65rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-4 sm:mb-6 text-foreground leading-[1.1] sm:leading-[1.05]">
                                    Websites That Turn Visitors Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-[#9b82ff] to-accent-mint">Customers</span>
                                </h1>
                                <p className="text-sm sm:text-base md:text-lg text-muted mb-6 sm:mb-6 max-w-xl mx-auto lg:mx-0 font-medium">
                                    Modern, conversion-focused architecture built for growing businesses.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                                    <Link to="/contact" className="group relative flex items-center justify-center gap-2 text-sm sm:text-base font-medium bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 transition-all shadow-lg">
                                        Start Your Project
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link to="/portfolio" className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium bg-white/5 border border-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/10 transition-all hover:scale-105">
                                        View Portfolio
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Step 2 Content */}
                            <motion.div
                                animate={{
                                    opacity: activeStep === 1 ? 1 : 0,
                                    y: activeStep === 1 ? 0 : (activeStep < 1 ? 15 : -15),
                                    pointerEvents: activeStep === 1 ? 'auto' : 'none'
                                }}
                                transition={transitionProps}
                                className="col-start-1 row-start-1 w-full flex flex-col items-center lg:items-start tracking-tight"
                            >
                                <h2 className="text-[1.65rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-2 sm:mb-6 text-foreground leading-[1.1] sm:leading-[1.05]">
                                    Grow Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-[#9b82ff] to-accent-mint">Online</span>
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-muted mb-4 sm:mb-6 max-w-xl mx-auto lg:mx-0 font-medium">
                                    Reach more customers with a globally scaled, hyper-fast digital storefront.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                                    <Link to="/pricing" className="group flex items-center justify-center gap-2 text-sm sm:text-base font-medium bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 transition-all shadow-lg">
                                        View Pricing
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Step 3 Content */}
                            <motion.div
                                animate={{
                                    opacity: activeStep === 2 ? 1 : 0,
                                    y: activeStep === 2 ? 0 : (activeStep < 2 ? 15 : -15),
                                    pointerEvents: activeStep === 2 ? 'auto' : 'none'
                                }}
                                transition={transitionProps}
                                className="col-start-1 row-start-1 w-full flex flex-col items-center lg:items-start tracking-tight"
                            >
                                <h2 className="text-[1.65rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-2 sm:mb-6 text-foreground leading-[1.1] sm:leading-[1.05]">
                                    Dominate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-[#9b82ff] to-accent-mint">Market</span>
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-muted mb-4 sm:mb-6 max-w-xl mx-auto lg:mx-0 font-medium">
                                    Outperform competitors with cutting-edge design and bulletproof technical SEO.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                                    <Link to="/contact" className="group flex items-center justify-center gap-2 text-sm sm:text-base font-medium bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 transition-all shadow-lg">
                                        Start Your Project
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Graphics Column */}
                        <div className="grid grid-cols-1 grid-rows-1 place-items-center w-full relative z-20 mt-0 lg:mt-0 max-h-[45vh] sm:max-h-[40vh] lg:max-h-none">

                            {/* Glow behind mockups */}
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] shrink-0 h-[300px] rounded-full -z-10 pointer-events-none opacity-80"
                                style={{ background: 'radial-gradient(circle, rgba(62,242,194,0.3) 0%, rgba(0,0,0,0) 70%)' }}
                            />

                            {/* Desktop Mockup */}
                            <motion.div
                                animate={{
                                    opacity: activeStep === 0 ? 1 : 0,
                                    scale: activeStep === 0 ? 1 : 0.95,
                                    rotateX: activeStep === 0 ? 0 : 10,
                                    y: activeStep === 0 ? 0 : -20,
                                    pointerEvents: activeStep === 0 ? 'auto' : 'none'
                                }}
                                transition={transitionProps}
                                className="col-start-1 row-start-1 w-full max-w-[220px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[380px] lg:max-w-[600px] aspect-square flex items-center justify-center z-10"
                            >
                                <style>
                                    {`
                                        @keyframes custom-hologram {
                                            0%, 100% { transform: translateY(0px); }
                                            50% { transform: translateY(-20px); }
                                        }
                                    `}
                                </style>
                                <div className="relative w-full h-full flex flex-col items-center justify-center">
                                    {/* Holographic Cube */}
                                    <div 
                                        className="relative z-10 w-[85%] h-[85%] will-change-transform"
                                        style={{ animation: 'custom-hologram 4s ease-in-out infinite' }}
                                    >
                                        <img 
                                            src={heroCube} 
                                            alt="Showcase Cube" 
                                            className="w-full h-full object-contain"
                                            loading="eager"
                                            fetchPriority="high"
                                            onLoad={handleImageLoad}
                                        />
                                    </div>
                                    
                                    {/* Subtle Underglow Shadow - Simplified for performance */}
                                    <div className="absolute bottom-[5%] w-[50%] h-[20px] bg-accent-mint/30 rounded-[100%]" style={{ filter: 'blur(10px)' }} />
                                </div>
                            </motion.div>

                            {/* Earth Graphic */}
                            <motion.div
                                animate={{
                                    opacity: activeStep === 1 ? 1 : 0,
                                    scale: activeStep === 1 ? 1 : 0.95,
                                    rotateY: activeStep === 1 ? 0 : (activeStep < 1 ? -10 : 10),
                                    y: activeStep === 1 ? 0 : (activeStep < 1 ? 20 : -20),
                                    pointerEvents: activeStep === 1 ? 'auto' : 'none'
                                }}
                                transition={transitionProps}
                                className="col-start-1 row-start-1 w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[600px] aspect-square flex items-center justify-center will-change-transform z-20"
                            >
                                <div className="w-full h-full relative">
                                    <img 
                                        src={earthHero} 
                                        alt="Earth Hero" 
                                        className="w-full h-full object-contain animate-[spin_60s_linear_infinite] will-change-transform"
                                        loading="eager"
                                        fetchPriority="high"
                                        onLoad={handleImageLoad}
                                    />
                                </div>
                            </motion.div>

                            {/* Hero 3 Image */}
                            <motion.div
                                animate={{
                                    opacity: activeStep === 2 ? 1 : 0,
                                    scale: activeStep === 2 ? 1 : 0.95,
                                    y: activeStep === 2 ? 0 : 20,
                                    rotateY: activeStep === 2 ? 0 : -10,
                                    pointerEvents: activeStep === 2 ? 'auto' : 'none'
                                }}
                                transition={transitionProps}
                                className="col-start-1 row-start-1 w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[600px] aspect-square flex items-center justify-center z-30"
                            >
                                <div className="relative w-full h-full flex flex-col items-center justify-center">
                                    {/* Holographic Graphic */}
                                    <div 
                                        className="relative z-10 w-[85%] h-[85%] will-change-transform"
                                        style={{ animation: 'custom-hologram 4s ease-in-out infinite' }}
                                    >
                                        <img 
                                            src={hero3} 
                                            alt="Hero Graphic 3" 
                                            className="w-full h-full object-contain"
                                            loading="eager"
                                            onLoad={handleImageLoad}
                                        />
                                    </div>
                                    
                                    {/* Subtle Underglow Shadow - Simplified for performance */}
                                    <div className="absolute bottom-[5%] w-[50%] h-[20px] bg-accent-mint/30 rounded-[100%]" style={{ filter: 'blur(10px)' }} />
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
        </>
    );
}
