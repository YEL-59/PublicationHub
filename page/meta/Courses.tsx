"use client";

import React, { useState } from "react";
import CourseCard from "./CourseCard";
import VideoModal from "./VideoModal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
    "My Courses",
    "All Courses",
    "Research Methods",
    "Scientific Writing",
    "Data Analysis",
    "Career Development",
];

const mockCourses = [
    {
        id: 1,
        title: "Statistical Analysis for Researchers",
        instructor: {
            name: "Dr. Kristin Watson",
            avatar: "https://i.pravatar.cc/150?u=kristin",
            isVerified: true,
        },
        thumbnail: "https://images.unsplash.com/photo-1551288049-bbda48642153?q=80&w=800&auto=format&fit=crop",
        price: 99,
        originalPrice: 148.5,
        modules: 10,
        duration: "10h 45m",
        students: "3,120",
        progress: 0,
        isPremium: true,
    },
    {
        id: 2,
        title: "Research Methodology Fundamentals",
        instructor: {
            name: "Dr. Maria Santos",
            avatar: "https://i.pravatar.cc/150?u=maria",
            isVerified: true,
        },
        thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
        price: 99,
        originalPrice: 148.5,
        modules: 10,
        duration: "10h 45m",
        students: "3,120",
        progress: 65,
        isPremium: false,
    },
    {
        id: 3,
        title: "Plagiarism Check (Ithenticate)",
        instructor: {
            name: "Dr. Kathryn Murphy",
            avatar: "https://i.pravatar.cc/150?u=kathryn",
            isVerified: true,
        },
        thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
        price: 89,
        originalPrice: 148.5,
        modules: 8,
        duration: "10h 45m",
        students: "3,120",
        progress: 0,
        isPremium: true,
    },
    {
        id: 4,
        title: "Scientific Writing & Publication",
        instructor: {
            name: "Dr. Jacob Jones",
            avatar: "https://i.pravatar.cc/150?u=jacob",
            isVerified: true,
        },
        thumbnail: "https://images.unsplash.com/photo-1454165833767-0275d9975b3b?q=80&w=800&auto=format&fit=crop",
        price: 99,
        originalPrice: 148.5,
        modules: 8,
        duration: "10h 45m",
        students: "3,120",
        progress: 65,
        isPremium: false,
    },
    {
        id: 5,
        title: "Research Poster Design",
        instructor: {
            name: "Dr. Bessie Cooper",
            avatar: "https://i.pravatar.cc/150?u=bessie",
            isVerified: true,
        },
        thumbnail: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=800&auto=format&fit=crop",
        price: 99,
        originalPrice: 148.5,
        modules: 8,
        duration: "10h 45m",
        students: "3,120",
        progress: 65,
        isPremium: false,
    },
    {
        id: 6,
        title: "Systematic Review / Meta-Analysis",
        instructor: {
            name: "Dr. Darrell Steward",
            avatar: "https://i.pravatar.cc/150?u=darrell",
            isVerified: true,
        },
        thumbnail: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop",
        price: 90,
        originalPrice: 148.5,
        modules: 8,
        duration: "10h 45m",
        students: "3,120",
        progress: 0,
        isPremium: true,
    },
];

const Courses = () => {
    const [activeCategory, setActiveCategory] = useState("My Courses");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedVideo, setSelectedVideo] = useState<{ title: string } | null>(null);

    return (
        <section className="bg-[#0A0C0F] py-20 px-6 md:px-12 lg:px-20 min-h-screen">
            <div className="container mx-auto">
                {/* Filters */}
                <div className="flex items-start justify-start border-b border-white/10 mb-5">
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                                    ? "bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                                    : "bg-[#1C1F26] border-white/5 text-gray-400 hover:border-white/10 hover:bg-[#252a32]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {mockCourses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            onPlay={() => setSelectedVideo({ title: course.title })}
                        />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group"
                    >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                        <span>Prev</span>
                    </button>

                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5, "...", 15].map((page, idx) => (
                            <button
                                key={idx}
                                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${page === currentPage
                                    ? "bg-cyan-500 text-white"
                                    : page === "..."
                                        ? "text-gray-600 cursor-default"
                                        : "text-gray-500 hover:text-white"
                                    }`}
                                onClick={() => typeof page === "number" && setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrentPage((p) => Math.min(15, p + 1))}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group"
                    >
                        <span>Next</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </div>

            <VideoModal
                isOpen={!!selectedVideo}
                onClose={() => setSelectedVideo(null)}
                title={selectedVideo?.title || ""}
            />
        </section>
    );
};

export default Courses;