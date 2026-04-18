"use client";
import React, { useState } from "react";
import { Plus, FileText, Clock, CheckCircle2, Users } from "lucide-react";
import StatCard from "./components/StatCard";
import ResearchSubmissions from "./components/ResearchSubmissions";
import SubmitIdeaModal from "./components/SubmitIdeaModal";
import { motion } from "framer-motion";

const MentorDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissions, setSubmissions] = useState<any[]>([
    {
      id: "1",
      title: "Genetic predispositions to heart disease",
      description: "Abc",
      submittedAt: "1/21/2026",
      status: "Approved",
      deadline: "4/21/2026",
      daysRemaining: 90
    }
  ]);

  const stats = [
    { title: "Total Submissions", value: submissions.length || 0, icon: FileText, trend: "+3%", iconBgColor: "bg-blue-500/10", iconColor: "text-blue-500" },
    { title: "Pending Applications", value: 0, icon: Clock, trend: "+1", iconBgColor: "bg-amber-500/10", iconColor: "text-amber-500" },
    { title: "Approved", value: 0, icon: Users, trend: "+0", iconBgColor: "bg-emerald-500/10", iconColor: "text-emerald-500" },
    { title: "Completed", value: 0, icon: CheckCircle2, trend: "+0", iconBgColor: "bg-indigo-500/10", iconColor: "text-indigo-500" },
  ];

  const handleNewSubmission = (data: any) => {
    const newSubmission = {
      id: Math.random().toString(36).substr(2, 9),
      title: data.title,
      description: data.description,
      submittedAt: new Date().toLocaleDateString(),
      status: "Pending Review",
    };
    setSubmissions([newSubmission, ...submissions]);
  };

  return (
    <div className="container mx-auto px-4 py-10 md:px-6 lg:px-8">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Dashboard</h1>
          <p className="text-gray-400 font-medium">Welcome back! Here&apos;s an overview of your research opportunities.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Action Bar */}
        <div className="flex justify-start">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
            style={{ background: "linear-gradient(90deg, #2563EB 0%, #7C3AED 100%)" }}
          >
            <Plus size={20} strokeWidth={3} />
            Submit New Research Idea
          </motion.button>
        </div>

        {/* Submissions Section */}
        <ResearchSubmissions submissions={submissions} />
      </div>

      <SubmitIdeaModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmitSuccess={handleNewSubmission}
      />
    </div>
  );
};

export default MentorDashboard;
