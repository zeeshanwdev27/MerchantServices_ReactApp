import type { ILink } from "../../types";

export const links: ILink[] = [
    { name: "Home", href: "/" },
    { 
        name: "Solutions", 
        subLinks: [
            { name: "Merchant Services", href: "/merchant-services" },
            { name: "Chargeback Management", href: "/chargeback-management" },
            { name: "3D Secure", href: "/3d-secure" },
            { name: "High-Risk Merchant Account", href: "/high-risk-merchant-account/" },
            { name: "Fraud Prevention", href: "/fraud-prevention" },
            { name: "Virtual Terminal", href: "/virtual-terminal" },
        ]
    },
    { name: "Contact", href: "/contact" },
    { name: "Terms & Conditions", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" }
];
