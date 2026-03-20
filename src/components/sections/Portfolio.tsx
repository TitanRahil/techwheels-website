import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';
import { ArrowRight } from 'lucide-react';

import work1 from '../imgs/work_1.jpg';
import work2 from '../imgs/work_2.jpg';
import work3 from '../imgs/work_3.jpg';
import work4 from '../imgs/work_4.jpg';

const projects = [
    {
        title: "The Operator",
        category: "Digital Product",
        image: work1,
        description: "A high-conversion ebook and ecourse selling platform.",
        link: "https://theoperators.netlify.app/"
    },
    {
        title: "Agentica-one",
        category: "AI Agency",
        image: work2,
        description: "A premium corporate presence for a cutting-edge AI solutions agency.",
        link: "https://agentica-one.vercel.app/"
    },
    {
        title: "Blacklines Productions",
        category: "Automotive Store",
        image: work3,
        description: "An immersive e-commerce experience for a bespoke car modifying shop.",
        link: "https://blacklines.netlify.app/"
    },
    {
        title: "Tu Coffee Mai Chai",
        category: "Local Cafe",
        image: work4,
        description: "A warm, inviting digital presence for a beloved local cafe.",
        link: "https://tucoffeemaichai.netlify.app/"
    }
];


export function Portfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
        // Discrete thresholds prevent users from stopping mid-transition.
        // Once a threshold is crossed, the next card fully animates into place.
        if (latest < 0.25) {
            setActiveIndex(0);
        } else if (latest < 0.5) {
            setActiveIndex(1);
        } else if (latest < 0.75) {
            setActiveIndex(2);
        } else {
            setActiveIndex(3);
        }
    });

    return (
        <section id="portfolio" ref={containerRef} className="relative h-[600vh] z-10 overflow-visible" style={{ position: 'relative' }}>
            <div 
                className="sticky top-0 left-0 w-full h-screen sm:h-[100dvh] flex flex-col justify-center py-12 sm:py-16 will-change-transform"
                style={{ transform: 'translate3d(0,0,0)', zIndex: 10 }}
            >
                <div className="container mx-auto px-6 max-w-7xl h-full flex flex-col">
                    
                    {/* Header stripped of sub-text for maximum vertical breathing room */}
                    <div className="mb-8 shrink-0">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight">
                                    Work That Drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet to-accent-mint">Results</span>
                                </h2>
                            </div>
                            <a href="#contact" className="group flex items-center justify-center gap-2 text-sm font-medium bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-full hover:bg-white/10 transition-all hover:scale-105 whitespace-nowrap hidden md:flex mb-2">
                                View All Work
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    <div className="relative flex-1 w-full max-w-5xl mx-auto flex items-center justify-center">
                        {projects.map((project, index) => {
                            return (
                                <Card 
                                    key={index}
                                    i={index}
                                    project={project}
                                    activeIndex={activeIndex}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Internal component for discrete card snapping
function Card({ 
    i, 
    project, 
    activeIndex 
}: { 
    i: number, 
    project: typeof projects[0], 
    activeIndex: number
}) {
    const cardContainerRef = useRef<HTMLDivElement>(null);
    
    // Status flags
    const isFuture = i > activeIndex;

    const transitionProps = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

    return (
        <motion.div
            animate={{ 
                y: isFuture ? "120dvh" : "0dvh", 
                zIndex: i + 10,
            }}
            transition={transitionProps}
            className="absolute top-0 flex items-center justify-center w-full h-[75vh] md:h-[80vh]"
        >
            <motion.div
                ref={cardContainerRef}
                animate={{ 
                    scale: 1, 
                    opacity: 1, 
                    y: 0,
                    top: 0,
                }}
                transition={transitionProps}
                className="relative w-full h-full shadow-2xl"
            >
                {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full group">
                        <SpotlightCard className="w-full h-full rounded-[2rem] overflow-hidden flex flex-col !bg-[#050507] border border-white/10 group shadow-2xl">
                            <div className="relative h-[58%] md:h-[70%] w-full shrink-0 p-3 md:p-4">
                                <div className="relative w-full h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                    />
                                <div className="absolute top-4 left-4 z-20 px-4 py-1.5 rounded-full bg-black/80 border border-white/10">
                                        <p className="text-accent-mint text-xs font-bold tracking-wider uppercase">{project.category}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="px-6 py-4 md:px-10 md:py-6 flex-1 flex flex-col justify-center relative bg-gradient-to-t from-[#050507] to-transparent">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-white mb-1.5 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">{project.title}</h3>
                                        <p className="text-muted text-sm md:text-base leading-relaxed font-medium max-w-xl">{project.description}</p>
                                    </div>
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:-rotate-45" />
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </a>
                ) : (
                    <SpotlightCard className="w-full h-full rounded-[2rem] overflow-hidden flex flex-col !bg-[#050507] border border-white/10 group shadow-2xl">
                        <div className="relative h-[58%] md:h-[70%] w-full shrink-0 p-3 md:p-4">
                            <div className="relative w-full h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 z-20 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                                    <p className="text-accent-mint text-xs font-bold tracking-wider uppercase">{project.category}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="px-6 py-4 md:px-10 md:py-6 flex-1 flex flex-col justify-center relative bg-gradient-to-t from-[#050507] to-transparent">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-white mb-1.5 tracking-tight">{project.title}</h3>
                                    <p className="text-muted text-sm md:text-base leading-relaxed font-medium max-w-xl">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                )}
            </motion.div>
        </motion.div>
    );
}
