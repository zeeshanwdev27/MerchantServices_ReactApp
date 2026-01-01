import CbSectionTitle from "../../../components/cb-section";
import { Info  } from "lucide-react";


export default function CB_WhatsCb() {

    return (
        <section id="pricing" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32 border-t divide-gray-200">

            <div className="p-4 pt-20  pb-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <CbSectionTitle
                icon={Info   }
                    title="What is a Chargeback?"
                    subtitle="Chargebacks are in place to protect customers against fraudulent transactions when using a credit card as the payment method. A chargeback occurs when a merchant experiences a customer dispute over a previous purchase from the customer’s credit card company. A customer must first contact the seller to try to resolve the issue before reaching out to the credit card company. Once the chargeback has been initiated, the money will be sent back to the customer’s bank account from the business’s merchant account. Because this impacts the financial stability of the merchant and their payment processor, chargebacks can impact the reputation of the merchant. Too many chargebacks don’t only impact your bank account. They may also lead to the designation of high-risk merchants. That’s why it’s important to choose a merchant service provider that offers chargeback and fraud prevention."
                    subtitle2="Once the chargeback has been initiated, the money will be sent back to the customer’s bank account from the business’s merchant account. Because this impacts the financial stability of the merchant and their payment processor, chargebacks can impact the reputation of the merchant. Too many chargebacks don’t only impact your bank account. They may also lead to the designation of high-risk merchants. That’s why it’s important to choose a merchant service provider that offers chargeback and fraud prevention."
                />
            </div>

        </section>
    )
}