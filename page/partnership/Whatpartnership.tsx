"use client";

import React from "react";
import { motion } from "framer-motion";

// API-ready content
const content = {
    badge: "About Us",
    heading: "What is",
    headingAccent: "Publication Hub?",
    paragraphs: [
        "Publication Hub is a leading Saudi research organization, officially registered at the Ministry of Commerce and fully VAT-registered, dedicated to transforming raw data into high-quality, publishable scientific research.",
        "We collaborate with universities, hospitals, and research centers to streamline research workflows and enhance scientific output.",
    ],
    // Replace with local assets or API URLs when available
    images: {
        left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        right: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    },
};

const Whatpartnership = () => {
    return (
        <section className="relative bg-[#0A0C0F] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
            {/* Ambient glow top-right */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-[#00D1FF]/4 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                    {/* ── LEFT: Text content ── */}
                    <div className="flex-1 z-10">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center px-3 py-1 bg-[#111419] border border-white/8 rounded-full text-[10px] font-semibold text-[#9CA3AF] tracking-wide mb-5"
                        >
                            About Us
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-6"
                        >
                            {content.heading}{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D1FF] to-[#4AB8FF]">
                                {content.headingAccent}
                            </span>
                        </motion.h2>

                        {/* Paragraphs */}
                        <div className="space-y-4 max-w-sm">
                            {content.paragraphs.map((para, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                                    className="text-[#6B7280] text-[13px] leading-relaxed"
                                >
                                    {para}
                                </motion.p>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Staggered image pair ── */}
                    <div className="relative w-full md:w-[52%] shrink-0 flex items-end justify-center h-[340px] md:h-[400px]">

                        {/* Left image — tilted, shorter, positioned left-center */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -12, y: 30 }}
                            whileInView={{ opacity: 1, rotate: -6, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute left-[4%] bottom-0 w-[52%] aspect-[4/3] rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/50"
                            style={{ zIndex: 1 }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={content.images.left}
                                alt="Research data analysis"
                                className="w-full h-full object-cover"
                            />
                            {/* Subtle dark vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </motion.div>

                        {/* Right image — upright, taller, positioned right */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute right-[4%] bottom-0 w-[40%] aspect-[3/4] rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/50"
                            style={{ zIndex: 2 }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={content.images.right}
                                alt="Team collaboration"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Whatpartnership;