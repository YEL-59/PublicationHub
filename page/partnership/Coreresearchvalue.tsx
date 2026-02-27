"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// API-ready data
const BULLET_POINTS = [
    "Enable researchers to produce impactful, high-quality studies",
    "Provide cost-effective and efficient research services",
    "Support scientific institutions in achieving strategic publishing goals",
    "Integrate AI-driven solutions into modern research workflows",
];

const SERVICE_CARDS = [
    {
        title: "Grant",
        titleAccent: "Services",
        items: [
            "Grant proposal writing",
            "Formatting according to funding agency requirements",
            "Budget planning and justification",
            "Methodology and statistical sections",
            "Pre-submission review and refinement",
        ],
    },
    {
        title: "Statistical",
        titleAccent: "Analysis Services",
        items: [
            "Descriptive & inferential statistics",
            "Regression models",
            "Survival analysis",
            "Time-series analysis",
            "Hypothesis testing",
            "Data cleaning & management",
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const CoreResearchValue = () => {
    return (
        <section className="relative bg-[#0A0C0F] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00D1FF]/4 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto">

                {/* ── Section heading ── */}
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-3">
                        Core{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D1FF] to-[#4AB8FF]">
                            Research Services
                        </span>
                    </h2>
                    <p className="text-[#6B7280] text-sm">
                        We provide full support across all stages of research
                    </p>
                </motion.div>

                {/* ── Top: image + bullet list ── */}
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-12">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full md:w-[45%] shrink-0"
                    >
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-2xl shadow-black/40">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80"
                                alt="Scientist at microscope in laboratory"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </motion.div>

                    {/* Bullet list */}
                    <motion.ul
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className="flex-1 space-y-5"
                    >
                        {BULLET_POINTS.map((point, i) => (
                            <motion.li
                                key={i}
                                variants={itemVariants}
                                className="flex items-start gap-3 text-[#9CA3AF] text-[13px] leading-snug"
                            >
                                <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#9CA3AF] shrink-0" />
                                {point}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>

                {/* ── Bottom: service cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {SERVICE_CARDS.map((card, cardIdx) => (
                        <motion.div
                            key={cardIdx}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.6,
                                delay: cardIdx * 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="bg-[#0D1017] border border-white/[0.06] rounded-2xl p-7"
                        >
                            {/* Card heading */}
                            <h3 className="text-xl font-black tracking-tight mb-5">
                                <span className="text-white">{card.title} </span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D1FF] to-[#4AB8FF]">
                                    {card.titleAccent}
                                </span>
                            </h3>

                            {/* Items */}
                            <motion.ul
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-3.5"
                            >
                                {card.items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        variants={itemVariants}
                                        className="flex items-center gap-3 text-[#9CA3AF] text-[13px]"
                                    >
                                        <CheckCircle
                                            className="w-4 h-4 text-[#00D1FF] shrink-0"
                                            strokeWidth={1.8}
                                        />
                                        {item}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CoreResearchValue;