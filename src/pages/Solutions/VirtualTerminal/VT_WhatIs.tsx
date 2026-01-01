import CbSectionTitle from "../../../components/cb-section";
import { Info  } from "lucide-react";


export default function VT_WhatIs() {

    return (
        <section id="pricing" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32 border-t divide-gray-200">

            <div className="p-4 pt-20  pb-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <CbSectionTitle
                icon={Info   }
                    title="What is a virtual terminal?"
                    subtitle="A virtual terminal allows you to accept credit and debit cards no matter where you are. It is a web-based app that allows you to turn any device with an internet connection: A phone, tablet, laptop, etc. into a POS system that can accept payments. You will also need to set up a merchant account and secure payment gateway to connect to the terminal. A virtual terminal also does more than allow you to accept customer payments. Look over your transaction history or issue refunds as well."
                    subtitle2="Merchant Services offers a virtual terminal solution that includes a merchant account and other necessary payment processing services. Begin accepting credit and debit card payments from your computer or phone quickly."
                />
            </div>

        </section>
    )
}