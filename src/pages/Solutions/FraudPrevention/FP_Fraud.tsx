import PagesSectionTitle from "../../../components/pages-sectiontitle";
import { Star } from "lucide-react";


export default function FP_Fraud() {

    return (
        <section id="pricing" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32 border-t divide-gray-200">
            <div className="p-4 pt-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <PagesSectionTitle
                    icon={Star  }
                    title="What are Fraudulent Transactions?"
                    subtitle="Fraudulent transactions are commonly referred to as e-commerce fraud, a broad term that encompasses any type of payment or credit card fraud in online transactions. This includes credit and debit card fraud, where someone uses a card that belongs to another person, resulting in unauthorized transactions that must be reversed by the merchant and credit card company. Identity theft is another form, in which a fraudster steals a user’s personal information to make payments or open accounts, with account takeover being a common example. Chargeback fraud occurs when a customer disputes a legitimate purchase to receive goods or services for free. Merchant fraud, on the other hand, involves a fraudulent merchant impersonating a legitimate business, tricking customers into making purchases while the scammer receives the payment and sensitive card information."
                />
            </div>
        </section>
    )
}