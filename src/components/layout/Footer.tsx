import { Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/5 py-12 md:py-20">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">

                    {/* Brand Col */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/favicon.svg" alt="TechWheels Logo" className="w-8 h-8" />
                            <span className="font-heading font-bold text-xl tracking-tight text-foreground">TechWheels</span>
                        </div>
                        <p className="text-muted max-w-md text-sm leading-relaxed">
                            We build premium, conversion-focused websites for ambitious growing businesses. Modern technology, fast delivery, and expert execution.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-foreground mb-4">Agency</h4>
                        <ul className="space-y-3">
                            <li><Link to="/portfolio" className="text-muted hover:text-foreground text-sm transition-colors">Work</Link></li>
                            <li><Link to="/process" className="text-muted hover:text-foreground text-sm transition-colors">Process</Link></li>
                            <li><Link to="/pricing" className="text-muted hover:text-foreground text-sm transition-colors">Pricing</Link></li>
                            <li><Link to="/contact" className="text-muted hover:text-foreground text-sm transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="font-heading font-semibold text-foreground mb-4">Connect</h4>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-foreground hover:border-white/30 transition-all">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-foreground hover:border-white/30 transition-all">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-foreground hover:border-white/30 transition-all">
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted text-sm text-center md:text-left">© {new Date().getFullYear()} TechWheels. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-muted hover:text-foreground text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-muted hover:text-foreground text-sm transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
