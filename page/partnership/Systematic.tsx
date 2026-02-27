"use client";

import React from "react";
import { motion } from "framer-motion";

// API-ready data
const STEPS = [
    "PRISMA-compliant methodology",
    "Database search strategy",
    "Data extraction & quality assessment",
    "Meta-analysis (pairwise + network meta-analysis)",
    "Publication-ready manuscript preparation",
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Systematic = () => {
    return (
        <section className="relative bg-[#0A0C0F] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00D1FF]/4 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto">

                {/* ── Heading ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">
                        Systematic{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D1FF] to-[#4AB8FF]">
                            Reviews &amp; Meta-Analysis
                        </span>
                    </h2>
                    <p className="text-[#6B7280] text-sm">
                        We deliver complete systematic review solutions:
                    </p>
                </motion.div>

                {/* ── Two-column layout ── */}
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">

                    {/* Left: Numbered steps */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className="flex-1 flex flex-col gap-3 w-full"
                    >
                        {STEPS.map((step, i) => (
                            <motion.div
                                key={i}
                                variants={stepVariants}
                                className="flex items-center gap-4 bg-[#0D1017] border border-white/[0.07] rounded-full px-5 py-3.5 hover:border-[#00D1FF]/20 transition-colors duration-300 group"
                            >
                                {/* Number circle */}
                                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#00D1FF] to-[#4AB8FF] flex items-center justify-center shadow-md shadow-[#00D1FF]/20">
                                    <span className="text-[11px] font-black text-[#0A0C0F]">
                                        {i + 1}
                                    </span>
                                </div>

                                {/* Step text */}
                                <span className="text-white text-[13px] font-medium leading-tight">
                                    {step}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 28, scale: 1.02 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full md:w-[46%] shrink-0"
                    >
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-2xl shadow-black/50">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=80"
                                alt="Scientific laboratory with blue lighting"
                                className="w-full h-full object-cover object-center"
                            />
                            {/* Subtle vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Systematic;