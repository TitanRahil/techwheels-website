import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        requirements: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const validateForm = () => {
        if (!formData.name.trim()) return "Name is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Valid email is required.";
        if (!/^\d{10}$/.test(formData.phone)) return "Phone number must be exactly 10 digits.";
        if (!formData.requirements.trim()) return "Project vision/requirements are required.";
        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const validationError = validateForm();
        if (validationError) {
            setErrorMessage(validationError);
            setStatus('error');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('https://notifier-techwheels-754369800088.us-central1.run.app/notify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to send message.');
            }

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', requirements: '' });
            
            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        if (status === 'error') {
            setStatus('idle');
            setErrorMessage('');
        }
    };

    return (
        <main className="pt-32 pb-24 min-h-screen relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none -z-10 opacity-20 blur-[100px]" style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.4) 0%, rgba(0,0,0,0) 70%)' }} />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left side: Heading */}
                    <div>
                        <motion.h1 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-5xl md:text-7xl font-heading font-extrabold mb-8 tracking-tight leading-[1.1]"
                        >
                            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet to-accent-mint">Legendary</span>
                        </motion.h1>
                        <p className="text-muted text-lg md:text-xl mb-12 font-medium leading-relaxed">
                            Have a project in mind? We're currently accepting new clients for Q2 2024. Reach out and let's discuss your vision.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex flex-col">
                                <span className="text-sm font-bold uppercase tracking-widest text-accent-mint mb-2">Email Us</span>
                                <a href="mailto:hello@techwheels.com" className="text-2xl font-bold text-foreground hover:text-accent-violet transition-colors">hello@techwheels.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden"
                    >
                         {/* Subtle Glow inside card */}
                        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent-violet/10 rounded-full blur-[60px]" />

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-muted ml-2">Full Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe" 
                                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-accent-violet/50 transition-all text-foreground"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-muted ml-2">Email Address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com" 
                                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-accent-violet/50 transition-all text-foreground"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-muted ml-2">Phone Number</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="1234567890" 
                                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-accent-violet/50 transition-all text-foreground"
                                    maxLength={10}
                                    pattern="\d{10}"
                                    title="Please enter exactly 10 digits"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-muted ml-2">Project Vision</label>
                                <textarea 
                                    rows={4}
                                    name="requirements"
                                    value={formData.requirements}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..." 
                                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-accent-violet/50 transition-all text-foreground resize-none"
                                    required
                                />
                            </div>

                            <AnimatePresence mode="wait">
                                {status === 'error' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }} 
                                        animate={{ opacity: 1, y: 0 }} 
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-xl text-sm"
                                    >
                                        <AlertCircle className="w-4 h-4 shrink-0" />
                                        <p>{errorMessage}</p>
                                    </motion.div>
                                )}
                                {status === 'success' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }} 
                                        animate={{ opacity: 1, y: 0 }} 
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2 text-accent-mint bg-accent-mint/10 px-4 py-3 rounded-xl text-sm"
                                    >
                                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                                        <p>Message sent successfully! We'll be in touch soon.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button 
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full group bg-white text-black py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 transition-all shadow-xl"
                            >
                                {status === 'loading' ? (
                                    <>
                                        Sending...
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
