"use client";

import React from "react";
import Image from "next/image";
import metaBg from "@/assets/images/metabg.png";
import { motion } from "framer-motion";
import { BookOpen, Users, GraduationCap, TrendingUp } from "lucide-react";

const stats = [
    {
        icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
        value: "25+",
        label: "Courses",
    },
    {
        icon: <Users className="w-6 h-6 text-cyan-400" />,
        value: "12K+",
        label: "Active Learners",
    },
    {
        icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
        value: "8K+",
        label: "Certificates Issued",
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
        value: "89%",
        label: "Completion Rate",
    },
];

const MetaHero = () => {
    return (
        <section className="relative pt-24 pb-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#0A0C0F] min-h-[85vh] flex items-center">
            {/* Background Image */}
            <Image
                src={metaBg}
                alt="Research Network Background"
                fill
                className="object-cover opacity-60"
                priority
            />

            {/* Content Overlay */}
            <div className="container mx-auto relative z-10 mt-10">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1F26] border border-white/10 backdrop-blur-md mb-8 group cursor-default"
                    >
                        <div className="p-1 rounded-full bg-purple-500/20">
                            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                        </div>
                        <span className="text-sm font-medium text-gray-300">Meta Academy</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Research Skills</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg text-gray-400 mb-14 max-w-2xl leading-relaxed"
                    >
                        Expert-led courses designed to accelerate your academic career. Learn at
                        your own pace and earn certificates to showcase your expertise.
                    </motion.p>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-[#111419]/60 border border-white/5 backdrop-blur-sm group hover:border-cyan-500/30 transition-all duration-300 flex flex-col items-start"
                            >
                                <div className="mb-4 p-2.5 rounded-xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl font-bold text-white mb-0.5 tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-[13px] text-gray-500 font-medium uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Subtle glow effect to match premium design */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default MetaHero;