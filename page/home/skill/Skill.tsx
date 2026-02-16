"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, BookOpen, ArrowRight } from "lucide-react";

const Skill = () => {
    const features = [
        "Access expert-led courses at your own pace",
        "Earn certificates upon completion",
        "Apply learnings to real research projects",
        "Join a community of active learners",
    ];

    return (
        <section className="w-full bg-[#0A0C0F] py-24 px-4 md:px-8 lg:px-12 overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col items-start space-y-7">
                        {/* Meta Academy Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1C28] border border-white/10 shadow-lg">
                            <BookOpen size={14} className="text-[#9C8BE9]" />
                            <span className="text-[#A3A7AE] font-inter text-sm font-medium leading-5">
                                Meta Academy
                            </span>
                        </div>

                        {/* Heading Section */}
                        <div className="space-y-4">
                            <h2
                                className="text-4xl md:text-5xl font-bold text-white leading-tight"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                                Level Up Your Research Skills
                            </h2>
                            <p
                                className="text-[#A3A7AE] font-inter text-base font-normal leading-7 max-w-xl"
                            >
                                Comprehensive courses designed by leading researchers to help you master essential
                                skills—from methodology to publication.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-4 pt-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 group">
                                    <div className="flex-shrink-0">
                                        <CheckCircle2 size={18} className="text-[#2A9D90] group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span
                                        className="text-[#E5E7EB] font-inter text-base font-medium leading-6"
                                    >
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Action Button */}
                        <div className="pt-6">
                            <button
                                className="group flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold transition-all duration-300 shadow-[0_0_20px_rgba(42,157,144,0.2)] hover:shadow-[0_0_30px_rgba(100,103,242,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                                style={{ background: "linear-gradient(135deg, #2A9D90 0%, #6467F2 100%)" }}
                            >
                                <span>Explore Courses</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Image Container */}
                    <div className="relative w-full aspect-[4/3] lg:aspect-square xl:aspect-[1.2/1] rounded-[32px] overflow-hidden border border-white/10 group shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#00D1FF]/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
                            alt="Researchers working in lab"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;