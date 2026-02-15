"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TwitterIcon, LinkedInIcon, YoutubeIcon, MailIcon } from "@/components/icons/SocialIcons";
import navLogo from "@/assets/images/nav-logo.png";
import { ArrowRight } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        platform: [
            { name: "Research Opportunities", href: "/research" },
            { name: "Chat", href: "/chat" },
            { name: "Research Services", href: "/services" },
            { name: "Settings", href: "/settings" },
        ],
        resources: [
            { name: "FAQ", href: "/faq" },
            { name: "Blog", href: "/blog" },
            { name: "Mentors", href: "/mentors" },
            { name: "Contact", href: "/contact" },
        ],
        legal: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Cookie Policy", href: "/cookies" },
        ],
    };

    const socialLinks = [
        { icon: <TwitterIcon size={18} />, href: "#", label: "Twitter" },
        { icon: <LinkedInIcon size={18} />, href: "#", label: "LinkedIn" },
        { icon: <YoutubeIcon size={18} />, href: "#", label: "YouTube" },
        { icon: <MailIcon size={18} />, href: "#", label: "Email" },
    ];

    return (
        <footer className="w-full bg-[#171A21] border-t border-white/10 pt-20 pb-8 px-4 md:px-8 lg:px-12">
            <div className="container mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-6 mb-20">

                    {/* Brand Section */}
                    <div className="lg:col-span-3 flex flex-col gap-7">
                        <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
                            <div className="relative w-48 h-12">
                                <Image
                                    src={navLogo}
                                    alt="PublicationHub Logo"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>
                        <p className="text-[#94A3B8] text-[15px] leading-relaxed max-w-[280px]">
                            The centralized platform for research opportunities, mentorship, and academic growth.
                        </p>
                        <div className="flex items-center gap-2.5">
                            {socialLinks.map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#0A0C0F] border border-white/10 text-gray-400 hover:text-[#00D1FF] hover:border-[#00D1FF]/30 transition-all duration-300"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-7 text-[16px]">Platform</h4>
                        <ul className="flex flex-col gap-4">
                            {footerLinks.platform.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[#94A3B8] text-[14px] hover:text-[#00D1FF] transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-7 text-[16px]">Resources</h4>
                        <ul className="flex flex-col gap-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[#94A3B8] text-[14px] hover:text-[#00D1FF] transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-7 text-[16px]">Legal</h4>
                        <ul className="flex flex-col gap-4">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[#94A3B8] text-[14px] hover:text-[#00D1FF] transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        <h4 className="text-white font-semibold text-[16px]">Stay Updated</h4>
                        <p className="text-[#94A3B8] text-[14px] leading-relaxed">
                            Get the latest opportunities delivered to your inbox.
                        </p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-[#20232D] border border-white/10 rounded-xl py-3.5 px-5 text-[14px] text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00D1FF]/20 transition-all duration-300 shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm tracking-tight">
                        © {currentYear} PublicationHub. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Built for researchers, by researchers.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;