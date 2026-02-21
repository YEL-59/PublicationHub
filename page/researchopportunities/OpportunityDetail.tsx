"use client";

import React from "react";
import {
    ArrowLeft,
    Calendar,
    Clock,
    Building2,
    Bookmark,
    Share2,
    MessageSquare,
    ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface OpportunityDetailProps {
    opportunity: any; // In a real app, define a proper interface
}

const OpportunityDetail = ({ opportunity }: OpportunityDetailProps) => {
    if (!opportunity) return null;

    return (
        <section className="min-h-screen bg-[#0A0C0F] text-white py-12 px-6 md:px-12 lg:px-20 font-inter">
            <div className="container mx-auto">
                {/* Back Link */}
                <Link
                    href="/researchopportunities"
                    className="flex items-center gap-2 text-[#A3A7AE] hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to Opportunities</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        {/* Tags */}
                        <div className="flex gap-2 mb-6">
                            {(opportunity.tags || ["Oncology", "Medicine"]).map((tag: string) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-[#171A21] border border-white/5 rounded-full text-[11px] font-semibold text-[#8B8FF9]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-10 tracking-tight text-[#EBEEF1]">
                            {opportunity.title} : a retrospective cohort study
                        </h1>

                        {/* Info Bar */}
                        <div className="bg-[#111419] border border-white/5 rounded-2xl p-6 mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 bg-[#00D1FF]/10 rounded-xl">
                                    <Calendar className="w-5 h-5 text-[#00D1FF]" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#A3A7AE] uppercase tracking-wider font-bold mb-0.5">Deadline</p>
                                    <p className="text-sm font-semibold">{opportunity.deadline}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 bg-[#00D1FF]/10 rounded-xl">
                                    <Clock className="w-5 h-5 text-[#00D1FF]" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#A3A7AE] uppercase tracking-wider font-bold mb-0.5">Duration</p>
                                    <p className="text-sm font-semibold">{opportunity.duration || "2 Months"}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 bg-[#00D1FF]/10 rounded-xl">
                                    <Building2 className="w-5 h-5 text-[#00D1FF]" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#A3A7AE] uppercase tracking-wider font-bold mb-0.5">Start Date</p>
                                    <p className="text-sm font-semibold">{opportunity.startDate || "July 2026"}</p>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Description */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-xl font-bold mb-5 text-[#EBEEF1]">About This Opportunity</h2>
                                <p className="text-[#A3A7AE] leading-relaxed text-base">
                                    {opportunity.description} This fellowship offers unparalleled training in both clinical and translational research. As a fellow, you will work alongside leading cardiologists and scientists to conduct groundbreaking research that directly impacts patient care. Our program emphasizes hands-on experience with the latest technologies and methodologies in cardiovascular medicine.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold mb-5 text-[#EBEEF1]">Responsibilities</h2>
                                <ul className="space-y-4">
                                    {[
                                        "Conduct independent research under faculty mentorship",
                                        "Participate in clinical trials and data analysis",
                                        "Present findings at national conferences",
                                        "Collaborate with multidisciplinary research teams",
                                        "Contribute to peer-reviewed publications"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-[#A3A7AE] text-sm md:text-base leading-relaxed items-start">
                                            <span className="text-[#00D1FF] mt-1.5 shrink-0">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold mb-5 text-[#EBEEF1]">Requirements</h2>
                                <ul className="space-y-4">
                                    {[
                                        "MD or PhD in a relevant field",
                                        "Strong foundation in cardiovascular science",
                                        "Excellent communication and writing skills",
                                        "Prior research experience preferred",
                                        "Eligible to work in the United States"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-[#A3A7AE] text-sm md:text-base leading-relaxed items-start">
                                            <span className="text-[#00D1FF] mt-1.5 shrink-0">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold mb-5 text-[#EBEEF1]">Benefits</h2>
                                <ul className="space-y-4">
                                    {[
                                        "Competitive stipend and benefits",
                                        "Conference travel support",
                                        "Access to state-of-the-art facilities",
                                        "Networking with global researchers",
                                        "Publication opportunities"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-[#A3A7AE] text-sm md:text-base leading-relaxed items-start">
                                            <span className="text-[#00D1FF] mt-1.5 shrink-0">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Action Card */}
                        <div className="bg-[#111419] border border-white/5 rounded-2x p-6 space-y-4">
                            <Link
                                href={`/researchopportunities/apply/${opportunity.id}`}
                                className="w-full bg-[#00E5FF] hover:bg-[#00D1FF] text-black font-bold py-4 rounded-xl text-sm transition-all duration-300 flex items-center justify-center"
                            >
                                Apply Now
                            </Link>
                            <div className="flex gap-3">
                                <button className="flex-1 bg-[#111419] border border-white/5 hover:bg-white/5 text-white/90 font-medium py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all">
                                    <Bookmark className="w-4 h-4" /> Save
                                </button>
                                <button className="flex-1 bg-[#111419] border border-white/5 hover:bg-white/5 text-white/90 font-medium py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all">
                                    <Share2 className="w-4 h-4" /> Share
                                </button>
                            </div>
                        </div>

                        {/* Mentor Card */}
                        <div className="bg-[#111419] border border-white/5 rounded-2xl p-8 space-y-8">
                            <div>
                                <p className="text-sm font-bold text-white mb-6 tracking-tight">Mentor</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=1470&auto=format&fit=crop"
                                        alt="Mentor"
                                        className="w-14 h-14 rounded-full object-cover border-2 border-[#00D1FF]/20"
                                    />
                                    <div>
                                        <p className="text-white font-bold text-sm tracking-tight">{opportunity.mentor}</p>
                                        <p className="text-[11px] text-[#A3A7AE] font-medium leading-tight mt-1 opacity-70">Professor of Cardiology</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-[#111419] border border-white/5 hover:bg-white/5 text-white font-semibold py-3.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all duration-300">
                                <MessageSquare className="w-4 h-4" /> Contact Mentor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpportunityDetail;
