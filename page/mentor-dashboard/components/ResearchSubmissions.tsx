"use client";
import React, { useState } from "react";
import { FileText, Clock, MessageSquare, Upload, Eye, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ResearchSubmissionDetailsModal from "./ResearchSubmissionDetailsModal";
import UploadSubmissionProofModal from "./UploadSubmissionProofModal";
import Link from "next/link";

interface Submission {
  id: string | number;
  title: string;
  description: string;
  submittedAt: string;
  status: string;
  deadline?: string;
  startDate?: string;
  endDate?: string;
}

interface ResearchSubmissionsProps {
  submissions: Submission[];
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  isLoading?: boolean;
}

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Pending Review": return "bg-amber-500/10 text-amber-500 border border-amber-500/20";
    case "Accepted":       return "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20";
    case "Completed":      return "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20";
    case "Rejected":       return "bg-red-500/10 text-red-500 border border-red-500/20";
    default:               return "bg-gray-500/10 text-gray-400 border border-white/5";
  }
};

const ResearchSubmissions = ({ submissions, currentPage = 1, totalPages = 1, onPageChange, isLoading }: ResearchSubmissionsProps) => {
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
        {!isLoading && (
          <span className="text-xs text-gray-500 font-medium">
            Page {currentPage} of {totalPages}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col gap-6">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="text-gray-400">Loading submissions...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4 opacity-40">
            <FileText size={64} className="text-gray-400" />
            <div className="text-center">
              <p className="text-lg font-medium text-white">No submissions yet</p>
              <p className="text-sm text-gray-400">Click the button above to submit your first research idea</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5 overflow-y-auto max-h-[600px] pr-1">
            {submissions.map((submission, index) => {
              const isAccepted = submission.status === "Accepted";
              const isPending  = submission.status === "Pending Review";

              return (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`border rounded-2xl p-6 transition-all flex flex-col gap-5 group relative overflow-hidden ${
                    isAccepted
                      ? "bg-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40"
                      : "bg-[#1F2937]/30 border-white/5 hover:border-white/20"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex flex-col gap-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        {isAccepted && <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />}
                        <h3 className={`text-xl font-bold leading-tight pr-10 transition-colors ${
                          isAccepted ? "text-white group-hover:text-emerald-400" : "text-white group-hover:text-blue-400"
                        }`}>
                          {submission.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400 line-clamp-1 max-w-2xl">{submission.description}</p>
                      <p className="text-xs text-gray-500 mt-1 font-medium">Submitted: {submission.submittedAt}</p>
                    </div>

                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest shrink-0 ${getStatusStyle(submission.status)}`}>
                      {submission.status}
                    </span>
                  </div>

                  {/* Accepted: Deadline bar */}
                  {isAccepted && submission.deadline && (
                    <div className="flex flex-col gap-3 relative z-10">
                      <div className="bg-[#1F2937]/80 border border-emerald-500/10 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <Clock size={16} className="text-emerald-400" />
                          <p className="text-sm text-emerald-200">
                            Deadline: <span className="font-bold">{submission.deadline}</span>
                          </p>
                        </div>
                        {submission.startDate && submission.endDate && (
                          <p className="text-xs text-gray-400">
                            {submission.startDate} → {submission.endDate}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center gap-3 relative z-10">
                    {/* Always show View Details */}
                    <button
                      onClick={() => handleOpenDetails(submission)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-300 text-xs font-bold hover:bg-white/10 hover:text-white transition-all border border-white/5"
                    >
                      <Eye size={14} /> View Details
                    </button>

                    {/* Only show these when Accepted */}
                    {isAccepted && (
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
                    )}
                  </div>

                  {/* Decorative glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 blur-[50px] pointer-events-none ${
                    isAccepted ? "bg-emerald-500/5" : "bg-blue-500/5"
                  }`} />
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Pagination Controls */}
        {!isLoading && totalPages > 1 && (
          <div className="flex items-center justify-between pt-6 border-t border-white/5">
            <button
              onClick={() => onPageChange?.(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-5 py-2.5 rounded-xl bg-white/5 text-gray-300 text-sm font-bold hover:bg-white/10 transition-all disabled:opacity-40 disabled:cursor-not-allowed border border-white/5"
            >
              ← Previous
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => onPageChange?.(page)}
                  className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${
                    page === currentPage
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => onPageChange?.(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-5 py-2.5 rounded-xl bg-white/5 text-gray-300 text-sm font-bold hover:bg-white/10 transition-all disabled:opacity-40 disabled:cursor-not-allowed border border-white/5"
            >
              Next →
            </button>
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
