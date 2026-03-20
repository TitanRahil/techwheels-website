import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 20);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#09090b]/98 border-b border-white/5 py-3' : 'bg-transparent py-5'
                }`}
        >
            <motion.div 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative container mx-auto px-6 max-w-7xl flex items-center justify-between"
            >
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-accent-violet to-accent-mint flex items-center justify-center">
                        <span className="text-white font-heading font-bold text-lg">T</span>
                    </div>
                    <span className="font-heading font-bold text-xl tracking-tight text-foreground">TechWheels</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/process" className={`text-sm font-medium transition-colors ${location.pathname === '/process' ? 'text-white' : 'text-muted hover:text-foreground'}`}>Process</Link>
                    <Link to="/portfolio" className={`text-sm font-medium transition-colors ${location.pathname === '/portfolio' ? 'text-white' : 'text-muted hover:text-foreground'}`}>Portfolio</Link>
                    <Link to="/pricing" className={`text-sm font-medium transition-colors ${location.pathname === '/pricing' ? 'text-white' : 'text-muted hover:text-foreground'}`}>Pricing</Link>
                    <Link to="/contact" className="group flex items-center gap-2 text-sm font-medium bg-white text-black px-5 py-2.5 rounded-full hover:bg-white/90 transition-all">
                        Start Project
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </motion.div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 border-b border-white/5 p-6 flex flex-col gap-6 shadow-2xl">
                    <Link to="/process" className="text-lg font-medium text-foreground">Process</Link>
                    <Link to="/portfolio" className="text-lg font-medium text-foreground">Portfolio</Link>
                    <Link to="/pricing" className="text-lg font-medium text-foreground">Pricing</Link>
                    <Link to="/contact" className="flex items-center justify-center gap-2 text-base font-medium bg-white text-black px-5 py-3 rounded-xl">
                        Start Project
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            )}
        </header>
    );
}
