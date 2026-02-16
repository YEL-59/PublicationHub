"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const Career = () => {
    return (
        <section className="relative w-full bg-[#0A0C0F] py-32 px-4 overflow-hidden">
            {/* Background Radial Gradient */}
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-60 blur-[130px] z-0"
                style={{
                    background: "radial-gradient(circle, rgba(0, 230, 255, 0.25) 0%, rgba(0, 209, 255, 0.1) 40%, transparent 70%)"
                }}
            />

            <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
                {/* Badge */}
                <div
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2A9D90]/30 mb-8"
                    style={{ background: "rgba(0, 230, 255, 0.05)" }}
                >
                    <Sparkles size={14} className="text-[#00D1FF]" />
                    <span className="text-[#00D1FF] text-[13px] font-medium tracking-wide font-inter">
                        Start Your Research Journey
                    </span>
                </div>

                {/* Main Heading */}
                <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-4xl leading-[1.1]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    Ready to Accelerate Your <br />
                    <span className="bg-gradient-to-r from-[#00D1FF] to-[#7B61FF] bg-clip-text text-transparent">
                        Research Career?
                    </span>
                </h2>

                {/* Subtext */}
                <p
                    className="text-[#A3A7AE] text-base md:text-lg font-normal leading-7 max-w-2xl mb-12 font-inter"
                >
                    Join thousands of researchers who have found their perfect opportunities,
                    connected with expert mentors, and advanced their careers through
                    ResearchHub+.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-5 mb-8">
                    <button
                        className="group flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold transition-all duration-300 shadow-[0_0_20px_rgba(42,157,144,0.2)] hover:shadow-[0_0_30px_rgba(100,103,242,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                        style={{ background: "linear-gradient(135deg, #2A9D90 0%, #6467F2 100%)" }}
                    >
                        <span>Get Started Free</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                        className="px-8 py-4 rounded-xl text-[#E5E7EB] font-bold border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Browse Opportunities
                    </button>
                </div>

                {/* Bottom Text */}
                <p className="text-[#5F6368] text-sm font-medium font-inter">
                    No credit card required. Start exploring today.
                </p>
            </div>
        </section>
    );
};

export default Career;