import AnimatedContent from "../../../components/animated-content";
import { SparkleIcon} from "lucide-react";
import CustomIcon from "../../../components/custom-icon";
import { Sparkles   } from 'lucide-react';
import MainForm from '../../../components/main_form'

export default function FP_HeroSection() {
    return (
        <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32 min-h-screen flex flex-col sm:flex-row flex-wrap gap-10 items-center justify-center">

            <div className="w-full max-w-2xl mt-35 lg:mt-0 flex flex-col items-center justify-center ">
                <AnimatedContent distance={30} delay={0.1} className="relative">
                    <h1 className="text-center font-urbanist text-5xl/15 md:text-6xl/18 mt-4 font-bold max-w-2xl">
                        Merchant Fraud Protection
                    </h1>
                    <div className="absolute -top-5 right-13 hidden md:block">
                        <CustomIcon icon={SparkleIcon} dir="right" />
                    </div>
                </AnimatedContent>
                <AnimatedContent distance={30} delay={0.2}>
                    <p className="text-center text-base/7 text-zinc-500 max-w-lg mt-4">
                    In an era of increasingly sophisticated cyber threats, robust fraud prevention is essential for protecting your business and customers. Protect your business from fraudulent transactions with intelligent fraud detection and prevention from Merchant Services. Our comprehensive approach combines cutting-edge technology with industry expertise:
                    </p>
                </AnimatedContent>
                <AnimatedContent className="flex flex-col md:grid grid-cols-2 items-center gap-3 mt-6 w-full md:w-auto">
                    <div className="flex gap-2 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <Sparkles  className="text-orange-500 size-5"/>
                        <span className="text-md font-bold flex gap-1 items-center">Real-time transaction monitoring and risk assessment</span>
                    </div>
                    <div className="flex gap-2 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <Sparkles  className="text-orange-500 size-5"/>
                        <span className="text-md font-bold flex gap-1 items-center">Machine learning algorithms for adaptive fraud detection</span>
                    </div>
                    <div className="flex gap-2 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <Sparkles  className="text-orange-500 size-5"/>
                        <span className="text-md font-bold flex gap-1 items-center">Multi-factor authentication and identity verification</span>
                    </div>
                    <div className="flex gap-2 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <Sparkles  className="text-orange-500 size-5"/>
                        <span className="text-md font-bold flex gap-1 items-center">Behavioral analytics to identify suspicious patterns</span>
                    </div>

                </AnimatedContent>
            </div>



            <MainForm/>






                
       
        </section>
    );
}