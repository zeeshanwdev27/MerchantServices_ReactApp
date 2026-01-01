import PagesSectionTitle from "../../../components/pages-sectiontitle";
import { Star, TrendingUp } from "lucide-react";


export default function HR_WhyCHoose() {
    return (
        <section id="pricing" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32 border-t divide-gray-200">
            <div className="p-4 pt-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                    icon={Star  }
                    title="Why You Need a Specialized High Risk Merchant Account"
                    subtitle="Traditional payment processors often don’t understand high-risk businesses. They apply one-size-fits-all rules that don’t work for your industry. We specialize in high-risk processing because we know these businesses need unique solutions. Our team has deep experience in regulatory compliance, risk management, and industry-specific challenges. This expertise means we can help you navigate common issues and find sustainable solutions."
                />
            </div>

            <div className="p-4 pt-20  pb-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                icon={TrendingUp  }
                    title="Real Benefits That Matter to Your Business"
                    subtitle="Stop worrying about payment processing and focus on growing your business. Our solutions include practical benefits like chargeback prevention tools, fraud detection systems, and recurring billing options. We offer competitive rates despite high-risk classification, and we’re transparent about all fees upfront. Plus, you get a dedicated account manager who understands your industry and is available when you need help."
                />
            </div>
        </section>
    )
}