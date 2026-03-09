"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronLeft,
    List,
    Clock,
    Users,
    CheckCircle2,
    ShieldCheck,
    Play,
    Star,
    ArrowRight,
    CreditCard,
    Globe,
    GraduationCap
} from "lucide-react";
import metaBg from "@/assets/images/metabg.png";
import { motion } from "framer-motion";

const CourseDetails = () => {
    return (
        <section className="relative min-h-screen bg-[#0A0C0F] pt-28 pb-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={metaBg}
                    alt="Background"
                    fill
                    className="object-cover opacity-30 select-none pointer-events-none"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0C0F]/80 via-[#0A0C0F]/90 to-[#0A0C0F]" />
            </div>

            <div className="container mx-auto  relative z-10">
                {/* Back Link */}
                <Link
                    href="/meta"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 group"
                >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-semibold tracking-wide uppercase">Back to Academy</span>
                </Link>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Content Column */}
                    <div className="flex-1 max-w-4xl">
                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-3 mb-10">
                            <span className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[11px] font-bold uppercase tracking-[0.1em] backdrop-blur-md">
                                Data Analysis
                            </span>
                            <span className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-bold uppercase tracking-[0.1em] backdrop-blur-md flex items-center gap-2">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                Premium
                            </span>
                        </div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-extrabold text-white mb-10 leading-[1.1] tracking-tight"
                        >
                            Statistical Analysis <br className="hidden md:block" /> for Researchers
                        </motion.h1>

                        {/* Long Description Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-6 text-gray-400 text-lg leading-relaxed mb-12 max-w-3xl"
                        >
                            <p>
                                This advanced course covers everything from basic descriptive statistics to complex multivariate analysis. Learn to use statistical software, interpret results, and present findings effectively. This advanced course covers everything from basic descriptive statistics to complex multivariate analysis.
                            </p>
                            <p>
                                Learn to use statistical software, interpret results, and present findings effectively. This advanced course covers everything from basic descriptive statistics to complex multivariate analysis. Learn to use statistical software, interpret results, and present findings effectively.
                            </p>
                        </motion.div>

                        {/* Key Stats Bar */}
                        <div className="flex flex-wrap items-center gap-10 text-gray-400 mb-16 py-6 border-y border-white/5">
                            <div className="flex items-center gap-3">
                                <List className="w-5 h-5 text-cyan-400" />
                                <span className="text-sm font-bold text-gray-300">15 Modules</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-cyan-400" />
                                <span className="text-sm font-bold text-gray-300">10.5 Hours</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users className="w-5 h-5 text-cyan-400" />
                                <span className="text-sm font-bold text-gray-300">3,120 Students</span>
                            </div>
                        </div>

                        {/* Instructor Profile Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl flex flex-col md:flex-row items-center md:items-start gap-8"
                        >
                            <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/10 flex-shrink-0 shadow-2xl">
                                <Image
                                    src="https://i.pravatar.cc/150?u=kristin"
                                    alt="Dr. Kristin Watson"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                    <h4 className="text-2xl font-bold text-white tracking-tight">Dr. Kristin Watson</h4>
                                    <div className="p-1 rounded-full bg-blue-500/20">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                    </div>
                                </div>
                                <p className="text-gray-400 text-base leading-relaxed max-w-xl italic opacity-80">
                                    "This advanced course covers everything from basic descriptive statistics to complex multivariate analysis. Learn to use statistical software, interpret results, and present findings effectively."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Enrollment Sidebar (Styled like the exact Card Design) */}
                    <aside className="lg:w-[420px] shrink-0">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="sticky top-28 bg-[#111419] border border-white/5 rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        >
                            {/* Media Section */}
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bbda48642153?q=80&w=800&auto=format&fit=crop"
                                    alt="Course Preview"
                                    fill
                                    className="object-cover transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-black/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl transition-transform hover:scale-110">
                                        <Play className="w-7 h-7 fill-current ml-1" />
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Content */}
                            <div className="p-8">
                                {/* Pricing */}
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-4 mb-3">
                                        <span className="text-5xl font-black text-cyan-400 tracking-tighter">$99</span>
                                        <span className="text-xl text-gray-500 line-through font-medium opacity-60">$148.5</span>
                                    </div>
                                    <div className="inline-flex items-center gap-2 text-emerald-400 text-[13px] font-bold uppercase tracking-wider">
                                        <Star className="w-4 h-4 fill-current" />
                                        33% Special Discount Today
                                    </div>
                                </div>

                                {/* Enrollment CTA */}
                                <div className="space-y-4 mb-10">
                                    <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#00D4FF] to-[#8E90FF] text-white font-black text-lg transition-all active:scale-[0.98] shadow-[0_10px_25px_rgba(0,212,255,0.2)] flex items-center justify-center gap-2 group">
                                        ENROLL NOW
                                        <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                                    </button>

                                    <button className="w-full py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm transition-all border border-white/10">
                                        Try Free Sample
                                    </button>
                                </div>

                                {/* Feature List */}
                                <div>
                                    <h5 className="text-gray-300 font-extrabold text-xs mb-6 uppercase tracking-[0.2em] opacity-80">Included in this course:</h5>
                                    <div className="space-y-5">
                                        {[
                                            { icon: <Clock className="w-5 h-5" />, text: "Lifetime access to all modules" },
                                            { icon: <GraduationCap className="w-5 h-5" />, text: "Official certificate of completion" },
                                            { icon: <Globe className="w-5 h-5" />, text: "Expert support & community access" },
                                            { icon: <CreditCard className="w-5 h-5" />, text: "Privacy and return guarantee" },
                                        ].map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-4 text-gray-400 group cursor-default">
                                                <div className="mt-0.5 text-cyan-400 transition-transform group-hover:scale-110">
                                                    {feature.icon}
                                                </div>
                                                <span className="text-[15px] font-medium leading-snug group-hover:text-gray-200 transition-colors">{feature.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </aside>
                </div>

                {/* Course Curriculum Section */}
                <div className="mt-24 max-w-4xl">
                    <h2 className="text-2xl font-bold text-white mb-10 tracking-tight flex items-center gap-3">
                        Course Curriculum
                    </h2>

                    <div className="space-y-4">
                        {[
                            { id: 4, title: "Probability Fundamentals", duration: "125 min" },
                            { id: 5, title: "T-Tests and ANOVA", duration: "82 min" },
                            { id: 6, title: "Correlation Analysis", duration: "95 min" },
                            { id: 7, title: "Simple Regression", duration: "112 min" },
                            { id: 8, title: "Logistic Regression", duration: "45 min" },
                            { id: 9, title: "Factor Analysis", duration: "42 min" },
                            { id: 10, title: "Cluster Analysis", duration: "62 min" },
                        ].map((module) => (
                            <motion.div
                                key={module.id}
                                whileHover={{ x: 10 }}
                                className="group p-5 rounded-2xl bg-[#111419]/60 border border-white/5 backdrop-blur-sm flex items-center justify-between hover:border-cyan-500/30 transition-all cursor-pointer"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">
                                        {module.id}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                                            {module.title}
                                        </h4>
                                        <span className="text-xs text-gray-500 font-medium">
                                            {module.duration}
                                        </span>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                                    <Play className="w-5 h-5 fill-current" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
