import PagesSectionTitle from "../../../components/pages-sectiontitle";
import { Star, TrendingUp } from "lucide-react";


export default function VT_WhyChoose() {

    return (
        <section id="pricing" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32 border-t divide-gray-200">
            <div className="p-4 pt-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                    icon={Star  }
                    title="Why Choose Merchant Services for Your Virtual Terminal Needs?"
                    subtitle="In today’s diverse business landscape, the ability to process payments remotely or without a physical card present is crucial. At Merchant Services, we offer robust virtual terminal solutions designed to provide flexibility, security, and efficiency for businesses of all types and sizes. Get started with secure payment processing today!"
                />
            </div>

            <div className="p-4 pt-20  pb-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                icon={TrendingUp  }
                    title="How Do Our Virtual Terminal Solutions Benefit Your Business?"
                    subtitle="Our virtual terminal services enable you to process credit card payments from anywhere, at any time, using just a computer or mobile device with internet access. Whether you’re processing phone orders, managing recurring billing, or need a flexible solution for remote work, our virtual terminal solution provides the tools you need to streamline your payment operations and grow your business."
                />
            </div>
        </section>
    )
}