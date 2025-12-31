"use client";
import { links } from "../data/links";
import type { ILink } from "../../types";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import AnimatedContent from "./animated-content";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    return (
        <>
            <AnimatedContent reverse className="relative lg:z-1000 overflow-visible">
                <nav className='fixed w-full top-0 z-50 px-4 md:px-16 lg:px-24 xl:px-32 py-4 border-b transition-all duration-300 border-neutral-300'>
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <a href="https://prebuiltui.com?ref=buildify">
                            <img src="/assets/logo.svg" alt="Buildify Logo" width={135} height={36} />
                        </a>

                       
{/* Desktop Links */}
<div className="hidden lg:flex gap-3 relative z-999">
    {links.map((link: ILink) => (
        <div key={link.name} className="relative group">
            <Link
                to={link.href}
                className="py-1 px-3 hover:text-orange-500 flex items-center"
            >
                {link.name}
            </Link>

            {/* Submenu */}
            {link.subLinks && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block bg-white border border-neutral-200 rounded-xl shadow-lg shadow-black/5 p-2 min-w-50 mt-3 z-999">
                    {/* Invisible bridge to prevent hover gap */}
                    <div className="absolute -top-3 left-0 right-0 h-3"></div>
                    <div className="flex flex-col gap-1">
                        {link.subLinks.map(sub => (
                            <Link
                                key={sub.name}
                                to={sub.href}
                                className="px-4 py-3 rounded-lg hover:bg-orange-50 text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
                            >
                                <div className="font-medium">{sub.name}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    ))}
</div>


                        {/* Mobile Menu Button */}
                        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <MenuIcon className="size-6.5" />
                        </button>

                        <a href="https://prebuiltui.com?ref=buildify" className="hidden lg:inline-block py-2.5 px-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] bg-orange-500 text-white rounded-full">
                            Get Started
                        </a>
                    </div>
                </nav>
            </AnimatedContent>

{/* Mobile Menu */}
<div className={`fixed top-0 right-0 z-60 w-full h-screen bg-white shadow-xl shadow-black/5 transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
    <div className="h-full flex flex-col">
        {/* Header - Fixed at top */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 shrink-0">
            <img src="/assets/logo.svg" alt="Buildify Logo" width={135} height={36} />
            <XIcon className="size-6.5 cursor-pointer" onClick={() => setIsMenuOpen(false)} />
        </div>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-4 p-4 text-base">
                {links.map((link: ILink) => (
                    <div key={link.name}>
                        <Link
                            to={link.href}
                            className="py-3 px-3 flex justify-between items-center hover:bg-neutral-50 rounded-lg transition-colors"
                            onClick={(e) => {
                                if (link.subLinks) {
                                    e.preventDefault();
                                    setOpenSubMenu(openSubMenu === link.name ? null : link.name);
                                } else {
                                    setIsMenuOpen(false);
                                }
                            }}
                        >
                            <span className="font-medium">{link.name}</span>
                            {link.subLinks && (
                                <span className={`transform transition-transform duration-300 ${openSubMenu === link.name ? "rotate-180" : ""}`}>
                                    ▼
                                </span>
                            )}
                        </Link>

                        {/* Mobile Submenu */}
                        {link.subLinks && openSubMenu === link.name && (
                            <div className="ml-4 mt-2 pl-3 border-l-2 border-neutral-200">
                                <div className="flex flex-col gap-2 py-2">
                                    {link.subLinks.map(sub => (
                                        <Link
                                            key={sub.name}
                                            to={sub.href}
                                            className="py-3 px-4 rounded-lg hover:bg-neutral-50 text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <div className="font-medium">{sub.name}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Fixed Button at Bottom */}
        <div className="p-4 border-t border-neutral-200 shrink-0 bg-white">
            <a 
                href="https://prebuiltui.com?ref=buildify" 
                className="w-full py-4 px-6 text-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] bg-linear-to-tl from-orange-600 to-orange-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity block"
                onClick={() => setIsMenuOpen(false)}
            >
                Get Started
            </a>
        </div>
    </div>
</div>
        </>
    );
}
