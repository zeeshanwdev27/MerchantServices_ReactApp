import AnimatedContent from "../../../components/animated-content";
import { SparkleIcon} from "lucide-react";
import CustomIcon from "../../../components/custom-icon";
import { Sparkles   } from 'lucide-react';
import MainForm from '../../../components/main_form'

export default function CB_HeroSection() {
    return (
        <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32 min-h-screen flex flex-col sm:flex-row flex-wrap gap-10 items-center justify-center">

            <div className="w-full max-w-2xl mt-35 lg:mt-0 flex flex-col items-center justify-center ">
                <AnimatedContent distance={30} delay={0.1} className="relative">
                    <h1 className="text-center font-urbanist text-5xl/15 md:text-6xl/18 mt-4 font-bold max-w-2xl">
                        Advanced Chargeback Management Payment Gateway
                    </h1>
                    <div className="absolute -top-5 right-13 hidden md:block">
                        <CustomIcon icon={SparkleIcon} dir="right" />
                    </div>
                </AnimatedContent>
                <AnimatedContent distance={30} delay={0.2}>
                    <p className="text-center text-base/7 text-zinc-500 max-w-lg mt-4">
                       Chargeback management is crucial for maintaining a healthy business in the world of e-commerce and card-not-present transactions. Our comprehensive approach helps you tackle chargebacks effectively:
                    </p>
                </AnimatedContent>
                <AnimatedContent className="flex flex-col md:grid grid-cols-2 items-center gap-3 mt-6 w-full md:w-auto">
                    <div className="flex gap-2 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <Sparkles  className="text-orange-500 size-5"/>
                        <span className="text-md font-bold flex gap-1 items-center">Proactive fraud prevention to cut chargebacks</span>
                    </div>
                    <div className="flex gap-2 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <Sparkles  className="text-orange-500 size-5"/>
                        <span className="text-md font-bold flex gap-1 items-center">Faster dispute resolution to recover revenue</span>
                    </div>
                    <div className="flex gap-2 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <Sparkles  className="text-orange-500 size-5"/>
                        <span className="text-md font-bold flex gap-1 items-center">Real-time alerts for suspicious activity</span>
                    </div>
                    <div className="flex gap-2 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <Sparkles  className="text-orange-500 size-5"/>
                        <span className="text-md font-bold flex gap-1 items-center">Actionable analytics to spot chargeback trends</span>
                    </div>

                    

                </AnimatedContent>
            </div>



            <MainForm/>






                
       
        </section>
    );
}