import Footer from "./components/footer";
import LenisScroll from "./components/lenis";
import Navbar from "./components/navbar";
import FaqSection from "./sections/faq-section";
import FeaturesSection from "./sections/features-section";
import HeroSection from "./sections/hero-section";
import PricingSection from "./sections/pricing-section";
import StatsSection from "./sections/stats-section";
import MerchantIntegration from "./sections/merchant-integration";
import StartProcessing from "./sections/start-processing";

export default function App() {
    return (
        <div>
            <LenisScroll />
            <Navbar />

            <HeroSection />
            <FeaturesSection />
            <PricingSection />
            <FaqSection />
            <MerchantIntegration />
            <StatsSection />
            <StartProcessing />
            <Footer />
        </div>
    )
}