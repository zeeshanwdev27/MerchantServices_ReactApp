import PagesSectionTitle from "../../../components/pages-sectiontitle";
import { Star, TrendingUp } from "lucide-react";


export default function HR_Support() {
    return (
        <section id="pricing" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32 border-t divide-gray-200">
            <div className="p-4 pt-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                    icon={Star  }
                    title="Industries We Support with Real Solutions"
                    subtitle="We provide specialized merchant accounts tailored for a wide range of high-risk industries. Our services support online gaming and gambling, including fantasy sports and betting platforms, as well as adult entertainment, ensuring full compliance with regulations and privacy requirements. We assist businesses in the CBD and cannabis sector by navigating complex banking relationships, and support travel and timeshare companies in managing seasonal fluctuations. Subscription services benefit from reliable recurring billing solutions, while nutraceuticals and supplements receive FDA compliance guidance. Tech support and telemarketing businesses gain chargeback prevention tools, and e-cigarette and vaping companies access industry-specific risk management. We also offer specialized processing solutions for firearms and ammunition, real-time transaction processing for fantasy sports betting, fraud prevention tools for online dating services, secure payment integration for cryptocurrency services, subscription management for high-ticket coaching, and compliance and security measures for forex trading."
                />
            </div>

            <div className="p-4 pt-20  pb-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                icon={TrendingUp  }
                    title="Solutions Tailored to Your Specific Needs"
                    subtitle="Every business is unique, and we treat yours that way. We take time to understand your specific challenges, whether it’s high ticket sizes, recurring billing needs, or chargeback concerns. Our solutions adapt to your business model, not the other way around. We provide the tools and support you need to process payments reliably and grow your business with confidence."
                />
            </div>
        </section>
    )
}