"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, CheckCircle2, List, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

interface CourseCardProps {
    course: {
        id: number;
        title: string;
        instructor: {
            name: string;
            avatar: string;
            isVerified: boolean;
        };
        thumbnail: string;
        price: number;
        originalPrice: number;
        modules: number;
        duration: string;
        students: string;
        progress: number;
        isPremium: boolean;
    };
    onPlay?: () => void;
}

const CourseCard = ({ course, onPlay }: CourseCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group bg-[#111419] border border-white/5 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
        >
            {/* Thumbnail */}
            <div
                className="relative aspect-video overflow-hidden cursor-pointer"
                onClick={onPlay}
            >
                <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-90 group-hover:scale-110 transition-all">
                        <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                </div>
            </div>

            {/* Instructor Row */}
            <div className="px-5 py-4 flex items-center gap-3 bg-[#111419] border-b border-white/5">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10">
                    <Image
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="text-sm font-medium text-gray-300">{course.instructor.name}</span>
                    {course.instructor.isVerified && (
                        <CheckCircle2 className="w-4 h-4 text-[#5D5DFF] fill-[#5D5DFF]/10" />
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className="p-6">
                <Link href={`/meta/${course.id}`}>
                    <h3 className="text-xl font-bold text-white mb-5 line-clamp-1 hover:text-cyan-400 transition-colors">
                        {course.title}
                    </h3>
                </Link>

                {/* Meta Row */}
                <div className="flex items-center gap-6 text-gray-500 text-[14px] mb-6">
                    <div className="flex items-center gap-2">
                        <List className="w-4 h-4" />
                        <span>{course.modules} modules</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                    </div>
                </div>

                {/* Progress Section */}
                <div className="mb-8">
                    <div className="h-2 w-full bg-[#2A2B31] rounded-full overflow-hidden mb-3">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${course.progress || 10}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-[#00D4FF] to-[#8E90FF]"
                        />
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                        {course.progress || 10}% completed
                    </div>
                </div>

                {/* CTA */}
                <Link href={`/meta/${course.id}`}>
                    <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00D4FF] to-[#8E90FF] text-white font-bold text-base hover:opacity-90 transition-opacity active:scale-[0.98] shadow-lg shadow-cyan-500/10">
                        Continue
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default CourseCard;
