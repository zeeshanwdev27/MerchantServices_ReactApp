import PagesSectionTitle from "../../../components/pages-sectiontitle";
import { Star, TrendingUp } from "lucide-react";


export default function FP_WhyChoose() {

    return (
        <section id="pricing" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32 border-t divide-gray-200">
            <div className="p-4 pt-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                    icon={Star  }
                    title="How Does Advanced Fraud Prevention Benefit Your Business?"
                    subtitle="Our fraud detection and prevention services help you minimize financial losses, protect your reputation, and maintain customer trust. By employing a multi-layered approach that combines machine learning, behavioral analytics, and real-time monitoring, we provide robust protection against a wide range of fraud types, allowing you to focus on growing your business with confidence."
                />
            </div>

            <div className="p-4 pt-20  pb-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                icon={TrendingUp  }
                    title="Why Choose Merchant Services for Your Fraud Prevention Needs?"
                    subtitle="In today’s digital landscape, fraud poses a significant threat to businesses of all sizes. At Merchant Services, we offer cutting-edge fraud prevention solutions that leverage the latest technologies to protect your business and customers from sophisticated fraud attempts. Flag suspicious transactions, block fraudulent transactions, and implement a strong fraud strategy when you work with Merchant Services."
                />
            </div>
        </section>
    )
}