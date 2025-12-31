import AnimatedContent from "./animated-content";

export default function MainForm() {
  return (
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

  )
}

