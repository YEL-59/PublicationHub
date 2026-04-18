"use client";
import React from "react";
import { X, Info, Download, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ResearchSubmissionDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  submission: any;
  onApprove?: () => void;
  onDecline?: () => void;
}

const ResearchSubmissionDetailsModal = ({ 
  isOpen, 
  onClose, 
  submission,
  onApprove,
  onDecline
}: ResearchSubmissionDetailsModalProps) => {
  if (!submission) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-[#111827] border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Research Submission Details</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-extrabold text-white leading-tight">{submission.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <p>Submitted by: <span className="font-bold text-white">{submission.author || "Dr. John Smith"}</span></p>
                  <span>•</span>
                  <p>Date: <span className="text-white">{submission.submittedAt}</span></p>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="bg-[#1F2937]/50 rounded-xl p-5 border border-white/5">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Description</h4>
                  <p className="text-gray-300 leading-relaxed">{submission.description}</p>
                </div>

                <div className="bg-[#1F2937]/50 rounded-xl p-5 border border-white/5">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Research Objectives</h4>
                  <p className="text-gray-300 leading-relaxed">{submission.objectives || "The primary research objective regarding genetic markers for early cancer detection."}</p>
                </div>

                <div className="bg-[#1F2937]/50 rounded-xl p-5 border border-white/5">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Proposed Methodology</h4>
                  <p className="text-gray-300 leading-relaxed">{submission.methodology || "Case studies of 5 major cities"}</p>
                </div>
              </div>

              <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 flex gap-3 text-sm text-blue-400">
                <Info size={20} className="shrink-0" />
                <p>
                  <span className="font-bold">Note:</span> If approved, this research will have a 3-month deadline from the approval date. The mentor will be required to upload proof of journal submission within this timeframe.
                </p>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-6 border-t border-white/5 flex gap-4">
              <button
                onClick={onDecline}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-red-500/10 text-red-400 font-bold hover:bg-red-500/20 transition-all border border-red-500/20"
              >
                <X size={20} />
                Decline Submission
              </button>
              <button
                onClick={onApprove}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-500 text-white font-bold hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all"
              >
                Approve Research
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResearchSubmissionDetailsModal;
