"use client";

import React from "react";
import { Search, ChevronDown, Filter, Calendar, User, ArrowRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { opportunities } from "@/lib/opportunities";

// For demonstration, we'll repeat the opportunities to fill 9 slots
const allOpportunities = [...opportunities, ...opportunities.slice(0, 3)];

const ResearchOpportunitiesAll = () => {
    return (
        <section className="min-h-screen bg-[#0A0C0F] text-white py-12 px-6 md:px-12 lg:px-20 font-inter">
            <div className="container mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-[#EBEEF1]">View All Research Opportunities</h1>
                    <p className="text-[#A3A7AE] text-sm md:text-base max-w-3xl leading-relaxed">
                        Discover and apply to research positions, fellowships, and lab opportunities from top institutions worldwide.
                    </p>
                </div>

                {/* Search & Filters */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
                    <div className="relative w-full lg:max-w-xl">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#64748B] w-4.5 h-4.5 transition-colors group-focus-within:text-[#00D1FF]" />
                        <input
                            type="text"
                            placeholder="Search opportunities, mentors, or institutions..."
                            className="w-full bg-[#111419] border border-white/5 rounded-[12px] py-3.5 pl-12 pr-5 text-sm md:text-base placeholder:text-[#64748B] focus:outline-none focus:border-[#00D1FF]/40 transition-all duration-300"
                        />
                    </div>

                    <div className="flex items-center flex-wrap gap-3 w-full lg:w-auto">
                        <button className="flex items-center justify-between gap-2.5 bg-[#111419] border border-white/5 rounded-[10px] px-5 py-2.5 text-sm min-w-[170px] hover:bg-white/5 transition-all text-[#A3A7AE] group">
                            All Specialties <ChevronDown className="w-4 h-4 group-hover:text-white transition-colors" />
                        </button>
                        <button className="flex items-center justify-between gap-2.5 bg-[#111419] border border-white/5 rounded-[10px] px-5 py-2.5 text-sm min-w-[150px] hover:bg-white/5 transition-all text-[#A3A7AE] group">
                            Sort: Newest <ChevronDown className="w-4 h-4 group-hover:text-white transition-colors" />
                        </button>
                        <button className="flex items-center gap-2.5 bg-[#111419] border border-white/5 rounded-[10px] px-5 py-2.5 text-sm hover:bg-white/5 transition-all text-[#A3A7AE] group">
                            <Filter className="w-4 h-4 group-hover:text-white transition-colors" /> More Filters
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {allOpportunities.map((opp, index) => (
                        <motion.div
                            key={`${opp.id}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                            className="group bg-[#111419] border border-white/5 rounded-[20px] overflow-hidden hover:border-[#00D1FF]/20 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                        >
                            {/* Card Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={opp.image}
                                    alt={opp.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111419] via-transparent to-transparent opacity-30" />
                                <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-bold text-black uppercase tracking-wider ${opp.categoryColor} shadow-lg shadow-black/10`}>
                                    {opp.category}
                                </span>
                            </div>

                            {/* Card Content */}
                            <div className="p-7">
                                <h3 className="text-xl font-bold mb-3 text-white tracking-tight leading-snug h-[3.5rem] line-clamp-2">
                                    {opp.title}
                                </h3>
                                <p className="text-[#A3A7AE]/80 text-[13px] md:text-sm mb-6 line-clamp-2 leading-relaxed font-inter h-[2.5rem]">
                                    {opp.description}
                                </p>

                                <div className="flex flex-col gap-3 mb-6">
                                    <div className="flex items-center gap-3 group/info">
                                        <User className="w-4.5 h-4.5 text-[#00D1FF]" strokeWidth={1.5} />
                                        <span className="text-xs font-medium text-[#A3A7AE]/90">{opp.mentor}</span>
                                    </div>
                                    <div className="flex items-center gap-3 group/info">
                                        <Calendar className="w-4.5 h-4.5 text-[#00D1FF]" strokeWidth={1.5} />
                                        <span className="text-xs font-medium text-[#A3A7AE]/90">Deadline: {opp.deadline}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Link
                                        href={`/researchopportunities/apply/${opp.id}`}
                                        className="flex-[3.5] bg-[#00E5FF] hover:bg-[#00D1FF] text-black font-bold py-2.5 px-6 rounded-lg text-xs md:text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn active:scale-[0.98]"
                                    >
                                        Apply Now <ArrowRight className="w-4.5 h-4.5 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href={`/researchopportunities/${opp.id}`}
                                        className="flex-1 bg-[#111419] border border-white/10 hover:bg-white/5 text-white/90 font-medium py-2.5 px-2 rounded-lg text-xs md:text-sm transition-all duration-300 active:scale-[0.98] text-center"
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 md:gap-4 py-8">
                    <button className="flex items-center gap-2 text-[#A3A7AE] hover:text-white transition-colors text-sm font-medium mr-4 group">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Prev
                    </button>

                    <button className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#00D1FF] text-black font-bold text-sm transition-all shadow-lg shadow-[#00D1FF]/20">
                        1
                    </button>

                    {[2, 3, 4, 5].map((num) => (
                        <button key={num} className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-transparent border border-white/5 text-[#A3A7AE] hover:text-white hover:border-white/20 font-medium text-sm transition-all">
                            {num}
                        </button>
                    ))}

                    <span className="text-[#64748B] px-1 md:px-2">...</span>

                    <button className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-transparent border border-white/5 text-[#A3A7AE] hover:text-white hover:border-white/20 font-medium text-sm transition-all">
                        15
                    </button>

                    <button className="flex items-center gap-2 text-[#A3A7AE] hover:text-white transition-colors text-sm font-medium ml-4 group">
                        Next <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ResearchOpportunitiesAll;
