import { Hero } from '../components/sections/Hero';
import { Showcase } from '../components/sections/Showcase';
import { Credibility } from '../components/sections/Credibility';
import { Portfolio } from '../components/sections/Portfolio';
import { Process } from '../components/sections/Process';
import { Pricing } from '../components/sections/Pricing';
import { WhyUs } from '../components/sections/WhyUs';
import { CTA } from '../components/sections/CTA';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Showcase />
            <Credibility />
            <div id="portfolio-section">
                <Portfolio />
            </div>
            <div id="process-section">
                <Process />
            </div>
            <div id="pricing-section">
                <Pricing />
            </div>
            <WhyUs />
            <CTA />
        </main>
    );
}
