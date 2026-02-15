"use client";

import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Opportunity {
    id: number;
    category: string;
    date: string;
    title: string;
    description: string;
    mentor: string;
    categoryColor: string;
}

const opportunities: Opportunity[] = [
    {
        id: 1,
        category: "Cardiology",
        date: "Mar 15, 2026",
        title: "Clinical Research Fellowship",
        description: "Join our cutting-edge cardiovascular research team investigating novel treatment approaches.",
        mentor: "Dr. Sarah Chen",
        categoryColor: "bg-[#3B384D]",
    },
    {
        id: 2,
        category: "Data Science",
        date: "Apr 1, 2026",
        title: "AI in Healthcare Research",
        description: "Develop machine learning models for early disease detection and patient outcome prediction.",
        mentor: "Prof. James Miller",
        categoryColor: "bg-[#2D334D]",
    },
    {
        id: 3,
        category: "Neurology",
        date: "Mar 30, 2026",
        title: "Neuroscience Lab Position",
        description: "Investigate neural mechanisms of memory formation using advanced imaging techniques.",
        mentor: "Dr. Emily Watson",
        categoryColor: "bg-[#3B384D]",
    },
    {
        id: 4,
        category: "Public Health",
        date: "Apr 15, 2026",
        title: "Global Health Initiative",
        description: "Contribute to research on improving healthcare access in underserved communities.",
        mentor: "Dr. Michael Okonkwo",
        categoryColor: "bg-[#2D334D]",
    },
];

const OpportunityCard = ({ item }: { item: Opportunity }) => {
    return (
        <div
            className="relative rounded-[16px] border border-white/10 p-8 flex flex-col gap-6 transition-all duration-300 hover:border-[#00D1FF]/30 group"
            style={{
                background: "rgba(29, 32, 41, 0.88)",
                boxShadow: "0 1.593px 6.373px 0 rgba(29, 126, 135, 0.10)",
            }}
        >
            <div className="flex items-center justify-between">
                <span className={`${item.categoryColor} text-[#9C8BE9] font-inter text-sm font-medium leading-5 px-4 py-1.5 rounded-full`}>
                    {item.category}
                </span>
                <div className="flex items-center gap-2 text-[#A3A7AE] text-xs font-medium">
                    <Calendar size={14} className="text-[#A3A7AE]" />
                    <span>{item.date}</span>
                </div>
            </div>

            <div className="space-y-3">
                <h3
                    className="text-[#E5E7EB] font-inter text-[20px] font-semibold leading-[28px] group-hover:text-white transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", }}
                >
                    {item.title}
                </h3>
                <p
                    className="text-[#A3A7AE] font-inter text-sm font-normal leading-5 max-w-xl"
                    style={{ fontFamily: "'Inter', sans-serif", }}
                >
                    {item.description}
                </p>
            </div>

            <div className="flex items-center gap-2 text-[#A3A7AE] text-sm font-medium">
                <User size={16} />
                <span>{item.mentor}</span>
            </div>

            <div className="flex items-center gap-6 mt-4">
                <button
                    className="px-7 py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(42,157,144,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: "linear-gradient(135deg, #2A9D90 0%, #6467F2 100%)" }}
                >
                    Apply Now
                </button>
                <Link href="#" className="text-sm font-semibold text-[#A3A7AE] hover:text-[#00D1FF] transition-colors">
                    Learn More
                </Link>
            </div>
        </div>
    );
};

const Featured = () => {
    return (
        <section className="relative w-full bg-[#0A0C0F] py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
            {/* Background Decorative Elements */}
            {/* <div className="absolute left-0 top-0 w-64 h-full opacity-20 pointer-events-none">
                <svg width="256" height="100%" viewBox="0 0 256 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-50 0C-50 0 100 200 50 400C0 600 150 800 150 800" stroke="#A3A7AE" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M-20 0C-20 0 130 200 80 400C30 600 180 800 180 800" stroke="#A3A7AE" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M10 0C10 0 160 200 110 400C60 600 210 800 210 800" stroke="#A3A7AE" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
            </div>

            <div className="absolute right-10 bottom-10 w-48 h-48 opacity-10 pointer-events-none">
                <svg width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 170C50 140 100 160 130 110C160 60 120 20 170 20M170 20L150 25M170 20L165 40" stroke="#A3A7AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="20" cy="170" r="4" fill="#A3A7AE" />
                </svg>
            </div> */}

            <div className="container mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-4xl font-bold text-white mb-6">
                            Featured <span className="bg-gradient-to-r from-[#00D1FF] to-[#7661FF] bg-clip-text text-transparent">Research Opportunities</span>
                        </h2>
                        <p className="text-[#A3A7AE] text-base font-normal leading-6">
                            Explore handpicked opportunities from top institutions worldwide.
                        </p>
                    </div>
                    <Link href="#" className="flex items-center gap-2 text-[#00D1FF] font-medium hover:gap-3 transition-all">
                        View All Opportunities
                        <ArrowRight size={18} />
                    </Link>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {opportunities.map((item) => (
                        <OpportunityCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;