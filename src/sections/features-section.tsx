import { ArrowUpRightIcon, SparkleIcon } from "lucide-react";
import { features } from "../data/features";
import AnimatedContent from "../components/animated-content";
import SectionTitle from "../components/section-title";

export default function FeaturesSection() {
    return (
        <section id="features" className="px-4 md:px-16 lg:px-24 xl:px-32 border-t border-gray-200 divide-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 border-x md:divide-x border-gray-200 divide-gray-200 max-w-7xl mx-auto">
                <div>
                    <div className="p-4 pt-16 md:p-16 flex flex-col items-start md:sticky md:top-26">
                        <SectionTitle
                            dir="left"
                            icon={SparkleIcon}
                            title="High-Risk Merchant Account Provider"
                            subtitle="Navigating high-risk industries is challenging, but Crazy Merchants makes it easier with our specialized high-risk merchant account services. Our expert team is dedicated to providing secure and efficient payment processing solutions tailored to your business needs."
                        />
                        <AnimatedContent className="p-4 md:p-6 bg-orange-500 w-full rounded-xl mt-12">
                            <p className="text-lg text-white">
                                Ready To Get Started?
                            </p>

                            <a href="#" className="bg-white w-max hover:bg-gray-100 px-5 py-2 rounded-full mt-6 flex items-center gap-1" >
                                Open Your Merchant Account
                                <ArrowUpRightIcon size={20} />
                            </a>
                        </AnimatedContent>
                    </div>
                </div>
                <div className="p-4 pt-16 md:p-16 space-y-6">
                    {features.map((feature, index) => (
                        <AnimatedContent key={index} className={`${feature.cardBg} flex flex-col items-start p-6 rounded-xl w-full md:sticky md:top-26`}>
                            <div className={`${feature.iconBg} p-2 text-white rounded-md`}>
                                <feature.icon />
                            </div>
                            <p className="text-base font-medium mt-4">{feature.title}</p>
                            <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    )
}