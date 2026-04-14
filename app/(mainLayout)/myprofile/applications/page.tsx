"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, User, Calendar, MapPin, Clock } from "lucide-react";

const MY_APPLICATIONS = [
    {
        id: 1,
        title: "Genetic Medicine Fellowship",
        category: "Data Science",
        status: "Applied",
        statusColor: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        mentor: "Dr. Sarah Chen",
        date: "Applied on Oct 24, 2024",
        deadline: "Mar 15, 2026",
        image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=800"
    },
    {
        id: 2,
        title: "Neuroscience Laboratory Position",
        category: "Neurology",
        status: "Under Review",
        statusColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        mentor: "Dr. Sarah Chen",
        date: "Applied on Nov 12, 2024",
        deadline: "Mar 15, 2026",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800"
    },
    {
        id: 3,
        title: "AI in Healthcare Research Position",
        category: "Data Science",
        status: "Active",
        statusColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
        mentor: "Dr. Sarah Chen",
        date: "Applied on Dec 05, 2024",
        deadline: "Mar 15, 2026",
        image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800"
    }
];

export default function MyApplicationsPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-[#00D1FF]" />
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Research Applications</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {MY_APPLICATIONS.map((app, index) => (
                    <motion.div
                        key={app.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[#111419] border border-white/5 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row gap-6 hover:border-[#00D1FF]/20 transition-all duration-300 group"
                    >
                        <div className="relative w-full md:w-48 h-32 rounded-xl overflow-hidden shrink-0">
                            <img src={app.image} alt={app.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                     <span className="text-[#00D1FF] text-[10px] font-bold uppercase tracking-widest">{app.category}</span>
                                     <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${app.statusColor} uppercase tracking-wider`}>
                                         {app.status}
                                     </span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00D1FF] transition-colors">{app.title}</h3>
                                
                                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[#64748B] text-xs">
                                     <div className="flex items-center gap-1.5">
                                         <User className="w-3.5 h-3.5 text-[#00D1FF]" />
                                         <span>Mentor: {app.mentor}</span>
                                     </div>
                                     <div className="flex items-center gap-1.5">
                                         <Clock className="w-3.5 h-3.5 text-[#00D1FF]" />
                                         <span>{app.date}</span>
                                     </div>
                                     <div className="flex items-center gap-1.5">
                                         <Calendar className="w-3.5 h-3.5 text-[#00D1FF]" />
                                         <span>Deadline: {app.deadline}</span>
                                     </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:justify-center">
                             <button className="bg-[#1F242D] hover:bg-white/5 text-white border border-white/5 py-2.5 px-6 rounded-xl text-sm font-bold transition-all whitespace-nowrap">
                                 View Details
                             </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
