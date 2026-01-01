"use client";
import { links } from "../data/links";
import type { ILink } from "../../types";
import { MenuIcon, XIcon, ChevronDown } from "lucide-react";
import { useState } from "react";
import AnimatedContent from "./animated-content";
import { NavLink, useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const location = useLocation();

  return (
    <>
      <AnimatedContent reverse className="relative lg:z-1000 overflow-visible">
        <nav className="fixed w-full top-0 z-50 px-4 md:px-16 lg:px-24 xl:px-32 py-4 border-b transition-all duration-300 border-neutral-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/">
              <img
                src="/assets/blacklogo.png"
                alt="Buildify Logo"
                width={200}
                height={130}
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex gap-3 relative z-999">
              {links.map((link: ILink) => {
                const hasActiveSubLink = link.subLinks?.some(
                  (sub) => sub.href === location.pathname
                );

                return (
                  <div key={link.name} className="relative group">
                    {link.subLinks && !link.href ? (
                      // Parent button without page
                      <button
                        onClick={() =>
                          setOpenSubMenu(
                            openSubMenu === link.name ? null : link.name
                          )
                        }
                        className={`py-1 px-3 flex items-center transition-colors duration-200 ${
                          hasActiveSubLink
                            ? "text-orange-500"
                            : "text-neutral-700 hover:text-orange-500"
                        }`}
                      >
                        {link.name}
                      </button>
                    ) : (
                      // Regular NavLink
                      <NavLink
                        to={link.href!}
                        end
                        className={({ isActive }) =>
                          `py-1 px-3 flex items-center transition-colors duration-200 ${
                            isActive
                              ? "text-orange-500"
                              : "text-neutral-700 hover:text-orange-500"
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    )}

                    {/* Desktop Submenu */}
                    {link.subLinks && (
                        <>
                        {/* Invisible Gap Barrier */}
                        <div className="absolute top-full left-0 right-0 h-3 hidden group-hover:block" />
                        
                        {/* Main Submenu */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block bg-white border border-neutral-200 rounded-xl shadow-lg shadow-black/5 p-2 min-w-50 mt-3 z-999">
                        <div className="flex flex-col gap-1">
                          {link.subLinks.map((sub) => (
                            <NavLink
                              key={sub.name}
                              to={sub.href || "/"}
                              end
                              className={({ isActive }) =>
                                `px-4 py-3 rounded-lg transition-colors duration-200 ${
                                  isActive
                                    ? "bg-orange-50 text-orange-500"
                                    : "text-neutral-700 hover:bg-orange-50 hover:text-neutral-900"
                                }`
                              }
                            >
                              <div className="font-medium">{sub.name}</div>
                            </NavLink>
                          ))}
                        </div>
                        </div>
                      </>
                    )}
                    
                  </div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon className="size-6.5" />
            </button>

            {/* Desktop CTA Button */}
            <a
              href="/contact"
              className="hidden lg:inline-block py-2.5 px-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] bg-orange-500 text-white rounded-full"
            >
              Get Started
            </a>
          </div>
        </nav>
      </AnimatedContent>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-60 w-full h-screen bg-white shadow-xl shadow-black/5 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-200 shrink-0">
            <img src="/assets/blacklogo.png" alt="Merchant_Logo" width={200} height={130} />
            <XIcon
              className="size-6.5 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          {/* Scrollable Links */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-4 p-4 text-base">
              {links.map((link: ILink) => (
                <div key={link.name}>
                  {link.subLinks && !link.href ? (
                    // Parent button
                    <button
                      className="py-3 px-3 flex justify-between items-center w-full rounded-lg transition-colors hover:bg-neutral-50"
                      onClick={() =>
                        setOpenSubMenu(
                          openSubMenu === link.name ? null : link.name
                        )
                      }
                    >
                      <span className="font-medium">{link.name}</span>
                      <ChevronDown
                        className={`size-4 transform transition-transform duration-300 ${
                          openSubMenu === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    // Parent NavLink
                    <NavLink
                      to={link.href!}
                      end
                      className={({ isActive }) =>
                        `py-3 px-3 flex justify-between items-center rounded-lg transition-colors ${
                          isActive
                            ? "bg-orange-50 text-orange-500"
                            : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="font-medium">{link.name}</span>
                      {link.subLinks && (
                        <ChevronDown
                          className={`size-4 transform transition-transform duration-300 ${
                            openSubMenu === link.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </NavLink>
                  )}

                  {/* Mobile Submenu */}
                  {link.subLinks && openSubMenu === link.name && (
                    <div className="ml-4 mt-2 pl-3 border-l-2 border-neutral-200">
                      <div className="flex flex-col gap-2 py-2">
                        {link.subLinks.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.href || "/"}
                            end
                            className={({ isActive }) =>
                              `py-3 px-4 rounded-lg transition-colors duration-200 ${
                                isActive
                                  ? "bg-orange-50 text-orange-500"
                                  : "text-neutral-600 hover:text-neutral-900"
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="font-medium">{sub.name}</div>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="p-4 border-t border-neutral-200 shrink-0 bg-white">
            <a
              href="/contact"
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
