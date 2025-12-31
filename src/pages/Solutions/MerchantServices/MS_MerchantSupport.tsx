import SectionTitle from "../../../components/global-section-title";
import { Layers, Headset, LayoutDashboard } from "lucide-react";


export default function MS_MerchantSupport() {

    return (
        <section id="pricing" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32 border-t divide-gray-200">
            <div className="p-4 pt-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <SectionTitle
                    icon={Layers  }
                    title="Complete Merchant Solutions"
                    subtitle="Our solution supports a wide range of payment methods, advanced tools, and secure technologies to help your business operate smoothly and grow confidently."
                />
            </div>

            <div className="p-4 pt-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <SectionTitle
                icon={Headset  }
                    title="Merchant Support"
                    subtitle="We provide complete merchant support to ensure your success. Our dedicated account managers and 24/7 support team are always ready to assist with any needs. From account setup to ongoing operations, we’re here to help your business thrive."
                />
            </div>

            <div className="p-4 pt-20 pb-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <SectionTitle
                icon={LayoutDashboard  }
                    title="Merchant Tools"
                    subtitle="Our merchant services include a complete suite of business tools. Access detailed transaction reporting, customer management features, and comprehensive analytics. These tools help you understand your business better and make informed decisions for growth."
                />
            </div>


        </section>
    )
}