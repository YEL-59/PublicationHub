"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Plus, FileText, Clock, CheckCircle2, Users } from "lucide-react";
import StatCard from "./components/StatCard";
import ResearchSubmissions from "./components/ResearchSubmissions";
import SubmitIdeaModal from "./components/SubmitIdeaModal";
import { motion } from "framer-motion";
import { getResearchIdeas } from "@/services/mentor";

interface IResearchIdeaRaw {
  id: number;
  user_id: number;
  mentor_id: number;
  study_title: string;
  study_descritions: string;
  research_objectives: string;
  perposed_methodology: string;
  dead_line: string | null;
  start_date: string | null;
  end_date: string | null;
  submission_proof: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

interface ISubmission {
  id: string | number;
  title: string;
  description: string;
  submittedAt: string;
  status: string;
  deadline?: string;
  startDate?: string;
  endDate?: string;
}

const MentorDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissions, setSubmissions] = useState<ISubmission[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [totalSubmissions, setTotalSubmissions] = useState(0);

  const fetchIdeas = useCallback(async (page: number) => {
    setIsLoading(true);
    try {
      const res = await getResearchIdeas(page, 5);
      if (res?.status) {
        const formattedData = res.data.map((item: IResearchIdeaRaw) => ({
          id: item.id,
          title: item.study_title,
          description: item.study_descritions,
          submittedAt: new Date(item.created_at).toLocaleDateString(),
          status: item.status === "pending" ? "Pending Review" : item.status === "accept" ? "Accepted" : item.status,
          deadline: item.dead_line ? new Date(item.dead_line).toLocaleDateString() : undefined,
          startDate: item.start_date ? new Date(item.start_date).toLocaleDateString() : undefined,
          endDate: item.end_date ? new Date(item.end_date).toLocaleDateString() : undefined,
        }));
        setSubmissions(formattedData);
        setCurrentPage(res.pagination.current_page);
        setTotalPages(res.pagination.last_page);
        setTotalSubmissions(res.pagination.total);
      }
    } catch (error) {
      console.error("Failed to fetch ideas", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchIdeas(1);
  }, [fetchIdeas]);


  const stats = [
    { title: "Total Submissions", value: totalSubmissions, icon: FileText, trend: "+3%", iconBgColor: "bg-blue-500/10", iconColor: "text-blue-500" },
    { title: "Pending Applications", value: 0, icon: Clock, trend: "+1", iconBgColor: "bg-amber-500/10", iconColor: "text-amber-500" },
    { title: "Approved", value: 0, icon: Users, trend: "+0", iconBgColor: "bg-emerald-500/10", iconColor: "text-emerald-500" },
    { title: "Completed", value: 0, icon: CheckCircle2, trend: "+0", iconBgColor: "bg-indigo-500/10", iconColor: "text-indigo-500" },
  ];

  const handleNewSubmission = (data: IResearchIdeaRaw) => {
    const newSubmission: ISubmission = {
      id: data.id,
      title: data.study_title,
      description: data.study_descritions,
      submittedAt: new Date().toLocaleDateString(),
      status: "Pending Review",
    };
    setSubmissions([newSubmission, ...submissions]);
    setTotalSubmissions(prev => prev + 1);
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
            style={{ background: "linear-gradient(135deg, #2A9D90 0%, #6467F2 100%)" }}
          >
            <Plus size={20} strokeWidth={3} />
            Submit New Research Idea
          </motion.button>
        </div>

        {/* Submissions Section */}
        <ResearchSubmissions 
          submissions={submissions} 
          isLoading={isLoading}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={fetchIdeas}
        />
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
