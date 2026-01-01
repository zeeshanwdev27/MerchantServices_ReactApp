import PagesSectionTitle from "../../../components/pages-sectiontitle";
import { Star, TrendingUp } from "lucide-react";


export default function SP_WhyChooseSP() {

    return (
        <section id="pricing" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32 border-t divide-gray-200">
            <div className="p-4 pt-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                    icon={Star  }
                    title="Why Choose Merchant Services for Your 3D Secure Payment Processing?"
                    subtitle="Online businesses face unique challenges in the payment processing world. As fraud becomes more sophisticated, many traditional banks and payment processors are looking for enhanced security measures for online transactions. Merchant Services provides 3D secure payment gateways and payment processing solutions for online merchants around the world. Protect every online payment with the 3-D secure authentication process. Merchant Services also offers a full suite of payment processing solutions so that you can protect every online transaction, whether customers are on their desktops or mobile devices. We will tailor the payment process to the needs of your business. Accept electronic payments with full confidence when you choose Merchant Services!"
                />
            </div>

            <div className="p-4 pt-20  pb-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                icon={TrendingUp  }
                    title="How Does 3D Secure Benefit Your Business?"
                    subtitle="3D Secure adds an extra layer of security to online transactions, protecting payment card details and reducing the risk of payment fraud. At Merchant Services, we specialize in providing merchant accounts with 3D Secure integration, ensuring you can process online payments securely and efficiently while minimizing chargebacks. Choose Merchant Services to get a secure and successful payment system set up for your business."
                />
            </div>
        </section>
    )
}