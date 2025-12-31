import AnimatedContent from "../components/animated-content";
import SectionTitle from "../components/section-title";
import { HandshakeIcon, CircleCheckBig, ArrowUpRightIcon } from "lucide-react";

export default function StartProcessing() {


    const data = ["Industry-leading approval rates", "24/7 customer support Advanced fraud", "Competitive processing rates", "Advanced fraud protection", "Next-day funding available", "No hidden fees"]


    return (
        <section className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32">
            <div className=" px-4 md:px-16 lg:px-24 xl:px-32 pt-20 pb-32 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                
                <SectionTitle
                    icon={HandshakeIcon}
                    title="Partner With Crazy Merchants!"
                    subtitle="Join thousands of businesses who trust Crazy Merchants for their high-risk payment processing needs. Get started today and experience the difference."
                />

                <AnimatedContent className="mt-20 grid md:grid-cols-2 gap-5">
                    {
                        data.map((item, index)=>(
                            <div key={index} className="flex items-center gap-2">
                                 <CircleCheckBig className="size-5 text-orange-500" />
                                 <p className="text-lg">{item}</p>
                            </div>
                        ))
                    }
                </AnimatedContent>

                <a href="#" className="mt-15 w-max px-8 py-4 rounded-full flex items-center gap-1 bg-linear-to-tl from-orange-600 to-orange-500 text-white  hover:from-orange-700 hover:to-orange-600 cursor-pointer" >
                    Open Your Merchant Account
                    <ArrowUpRightIcon size={20} />
                </a>


            </div>
        </section>
    )
}