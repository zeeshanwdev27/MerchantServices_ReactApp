import AnimatedContent from "../components/animated-content";
import SectionTitle from "../components/section-title";
import { faqs } from "../data/faqs";
import { ChevronDownIcon, BadgeDollarSign  } from "lucide-react";

export default function FaqSection() {
    return (
        <section className="border-y border-gray-200">
            <div className="px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="p-4 pt-20 md:p-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                    <SectionTitle
                        icon={BadgeDollarSign }
                        title="Comprehensive Payment Solutions"
                        subtitle="Secure, reliable, and tailored payment processing solutions for your high-risk business needs."
                    />
                </div>
            </div>
            <div className="px-4 md:px-16 lg:px-24 xl:px-32 border-t border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-gray-200 border-x border-gray-200 max-w-7xl mx-auto">
                    <div className="p-4 pt-10 lg:p-20 space-y-6">
                        {faqs.map((faq, index) => (
                            <AnimatedContent key={index}>
                                <details key={index} className="group bg-gray-50 border border-gray-200 rounded-xl" open={index === 0}>
                                    <summary className="flex items-center justify-between p-6 select-none">
                                        <h3 className="font-medium text-base">{faq.question}</h3>
                                        <ChevronDownIcon size={20} className="group-open:rotate-180" />
                                    </summary>
                                    <p className="text-sm/6 text-zinc-500 max-w-md p-6 pt-0">
                                        {faq.answer}
                                    </p>
                                    <p className="text-sm/6 text-zinc-500 max-w-md p-6 pt-0 flex flex-col gap-2">
                                    {faq.tags?.map((tag, i) => (
                                        <span key={i}>• {tag}</span>
                                        ))}
                                    </p>
                                </details>
                            </AnimatedContent>
                        ))}
                    </div>
                    <div className="p-4 pt-10 lg:p-20">
                        <div className="sticky top-30 flex flex-col lg:flex-row items-center justify-between gap-5 p-6 bg-violet-500 w-full rounded-xl mt-12">
                            <h3 className="text-lg text-white text-balance">
                                Get Ready? Our team help you get started.
                            </h3>

                            <a
                                href="#"
                                className="bg-white w-max shrink-0 hover:bg-gray-100 px-4 py-2 rounded-full"
                            >
                                Open Your Merchant Account
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}