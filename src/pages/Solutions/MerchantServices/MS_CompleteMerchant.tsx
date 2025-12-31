import SectionTitle from "../../../components/global-section-title";
import { Package, BadgeCheck } from "lucide-react";


export default function MS_CompleteMerchant() {

    return (
        <section id="pricing" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32 border-t divide-gray-200">
            <div className="p-4 pt-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <SectionTitle
                    icon={Package  }
                    title="Complete Merchant Services"
                    subtitle="Crazy Merchant delivers comprehensive merchant services designed for businesses of all sizes. With over two decades of experience, we provide complete payment processing solutions that help merchants grow. Our platform serves over 50,000 merchants across all industries."
                />
            </div>

            <div className="p-4 pt-20  pb-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <SectionTitle
                icon={BadgeCheck  }
                    title="Why Choose Crazy Merchant for Merchant Services?"
                    subtitle="As a leading merchant services provider, Crazy Merchant combines industry expertise with reliable solutions. Our merchant services include dedicated accounts, comprehensive tools, and complete support. We ensure your business has everything needed to process payments and manage transactions effectively."
                />
            </div>
        </section>
    )
}