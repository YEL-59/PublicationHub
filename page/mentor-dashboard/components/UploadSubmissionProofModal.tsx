"use client";
import React, { useState } from "react";
import { X, Upload, FileText, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface UploadSubmissionProofModalProps {
  isOpen: boolean;
  onClose: () => void;
  submission: any;
}

const UploadSubmissionProofModal = ({ isOpen, onClose, submission }: UploadSubmissionProofModalProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  if (!submission) return null;

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file first");
      return;
    }
    setIsUploading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsUploading(false);
    toast.success("Submission proof uploaded successfully!");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
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
            className="relative w-full max-w-xl bg-[#111827] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Upload Submission Proof</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 flex flex-col gap-6">
              {/* Submission Summary */}
              <div className="bg-[#1F2937]/50 border border-white/5 rounded-xl p-5">
                <h3 className="text-lg font-bold text-white mb-1">{submission.title}</h3>
                <p className="text-sm text-gray-400">Deadline: <span className="text-red-400 font-bold">{submission.deadline || "4/21/2026"}</span></p>
              </div>

              {/* Info Box */}
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 flex gap-3 text-sm text-blue-300">
                <Info size={20} className="shrink-0 text-blue-400" />
                <div>
                  <p className="font-bold text-blue-400 mb-1">Upload the journal submission email</p>
                  <p>Please upload the confirmation email or proof of submission from the journal. Accepted formats: PDF, PNG, JPG, or screenshot of the email.</p>
                </div>
              </div>

              {/* Dropzone */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-1">
                  Select File <span className="text-red-500">*</span>
                </label>
                <div 
                  className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer ${
                    file ? "border-emerald-500/50 bg-emerald-500/5" : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
                  }`}
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  <input 
                    id="file-upload"
                    type="file" 
                    className="hidden" 
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                  <div className={`p-4 rounded-full ${file ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-gray-400"}`}>
                    <Upload size={32} />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-white">{file ? file.name : "Click to upload file"}</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, PNG, or JPG (Max 10MB)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-6 border-t border-white/5 flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-4 rounded-xl bg-white/5 text-white font-bold hover:bg-white/10 transition-all border border-white/5"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!file || isUploading}
                onClick={handleUpload}
                className="flex-2 px-6 py-4 rounded-xl bg-emerald-500 text-white font-bold hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? "Uploading..." : "Upload Proof"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default UploadSubmissionProofModal;
