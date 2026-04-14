"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, User, CheckCircle2, Play } from "lucide-react";

const ALL_COURSES = [
    {
        id: 1,
        title: "Statistical Analysis for Researchers",
        instructor: "Dr. Kristin Watson",
        image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=800",
        progress: 20,
        stats: { modules: 12, hours: "10h 45m", students: "1,230" }
    },
    {
        id: 2,
        title: "Research Methodology Fundamentals",
        instructor: "Dr. Maria Santos",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800",
        progress: 35,
        stats: { modules: 10, hours: "08h 20m", students: "3,105" }
    },
    {
        id: 3,
        title: "Plagiarism Check (ithenticate)",
        instructor: "Dr. Kathryn Murphy",
        image: "https://images.unsplash.com/photo-1588702547319-f06b988f6250?q=80&w=800",
        progress: 0,
        stats: { modules: 5, hours: "02h 30m", students: "2,560" }
    }
];

export default function MyCoursesPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-[#00D1FF]" />
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">My Enrolled Courses</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ALL_COURSES.map((course, index) => (
                    <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[#111419] border border-white/5 rounded-2xl overflow-hidden flex flex-col group hover:border-[#00D1FF]/20 transition-all duration-300"
                    >
                         <div className="relative h-44 overflow-hidden">
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-12 h-12 rounded-full bg-[#00D1FF] flex items-center justify-center text-black">
                                        <Play className="fill-current" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-800">
                                        <img src={`https://i.pravatar.cc/150?u=${course.id}`} alt={course.instructor} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-[#94A3B8] text-[10px] font-medium">{course.instructor}</span>
                                    <div className="w-1 h-1 rounded-full bg-[#00D1FF]" />
                                    <CheckCircle2 className="w-3 h-3 text-[#00D1FF]" />
                                </div>
                                <h3 className="text-base font-bold text-white mb-4 line-clamp-2 group-hover:text-[#00D1FF] transition-colors">{course.title}</h3>
                                
                                <div className="flex items-center justify-between text-xs text-[#64748B] font-medium mb-4">
                                    <span>{course.stats.modules} modules</span>
                                    <span>{course.stats.hours}</span>
                                    <div className="flex items-center gap-1">
                                        <User className="w-3 h-3" /> {course.stats.students}
                                    </div>
                                </div>

                                <div className="mt-auto pt-5 flex flex-col gap-4 border-t border-white/5">
                                    <div className="flex justify-between items-center mb-1">
                                         <span className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest">Progress</span>
                                         <span className="text-[10px] text-[#00D1FF] font-bold">{course.progress}%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#00D1FF] transition-all duration-1000" style={{ width: `${course.progress}%` }} />
                                    </div>
                                    <button className="w-full bg-[#00D1FF] hover:bg-[#00A3FF] text-black text-sm font-bold py-3 rounded-xl transition-all active:scale-[0.98]">
                                        Continue Learning
                                    </button>
                                </div>
                            </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
