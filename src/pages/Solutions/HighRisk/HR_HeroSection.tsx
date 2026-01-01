import AnimatedContent from "../../../components/animated-content";
import { SparkleIcon} from "lucide-react";
import CustomIcon from "../../../components/custom-icon";
import { Sparkles   } from 'lucide-react';
import MainForm from '../../../components/main_form'

export default function HR_HeroSection() {
    return (
        <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32 min-h-screen flex flex-col sm:flex-row flex-wrap gap-10 items-center justify-center">

            <div className="w-full max-w-2xl mt-35 lg:mt-0 flex flex-col items-center justify-center ">
                <AnimatedContent distance={30} delay={0.1} className="relative">
                    <h1 className="text-center font-urbanist text-5xl/15 md:text-6xl/18 mt-4 font-bold max-w-2xl">
                        High Risk Merchant Account Solutions
                    </h1>
                    <div className="absolute -top-5 right-13 hidden md:block">
                        <CustomIcon icon={SparkleIcon} dir="right" />
                    </div>
                </AnimatedContent>
                <AnimatedContent distance={30} delay={0.2}>
                    <p className="text-center text-base/7 text-zinc-500 max-w-lg mt-4">
                    Tired of being rejected by payment processors? You’ve found your solution. As the #1 rated high-risk merchant account provider, we’ve helped over 10,000 businesses process $2+ billion annually. Our 98% approval rate and deep industry expertise mean you can start processing payments within 24-48 hours, even if other providers have turned you down. Plus, our dedicated account managers ensure your business keeps processing without interruption.
                    </p>
                </AnimatedContent>
                <AnimatedContent className="flex flex-col md:grid grid-cols-2 items-center gap-3 mt-6 w-full md:w-auto">
                    <div className="flex gap-2 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <Sparkles  className="text-orange-500 size-5"/>
                        <span className="text-md font-bold flex gap-1 items-center">Dedicated Account Managers</span>
                    </div>
                    <div className="flex gap-2 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <Sparkles  className="text-orange-500 size-5"/>
                        <span className="text-md font-bold flex gap-1 items-center">Recurring Billing Options</span>
                    </div>
                    <div className="flex gap-2 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <Sparkles  className="text-orange-500 size-5"/>
                        <span className="text-md font-bold flex gap-1 items-center">Years High-Risk Experience</span>
                    </div>
                    <div className="flex gap-2 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <Sparkles  className="text-orange-500 size-5"/>
                        <span className="text-md font-bold flex gap-1 items-center">20+ Financial Partners</span>
                    </div>


                </AnimatedContent>
            </div>



            <MainForm/>






                
       
        </section>
    );
}