import PagesSectionTitle from "../../../components/pages-sectiontitle";
import { Star, TrendingUp } from "lucide-react";


export default function CB_WhyChooseCB() {
    return (
        <section id="pricing" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32 border-t divide-gray-200">
            <div className="p-4 pt-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                    icon={Star  }
                    title="Why Choose Merchant Services for Your Chargeback Management?"
                    subtitle="In the digital commerce landscape, chargebacks pose a significant threat to your business’s profitability and reputation. Companies with high chargeback rates are considered high-risk and need a high-risk merchant account and payment processing. At Merchant Services, we offer comprehensive chargeback management solutions designed to protect your revenue and maintain healthy merchant accounts."
                />
            </div>

            <div className="p-4 pt-20  pb-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                icon={TrendingUp  }
                    title="How Does Effective Chargeback Management Benefit Your Business?"
                    subtitle="Many companies choose to go with a No Chargeback Payment Gateway to prevent chargebacks. However, that may not be the best option. Our chargeback management services and a high-risk payment gateway help you prevent fraud, reduce chargebacks, and optimize your dispute resolution process. Our chargeback system leverages advanced technology and industry expertise, enabling you to minimize revenue loss, preserve your merchant account status, and focus on growing your business rather than fighting chargebacks."
                />
            </div>
        </section>
    )
}