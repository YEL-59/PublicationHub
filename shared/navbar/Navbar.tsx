"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import navLogo from "@/assets/images/nav-logo.png";
import CTAButton from "@/components/CTAButton";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/", active: true },
        { name: "Research Opportunities", href: "/researchopportunities" },
        { name: "Services", href: "/service" },
        { name: "Meta Academy", href: "/academy" },
        { name: "Partnership", href: "/partnership" },
        { name: "About", href: "/about" },
        { name: "FAQ", href: "/faq" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-[#171A21] border-b border-white/10 shadow-[0_10px_15px_-3px_rgba(0,230,255,0.05),0_4px_6px_-4px_rgba(0,230,255,0.05)] backdrop-blur-[12px] py-5 px-4 md:px-6 lg:px-12">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
                    <div className="relative w-44 h-10 md:w-52 md:h-12">
                        <Image
                            src={navLogo}
                            alt="PublicationHub Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-9">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-[15px] font-medium transition-colors duration-200 hover:text-[#00D1FF] ${link.active ? "text-[#00D1FF]" : "text-[#94A3B8]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Section: Search, Sign In, CTA */}
                <div className="hidden lg:flex items-center gap-7">
                    <button className="text-white hover:text-[#00D1FF] transition-colors p-1.5 focus:outline-none">
                        <Search size={22} strokeWidth={2.5} />
                    </button>
                    <Link
                        href="/signin"
                        className="text-white text-[15px] font-medium hover:text-[#00D1FF] transition-colors"
                    >
                        Sign In
                    </Link>
                    <CTAButton>
                        Join as a mentor
                    </CTAButton>
                </div>

                {/* Tablet/Mobile Toggle */}
                <div className="flex lg:hidden items-center gap-3">
                    <button className="text-white p-2">
                        <Search size={24} />
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2"
                    >
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-[#171A21]/95 backdrop-blur-[12px] border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px] opacity-100 border-t border-white/5" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col gap-1 p-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-lg font-medium transition-colors ${link.active ? "text-[#00D1FF]" : "text-gray-400"
                                } hover:text-white py-3 px-4 rounded-lg hover:bg-white/5`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mt-4 pt-6 border-t border-white/10 flex flex-col gap-5">
                        <Link
                            href="/signin"
                            onClick={() => setIsOpen(false)}
                            className="text-white text-lg font-medium px-4 hover:text-[#00D1FF]"
                        >
                            Sign In
                        </Link>
                        <CTAButton className="w-full py-4">
                            Join as a mentor
                        </CTAButton>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;