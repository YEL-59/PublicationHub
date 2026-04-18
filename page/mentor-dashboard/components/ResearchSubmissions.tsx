"use client";
import React, { useState } from "react";
import { FileText, MoreVertical, Clock, MessageSquare, Upload, Eye, Check, X } from "lucide-react";
import { motion } from "framer-motion";
import ResearchSubmissionDetailsModal from "./ResearchSubmissionDetailsModal";
import UploadSubmissionProofModal from "./UploadSubmissionProofModal";
import Link from "next/link";

interface Submission {
  id: string;
  title: string;
  description: string;
  submittedAt: string;
  status: "Pending Review" | "Approved" | "Completed" | "Rejected";
  deadline?: string;
  daysRemaining?: number;
}

interface ResearchSubmissionsProps {
  submissions: Submission[];
}

const ResearchSubmissions = ({ submissions }: ResearchSubmissionsProps) => {
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const handleOpenDetails = (submission: Submission) => {
    setSelectedSubmission(submission);
    setIsDetailsOpen(true);
  };

  const handleOpenUpload = (submission: Submission) => {
    setSelectedSubmission(submission);
    setIsUploadOpen(true);
  };

  return (
    <div className="bg-[#111827] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-white/5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">My Research Submissions</h2>
      </div>

      <div className="p-6 min-h-[300px] flex flex-col gap-6">
        {submissions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4 opacity-40">
            <FileText size={64} className="text-gray-400" />
            <div className="text-center">
              <p className="text-lg font-medium text-white">No submissions yet</p>
              <p className="text-sm text-gray-400">Click the button above to submit your first research idea</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {submissions.map((submission, index) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1F2937]/30 border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all flex flex-col gap-6 group relative overflow-hidden"
              >
                {/* Header Info */}
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex flex-col gap-1.5 flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight pr-10">
                      {submission.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-1 max-w-2xl">{submission.description}</p>
                    <p className="text-xs text-gray-500 mt-1 font-medium">Submitted: {submission.submittedAt}</p>
                  </div>
                  
                  <div className="flex flex-col items-end gap-3">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${
                      submission.status === "Pending Review" ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" :
                      submission.status === "Approved" ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" :
                      "bg-gray-500/10 text-gray-400 border border-white/5"
                    }`}>
                      {submission.status}
                    </span>
                  </div>
                </div>

                {/* Conditional Content based on Status */}
                {submission.status === "Approved" && (
                   <div className="flex flex-col gap-4 relative z-10">
                      <div className="bg-[#1F2937]/80 border border-blue-500/10 rounded-xl p-4 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <Clock size={16} className="text-blue-400" />
                            <p className="text-sm text-blue-200"> Deadline: <span className="font-bold">{submission.deadline || "4/21/2026"}</span></p>
                         </div>
                         <p className="text-xs font-bold text-blue-400 uppercase tracking-tighter bg-blue-500/10 px-3 py-1 rounded-full">
                           {submission.daysRemaining || 90} days remaining
                         </p>
                      </div>
                   </div>
                )}

                {/* Actions Bar */}
                <div className="flex flex-wrap items-center gap-3 relative z-10">
                  <button 
                    onClick={() => handleOpenDetails(submission)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-300 text-xs font-bold hover:bg-white/10 hover:text-white transition-all border border-white/5"
                  >
                    <Eye size={14} /> View Details
                  </button>

                  {submission.status === "Pending Review" ? (
                    <>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs font-bold hover:bg-emerald-500/20 transition-all border border-emerald-500/10">
                        <Check size={14} /> Approve
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 text-red-500 text-xs font-bold hover:bg-red-500/20 transition-all border border-red-500/10">
                        <X size={14} /> Decline
                      </button>
                    </>
                  ) : submission.status === "Approved" ? (
                    <>
                      <button 
                        onClick={() => handleOpenUpload(submission)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-300 text-xs font-bold hover:bg-white/10 hover:text-white transition-all border border-white/5"
                      >
                        <Upload size={14} /> Upload Submission Proof
                      </button>
                      <Link 
                        href="/mentor-dashboard/conversation"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-300 text-xs font-bold hover:bg-white/10 hover:text-white transition-all border border-white/5"
                      >
                        <MessageSquare size={14} /> Conversation
                      </Link>
                    </>
                  ) : null}
                </div>
                
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] pointer-events-none" />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modals */}
      <ResearchSubmissionDetailsModal 
        isOpen={isDetailsOpen} 
        onClose={() => setIsDetailsOpen(false)} 
        submission={selectedSubmission}
      />
      
      <UploadSubmissionProofModal 
        isOpen={isUploadOpen} 
        onClose={() => setIsUploadOpen(false)} 
        submission={selectedSubmission}
      />
    </div>
  );
};

export default ResearchSubmissions;
