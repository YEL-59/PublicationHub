"use client";

import React from "react";
import { motion } from "framer-motion";

// API-ready data structure
const missionData = {
    badge: "Excellence in Saudi Arabia",
    heading: "Our",
    headingAccent: "Mission",
    description:
        "ResearchHub is the premier medical research support network in the Kingdom. We bridge the gap between clinical practice and academic success with world-class mentorship, statistical rigor, and publication expertise.",
    stats: [
        { value: "300+", label: "Publications" },
        { value: "10k+", label: "Delivered" },
    ],
    // Replace with your actual image path/URL
    image: "https://images.unsplash.com/photo-1532094349884-543559165b43?w=900&q=80",
};

const Mission = () => {
    return (
        <section className="relative py-20 px-6 md:px-12 lg:px-40 bg-[#0A0C0F]">
            <div className="container mx-auto ">
                <div className="relative w-full rounded-[24px] overflow-hidden border border-white/5 bg-[#0E1117] flex flex-col md:flex-row min-h-[220px] md:min-h-[260px]">

                    {/* ── Left content panel ── */}
                    <div className="relative z-10 flex flex-col justify-center px-8 md:px-12 py-10 flex-1">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center px-3 py-1.5 border border-[#00D1FF]/40 bg-[#00D1FF]/5 rounded-full text-[9px] font-bold text-[#00D1FF] uppercase tracking-[0.18em] mb-5 w-fit"
                        >
                            {missionData.badge}
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl md:text-4xl font-black text-white leading-tight mb-4"
                        >
                            {missionData.heading}
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D1FF] to-[#4AB8FF]">
                                {missionData.headingAccent}
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[#6B7280] text-[13px] leading-relaxed max-w-xs mb-8"
                        >
                            {missionData.description}
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex items-center gap-10"
                        >
                            {missionData.stats.map((stat, i) => (
                                <div key={i}>
                                    <p className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
                                        {stat.value}
                                    </p>
                                    <p className="text-[10px] font-bold text-[#4B5563] uppercase tracking-[0.15em] mt-1">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── Right image panel ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full md:w-[45%] shrink-0 min-h-[220px] md:min-h-0"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={missionData.image}
                            alt="Medical research laboratory"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Fade from left so it blends with text panel */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1117] via-[#0E1117]/30 to-transparent" />
                        {/* Subtle dark corner vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117]/40 via-transparent to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Mission;