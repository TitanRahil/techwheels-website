import { Pricing } from '../components/sections/Pricing';
import { WhyUs } from '../components/sections/WhyUs';
import { CTA } from '../components/sections/CTA';

export default function PricingPage() {
    return (
        <main className="pt-24 min-h-screen">
            <Pricing />
            <div className="py-12">
                <WhyUs />
            </div>
            <CTA />
        </main>
    );
}
