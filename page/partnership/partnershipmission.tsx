"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import missionImg from "@/assets/images/missionimg.png";

// API-ready data
const MISSION_POINTS = [
    "Enable researchers to produce impactful, high-quality studies",
    "Provide cost-effective and efficient research services",
    "Support scientific institutions in achieving strategic publishing goals",
    "Integrate AI-driven solutions into modern research workflows",
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const PartnershipMission = () => {
    return (
        <section className="relative bg-[#0A0C0F] py-16 px-6 md:px-12 lg:px-20">
            {/* Subtle right-side ambient glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#8B8FF9]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

                    {/* ── Left: Image ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full md:w-[42%] shrink-0"
                    >
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                            <Image
                                src={missionImg}
                                alt="Researcher at microscope"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* ── Right: Content ── */}
                    <div className="flex-1">
                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight"
                        >
                            Our{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D1FF] to-[#4AB8FF]">
                                Mission
                            </span>
                        </motion.h2>

                        {/* Divider line */}
                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{ originX: 0 }}
                            className="h-px w-full bg-gradient-to-r from-[#00D1FF]/30 to-transparent mb-8"
                        />

                        {/* Bullet list */}
                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            className="space-y-4"
                        >
                            {MISSION_POINTS.map((point, i) => (
                                <motion.li
                                    key={i}
                                    variants={itemVariants}
                                    className="flex items-start gap-3 text-[#9CA3AF] text-sm leading-relaxed"
                                >
                                    {/* Bullet dot */}
                                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#9CA3AF] shrink-0" />
                                    {point}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PartnershipMission;
