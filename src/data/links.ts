import type { ILink } from "../../types";

export const links: ILink[] = [
    { name: "Home", href: "/" },
    { 
        name: "Solutions", 
        href: "#", 
        subLinks: [
            { name: "Merchant Services", href: "/merchant-services" },
            { name: "Chargeback Management", href: "/chargeback" },
            { name: "3D Secure", href: "/virtual-terminal" },
            { name: "High-Risk Merchant Account", href: "/virtual-terminal" },
            { name: "Fraud Prevention", href: "/virtual-terminal" },
            { name: "Virtual Terminal", href: "/virtual-terminal" },
        ]
    },
    { name: "Contact", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" }
];
