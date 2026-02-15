"use client";

import React from "react";
import Image from "next/image";
import { Search, Sparkles } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";

const Banner = () => {
    const stats = [
        { value: "500+", label: "Research Opportunities" },
        { value: "150+", label: "Expert Mentors" },
        { value: "10K+", label: "Active Researchers" },
        { value: "95%", label: "Satisfaction Rate" },
    ];

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroBg}
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay to ensure readability and match the dark aesthetic */}
                <div className="absolute inset-0 bg-[#0A0C0F]/40 backdrop-blur-[2px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
                {/* Badge */}
                <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00E6FF]/10 border border-[#00E6FF]/20 text-[#00E6FF] text-sm font-medium leading-5 shadow-lg backdrop-blur-sm">
                    <Sparkles size={14} className="text-[#00E6FF]" />
                    Global Research Network
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-[#00D1FF] to-[#7B61FF] bg-clip-text text-transparent pb-2">
                    PublicationHub
                </h1>

                {/* Subheading */}
                <p className="max-w-xl text-[#A3A7AE] text-lg md:text-xl font-normal leading-relaxed mb-12">
                    Advancing clinical excellence and evidence-based medicine across the Kingdom.
                </p>

                {/* Search Bar */}
                <div className="w-full max-w-2xl relative mb-24 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2A9D90]/20 to-[#6467F2]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center bg-[#171A21]/90 border border-white/10 rounded-2xl p-1.5 shadow-2xl backdrop-blur-md">
                        <div className="flex-1 flex items-center px-4 gap-3">
                            <Search className="text-[#A3A7AE]" size={20} />
                            <input
                                type="text"
                                placeholder="Search opportunities, mentors, or courses..."
                                className="w-full bg-transparent border-none outline-none text-white text-sm placeholder:text-[#5F6368] py-3"
                            />
                        </div>
                        <button
                            className="px-8 py-3 rounded-xl font-bold text-white transition-all duration-300 active:scale-95"
                            style={{ background: "linear-gradient(135deg, #2A9D90 0%, #6467F2 100%)" }}
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center group transition-all duration-300 hover:border-[#00D1FF]/30 hover:-translate-y-2 backdrop-blur-md"
                            style={{
                                background: "linear-gradient(136deg, #20232D 99.19%, #171A21 1.35%)",
                                boxShadow: "0 1.593px 6.373px 0 rgba(29, 126, 135, 0.10)"
                            }}
                        >
                            <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-br from-[#00D1FF] to-[#7B61FF] bg-clip-text text-transparent">
                                {stat.value}
                            </h3>
                            <p className="text-[#fff] text-sm font-medium text-center leading-tight uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;

