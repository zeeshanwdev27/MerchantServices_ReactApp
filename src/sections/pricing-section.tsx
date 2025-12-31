import AnimatedContent from "../components/animated-content";
import SectionTitle from "../components/section-title";
import { pricing } from "../data/pricing";
import { Flame  } from "lucide-react";


export default function PricingSection() {

    return (
        <section id="pricing" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32 border-t divide-gray-200">
            <div className="p-4 pt-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <SectionTitle
                    icon={Flame }
                    title="High-Risk Industries We Accept"
                    subtitle="Our specialized services ensure secure transactions and effective risk management, allowing your business to thrive."
                />
                <div className="flex flex-wrap items-start justify-center gap-10 md:gap-4 px-4 mt-12">
                    {pricing.map((plan, index) => (
                        <AnimatedContent delay={index * 0.10} key={index} className='p-5 pb-8 w-full sm:max-w-64 rounded-xl border border-gray-200 bg-white hover:bg-orange-500 hover:text-white cursor-pointer group'>
                            <div className='w-max border border-gray-200 p-2 aspect-square rounded-lg text-orange-500 bg-white'>
                                <plan.icon size={24} />
                            </div>
                            <h3 className="text-lg font-medium mt-6">{plan.name}</h3>
                            <p className='text-zinc-500 group-hover:text-white'>
                                {plan.description}
                            </p>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    )
}