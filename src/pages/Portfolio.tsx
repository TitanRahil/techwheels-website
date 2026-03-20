import { Portfolio } from '../components/sections/Portfolio';
import { Credibility } from '../components/sections/Credibility';
import { CTA } from '../components/sections/CTA';

export default function PortfolioPage() {
    return (
        <main className="pt-24 min-h-screen">
            <Credibility />
            <Portfolio />
            <CTA />
        </main>
    );
}
