import AnimatedContent from "../components/animated-content";
import { SparkleIcon, StarIcon } from "lucide-react";
import CustomIcon from "../components/custom-icon";
import { BadgeCheck, CreditCard, Clock, Shield   } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32 min-h-screen flex flex-col sm:flex-row flex-wrap gap-10 items-center justify-center">

            <div className="w-full max-w-2xl mt-35 lg:mt-0 flex flex-col items-center justify-center ">
                <AnimatedContent reverse distance={30} className="flex items-center gap-2 bg-white/50 backdrop-blur p-1 rounded-full">
                    <div className="flex items-center -space-x-3">
                        <img className="size-7 rounded-full border-2 border-white"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                            alt="userImage1" />
                        <img className="size-7 rounded-full border-2 border-white"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                            alt="userImage2" />
                    </div>
                    <span>60K+</span>
                    <div className="h-5 w-px mx-1 bg-white rounded-full" />
                    <span>Happy users worldwide</span>
                    <div className="h-5 w-px mx-1 bg-white rounded-full" />
                    <div className="flex items-center gap-1 pr-3">
                        <StarIcon className="size-4.5 fill-orange-500 stroke-orange-500" />
                        <span>4.9</span>
                    </div>
                </AnimatedContent>
                <AnimatedContent distance={30} delay={0.1} className="relative">
                    <h1 className="text-center font-urbanist text-5xl/15 md:text-6xl/18 mt-4 font-bold max-w-2xl">
                        They Denied, We Approved
                    </h1>
                    <div className="absolute -top-5 right-13 hidden md:block">
                        <CustomIcon icon={SparkleIcon} dir="right" />
                    </div>
                </AnimatedContent>
                <AnimatedContent distance={30} delay={0.2}>
                    <p className="text-center text-base/7 text-zinc-500 max-w-lg mt-4">
                        Best Solution for Travel and Call Center Businesses
                    </p>
                </AnimatedContent>
                <AnimatedContent className="flex flex-col md:grid grid-cols-2 items-center gap-3 mt-6 w-full md:w-auto">
                    <div className="flex flex-col gap-1 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <span className="text-md font-bold flex gap-1 items-center"><BadgeCheck className="text-orange-500 size-5"/>99% Approval Rate</span>
                        <span className="text-xs">Industry-leading acceptance</span>
                    </div>
                    <div className="flex flex-col gap-1 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <span className="text-md font-bold flex gap-1 items-center"><CreditCard className="text-orange-500 size-5"/>No Setup Fee</span>
                        <span className="text-xs">Start processing instantly</span>
                    </div>
                    <div className="flex flex-col gap-1 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <span className="text-md font-bold flex gap-1 items-center"><Clock className="text-orange-500 size-5"/>24 Hour Approval</span>
                        <span className="text-xs">Quick application process</span>
                    </div>
                    <div className="flex flex-col gap-1 relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium border border-white rounded-2xl">
                        <span className="text-md font-bold flex gap-1 items-center"><Shield className="text-orange-500 size-5"/>Chargeback Protection</span>
                        <span className="text-xs">Advanced security features</span>
                    </div>
                </AnimatedContent>
            </div>



            <AnimatedContent  distance={30} delay={0.1} className="relative w-full sm:w-auto">
                <form action="" className="mb-10 lg:mb-0 px-4 sm:px-6 py-8 flex flex-col gap-3 w-full md:max-w-lg rounded-2xl bg-white border-2 border-orange-400">
                    <h1 className="text-center font-bold text-2xl text-gray-800">Get Started Today!</h1>
                    <input type="text" placeholder="Business Name" className="border border-orange-300 p-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400" />
                    <div className="flex flex-col sm:flex-row gap-5 w-full">
                    <input type="text" placeholder="First Name" className="border border-orange-300 p-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400" />
                    <input type="text" placeholder="Last Name" className="flex-1 border border-orange-300 p-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400" />

                    </div>
                    <input type="text" placeholder="Phone Number" className="border border-orange-300 p-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400" />
                    <input type="text" placeholder="Email Address" className="border border-orange-300 p-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400" />
                    <textarea name="" id="" rows={3} cols={1} placeholder="What are you looking for?" className="border border-orange-300 p-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"></textarea>
                    <button type="submit" className="w-full py-3 border rounded-2xl bg-linear-to-tl from-orange-600 to-orange-500 text-white text-center hover:from-orange-700 hover:to-orange-600 cursor-pointer">Start Processing Today</button>
                </form>
            </AnimatedContent>


                
       
        </section>
    );
}