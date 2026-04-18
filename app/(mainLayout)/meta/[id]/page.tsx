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
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getCourseDetails } from "@/services/home";
import { Course } from "@/types/course";
import { Loader2 } from "lucide-react";

const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState<Course | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDetails = async () => {
            if (!id) return;
            try {
                const res = await getCourseDetails(id as string);
                if (res.status) {
                    setCourse(res.data);
                } else {
                    setError(res.message);
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchDetails();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0A0C0F] flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-cyan-500 animate-spin" />
            </div>
        );
    }

    if (error || !course) {
        return (
            <div className="min-h-screen bg-[#0A0C0F] flex flex-col items-center justify-center gap-4">
                <p className="text-red-400 text-xl font-bold">{error || "Course not found"}</p>
                <Link href="/meta" className="text-cyan-400 hover:underline">Back to Academy</Link>
            </div>
        );
    }
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
                            {course.categories?.map((cat) => (
                                <span key={cat.id} className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[11px] font-bold uppercase tracking-[0.1em] backdrop-blur-md">
                                    {cat.name}
                                </span>
                            ))}
                            {course.is_future && (
                                <span className="px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-bold uppercase tracking-[0.1em] backdrop-blur-md">
                                    Upcoming
                                </span>
                            )}
                        </div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-extrabold text-white mb-10 leading-[1.2] tracking-tight"
                        >
                            {course.title}
                        </motion.h1>

                        {/* Overview and Descriptions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-10 text-gray-400 text-lg leading-relaxed mb-12 max-w-3xl"
                        >
                            <div className="prose prose-invert prose-p:text-gray-400 prose-p:leading-relaxed">
                                <p>{course.overview}</p>
                            </div>

                            {course.descriptions?.map((desc, idx) => (
                                <div key={idx} className="space-y-4">
                                    <h3 className="text-xl font-bold text-white tracking-tight">{desc.title}</h3>
                                    <div 
                                        className="prose prose-invert prose-p:text-gray-400 prose-li:text-gray-400"
                                        dangerouslySetInnerHTML={{ __html: desc.description }} 
                                    />
                                </div>
                            ))}
                        </motion.div>

                        {/* Key Stats Bar */}
                        <div className="flex flex-wrap items-center gap-10 text-gray-400 mb-16 py-6 border-y border-white/5">
                            <div className="flex items-center gap-3">
                                <List className="w-5 h-5 text-cyan-400" />
                                <span className="text-sm font-bold text-gray-300">
                                    {course.modules?.length || course.start_module} Modules
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-cyan-400" />
                                <span className="text-sm font-bold text-gray-300">
                                    {course.total_durations}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users className="w-5 h-5 text-cyan-400" />
                                <span className="text-sm font-bold text-gray-300">Active Course</span>
                            </div>
                        </div>

                        {/* Instructor Profile Card */}
                        {course.mentors?.[0] && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl flex flex-col md:flex-row items-center md:items-start gap-8"
                            >
                                <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/10 flex-shrink-0 shadow-2xl bg-gray-800">
                                    {course.mentors[0].user?.avatar ? (
                                        <Image
                                            src={course.mentors[0].user.avatar}
                                            alt={course.mentors[0].user.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <Users className="w-10 h-10 text-gray-600" />
                                        </div>
                                    )}
                                </div>
                                <div className="text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                        <h4 className="text-2xl font-bold text-white tracking-tight">
                                            {course.mentors[0].user?.name}
                                        </h4>
                                        <div className="p-1 rounded-full bg-blue-500/20">
                                            <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-base leading-relaxed max-w-xl italic opacity-80">
                                        Expert Research Mentor at PublicationHub Academy. Dedicated to advancing scientific writing and research excellence.
                                    </p>
                                </div>
                            </motion.div>
                        )}
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
                            <div className="relative aspect-video overflow-hidden bg-gray-900">
                                {course.thumbnail ? (
                                    <Image
                                        src={course.thumbnail}
                                        alt={course.title}
                                        fill
                                        className="object-cover transition-transform duration-1000"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <Play className="w-12 h-12 text-gray-800" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl transition-transform hover:scale-110 cursor-pointer">
                                        <Play className="w-7 h-7 fill-current ml-1" />
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Content */}
                            <div className="p-8">
                                {/* Pricing */}
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-4 mb-3">
                                        <span className="text-5xl font-black text-cyan-400 tracking-tighter">${course.price}</span>
                                        {course.old_price && (
                                            <span className="text-xl text-gray-500 line-through font-medium opacity-60">${course.old_price}</span>
                                        )}
                                    </div>
                                    <div className="inline-flex items-center gap-2 text-emerald-400 text-[13px] font-bold uppercase tracking-wider">
                                        <Star className="w-4 h-4 fill-current" />
                                        Limited Time Offer
                                    </div>
                                </div>

                                {/* Enrollment CTA */}
                                <div className="space-y-4 mb-10">
                                    <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#00D4FF] to-[#8E90FF] text-white font-black text-lg transition-all active:scale-[0.98] shadow-[0_10px_25px_rgba(0,212,255,0.2)] flex items-center justify-center gap-2 group">
                                        ENROLL NOW
                                        <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                                    </button>

                                    <button className="w-full py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm transition-all border border-white/10">
                                        {course.thumbnail_button_text || "Try Free Sample"}
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
                {course.modules && course.modules.length > 0 && (
                    <div className="mt-24 max-w-4xl">
                        <h2 className="text-2xl font-bold text-white mb-10 tracking-tight flex items-center gap-3">
                            Course Curriculum
                        </h2>

                        <div className="space-y-6">
                            {course.modules.map((module, idx) => (
                                <div key={module.id} className="space-y-3">
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="group p-5 rounded-2xl bg-[#111419]/60 border border-white/5 backdrop-blur-sm flex items-center justify-between hover:border-cyan-500/30 transition-all cursor-pointer"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                                                    {module.title}
                                                </h4>
                                                <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                                                    <span className="uppercase tracking-wider text-cyan-500/80">{module.type}</span>
                                                    <span>•</span>
                                                    <span>{module.durations || "N/A"}</span>
                                                    {module.is_locked && (
                                                        <>
                                                            <span>•</span>
                                                            <span className="text-amber-500/80 uppercase tracking-wider font-bold">Locked</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">{module.lessons.length} lessons</span>
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-cyan-400 opacity-60 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                                                <Play className="w-5 h-5 fill-current" />
                                            </div>
                                        </div>
                                    </motion.div>
                                    
                                    {/* Lessons list (Sub-items) */}
                                    <div className="ml-16 space-y-2">
                                        {module.lessons.map((lesson) => (
                                            <div key={lesson.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-gray-700 group-hover:bg-cyan-500 transition-colors" />
                                                    <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">{lesson.title}</span>
                                                </div>
                                                <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{lesson.durations || "5-10 min"}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CourseDetails;
