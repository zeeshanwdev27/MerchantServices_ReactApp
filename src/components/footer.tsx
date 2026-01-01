// import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import AnimatedContent from "./animated-content";

export default function Footer() {
    return (
        <>
        <footer className="px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="border-x border-gray-200 px-4 md:px-12 max-w-7xl mx-auto pt-40">
                <div className="flex flex-col md:flex-row items-start justify-between relative p-8 md:p-12 overflow-hidden pb-32 md:pb-42 bg-linear-to-t from-orange-50 to-orange-100 rounded-t-2xl">
                    <img
                        src="/assets/orangelogo.png"
                        alt="Logo"
                        width={135}
                        height={35}
                        className="h-62 w-auto absolute -bottom-18 opacity-7 select-none pointer-events-none"
                    />
                    <AnimatedContent distance={40} className="">
                        <img
                            src="/assets/orangelogo.png"
                            alt="Logo"
                            width={250}
                            height={200}
                            
                        />
                        <p className="text-zinc-500 mt-4 max-w-72">For further assistance or additional inquiries, feel free to contact us</p>

                        <div className="flex gap-2 items-center mt-5">
                            <span className="font-bold text-md text-orange-500">Phone:</span>
                            <p className="text-zinc-500">+1 (786) 987-2704</p>
                        </div>

                        <div className="flex gap-2 items-center mt-1">
                            <span className="font-bold text-md text-orange-500">Address:</span>
                            <p className="text-zinc-500">100 DANDELION DR MORENCI, AZ 85540</p>
                        </div>

                        <div className="flex gap-2 items-center mt-1">
                            <span className="font-bold text-md text-orange-500">Email:</span>
                            <a href="mailto:info@merchantservices.online" className="text-zinc-500">info@merchantservices.online</a>
                        </div>
                        <p className="text-zinc-500 mt-5 mb-5">Copyright © 2025 Merchant Services. All rights reserved.</p>
                    </AnimatedContent>

                    {/* <div>
                        <p className="uppercase font-semibold text-orange-600 text-base">Social</p>
                        <AnimatedContent className="flex flex-col mt-6 gap-3">
                            <a href="https://prebuiltui.com?ref=buildify" className="flex items-center gap-2 text-orange-500">
                                <TwitterIcon size={20} />
                                <p>Twitter</p>
                            </a>
                            <a href="https://prebuiltui.com?ref=buildify" className="flex items-center gap-2 text-orange-500">
                                <LinkedinIcon size={20} />
                                <p>Linkedin</p>
                            </a>
                            <a href="https://prebuiltui.com?ref=buildify" className="flex items-center gap-2 text-orange-500">
                                <InstagramIcon size={20} />
                                <p>Instagram</p>
                            </a>
                        </AnimatedContent>
                    </div> */}

                </div>
            </div>
        </footer>
        
         </>
    );
}


