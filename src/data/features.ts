import { Shield , Gauge , Headset , ClockCheck , } from "lucide-react";
import type { IFeature } from "../../types";

export const features: IFeature[] = [
    {
        title: "Secure Processing",
        description:
            "Advanced fraud protection and secure payment processing for high-risk businesses.",
        icon: Shield ,
        cardBg: "bg-orange-100",
        iconBg: "bg-orange-500"
    },
    {
        title: "Fast Integration",
        description:
            "Quick and easy integration with your existing systems and platforms.",
        icon: Gauge ,
        cardBg: "bg-green-100",
        iconBg: "bg-green-500"
    },
    {
        title: "Expert Support",
        description:
            "Dedicated team of experts to help you navigate high-risk processing.",
        icon: Headset,
        cardBg: "bg-indigo-100",
        iconBg: "bg-indigo-500"
    },
    {
        title: "24/7 Monitoring",
        description:
            "Continuous transaction monitoring and risk management",
        icon: ClockCheck ,

        cardBg: "bg-pink-100",
        iconBg: "bg-pink-500"
    },
]