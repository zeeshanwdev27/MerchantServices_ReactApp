import PagesSectionTitle from "../../../components/pages-sectiontitle";
import { Star, TrendingUp } from "lucide-react";


export default function HR_HighRisk() {
    return (
        <section id="pricing" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32 border-t divide-gray-200">
            <div className="p-4 pt-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                    icon={Star  }
                    title="Real Support for Your Business Growth"
                    subtitle="Payment processing shouldn’t limit your business potential. We provide the tools and support you need to grow, including volume increases as your business expands, multiple merchant accounts for stability, and advanced fraud protection. Our team stays current with industry regulations and trends, helping you adapt to changes while maintaining reliable payment processing."
                />
            </div>

            <div className="p-4 pt-20  pb-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                icon={TrendingUp  }
                    title="Clear Benefits You Can Count On"
                    subtitle="We believe in being transparent about what you get. Our merchant accounts include: specialized underwriting that understands your industry, proven fraud protection tools that actually work, flexible payment options including recurring billing, 24/7 support from people who know your business, competitive rates with no hidden fees, and multiple account options for business stability. You also get easy integration with major e-commerce platforms, detailed reporting tools, and scalable solutions that grow with you."
                />
            </div>

            <div className="p-4 pt-20  pb-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                icon={TrendingUp  }
                    title="Technology That Makes a Difference"
                    subtitle="Our solutions include practical features that help your business succeed: AI-powered fraud detection that reduces false positives, real-time transaction monitoring to spot issues early, customizable risk settings that match your business needs, and automated chargeback prevention tools that work. We also provide reliable recurring billing, detailed analytics you can actually use, mobile payment options, and secure integration with your existing systems."
                />
            </div>

        </section>
    )
}