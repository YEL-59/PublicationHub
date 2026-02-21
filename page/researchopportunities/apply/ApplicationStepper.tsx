"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    ArrowLeft,
    ArrowRight,
    GraduationCap,
    User,
    FileText,
    Calendar,
    ChevronDown,
    Upload,
    CheckCircle2,
    X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Opportunity } from "@/lib/opportunities";

interface ApplicationStepperProps {
    opportunity: Opportunity;
}

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    educationLevel: string;
    institution: string;
    fieldOfStudy: string;
    researchExperience: string;
    portfolio: string;
    linkedin: string;
    message: string;
    coverLetter: string;
};

const ApplicationStepper = ({ opportunity }: ApplicationStepperProps) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { register, handleSubmit, trigger, formState: { errors } } = useForm<FormData>();

    const steps = [
        { id: 1, name: "Personal Info", icon: User },
        { id: 2, name: "Background", icon: GraduationCap },
        { id: 3, name: "Documents", icon: FileText }
    ];

    const nextStep = async () => {
        let fieldsToValidate: (keyof FormData)[] = [];
        if (currentStep === 1) {
            fieldsToValidate = ['firstName', 'lastName', 'email'];
        } else if (currentStep === 2) {
            fieldsToValidate = ['educationLevel', 'institution', 'researchExperience'];
        }

        const isValid = await trigger(fieldsToValidate);
        if (isValid && currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => currentStep > 1 && setCurrentStep(currentStep - 1);

    const onSubmit = (data: FormData) => {
        console.log("Submit Application Data:", data);
        setIsSubmitted(true);
    };

    return (
        <section className="min-h-screen bg-[#0A0C0F] text-white py-12 px-6 md:px-12 lg:px-20 font-inter">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/researchopportunities"
                    className="flex items-center gap-2 text-[#A3A7AE] hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to Opportunities</span>
                </Link>

                <p className="text-[#A3A7AE] text-sm mb-6">Complete your application for:</p>

                {/* Opportunity Header Card */}
                <div className="bg-[#111419] border border-white/5 rounded-2xl p-6 mb-12">
                    <h1 className="text-lg md:text-xl font-bold mb-4 text-[#EBEEF1] tracking-tight">
                        {opportunity.title}
                    </h1>
                    <div className="flex flex-wrap gap-6 text-[#A3A7AE]">
                        <div className="flex items-center gap-2.5">
                            <GraduationCap className="w-5 h-5 opacity-60" strokeWidth={1.5} />
                            <span className="text-xs md:text-sm font-medium">Harvard University</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <User className="w-5 h-5 opacity-60" strokeWidth={1.5} />
                            <span className="text-xs md:text-sm font-medium">{opportunity.mentor}</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <Calendar className="w-5 h-5 opacity-60" strokeWidth={1.5} />
                            <span className="text-xs md:text-sm font-medium">Deadline: {opportunity.deadline}</span>
                        </div>
                    </div>
                </div>

                {/* Progress Stepper */}
                <div className="flex items-center justify-between mb-12 relative px-4 md:px-12">
                    {steps.map((step, idx) => (
                        <React.Fragment key={step.id}>
                            <div className="flex flex-col items-center gap-3 relative z-10 bg-[#0A0C0F] px-2">
                                <div
                                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${currentStep >= step.id
                                            ? "bg-[#00D1FF] border-[#00D1FF] shadow-[0_0_20px_rgba(0,209,255,0.3)] shadow-inner"
                                            : "bg-[#171A21] border-white/10"
                                        }`}
                                >
                                    <step.icon className={`w-5 h-5 md:w-6 md:h-6 ${currentStep >= step.id ? "text-black" : "text-[#A3A7AE]"}`} strokeWidth={2} />
                                </div>
                                <span className={`text-[10px] md:text-xs font-bold tracking-tight ${currentStep >= step.id ? "text-[#00D1FF]" : "text-[#A3A7AE]"}`}>
                                    {step.name}
                                </span>
                            </div>
                            {idx < steps.length - 1 && (
                                <div className="flex-1 h-[2px] bg-[#171A21] relative -mt-5">
                                    <motion.div
                                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00D1FF] to-[#8B8FF9]"
                                        initial={{ width: "0%" }}
                                        animate={{ width: currentStep > step.id ? "100%" : "0%" }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Step Content */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="bg-[#111419] border border-white/5 rounded-[28px] p-8 md:p-12 mb-8 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {currentStep === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8"
                                >
                                    <h2 className="text-xl font-bold text-white tracking-tight">Personal Information</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold text-[#A3A7AE] uppercase tracking-wider">First Name *</label>
                                            <input
                                                {...register("firstName", { required: true })}
                                                type="text"
                                                placeholder="John"
                                                className={`w-full bg-[#171A21] border ${errors.firstName ? 'border-red-500/50' : 'border-white/5'} rounded-xl py-4 px-5 text-sm md:text-base placeholder:text-[#3B414A] focus:outline-none focus:border-[#00D1FF]/40 transition-all font-medium`}
                                            />
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold text-[#A3A7AE] uppercase tracking-wider">Last Name *</label>
                                            <input
                                                {...register("lastName", { required: true })}
                                                type="text"
                                                placeholder="Willson"
                                                className={`w-full bg-[#171A21] border ${errors.lastName ? 'border-red-500/50' : 'border-white/5'} rounded-xl py-4 px-5 text-sm md:text-base placeholder:text-[#3B414A] focus:outline-none focus:border-[#00D1FF]/40 transition-all font-medium`}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2.5">
                                        <label className="text-xs font-bold text-[#A3A7AE] uppercase tracking-wider">Email Address *</label>
                                        <input
                                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                            type="email"
                                            placeholder="john.doe@university.edu"
                                            className={`w-full bg-[#171A21] border ${errors.email ? 'border-red-500/50' : 'border-white/5'} rounded-xl py-4 px-5 text-sm md:text-base placeholder:text-[#3B414A] focus:outline-none focus:border-[#00D1FF]/40 transition-all font-medium`}
                                        />
                                    </div>
                                    <div className="space-y-2.5">
                                        <label className="text-xs font-bold text-[#A3A7AE] uppercase tracking-wider">Phone Number</label>
                                        <input
                                            {...register("phoneNumber")}
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            className="w-full bg-[#171A21] border border-white/5 rounded-xl py-4 px-5 text-sm md:text-base placeholder:text-[#3B414A] focus:outline-none focus:border-[#00D1FF]/40 transition-all font-medium"
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8"
                                >
                                    <h2 className="text-xl font-bold text-white tracking-tight">Academic Background</h2>
                                    <div className="space-y-6">
                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold text-[#A3A7AE] uppercase tracking-wider">Highest educationLevel *</label>
                                            <div className="relative group">
                                                <select
                                                    {...register("educationLevel", { required: true })}
                                                    className={`w-full bg-[#171A21] border ${errors.educationLevel ? 'border-red-500/50' : 'border-white/5'} rounded-xl py-4 px-5 text-sm md:text-base appearance-none focus:outline-none focus:border-[#00D1FF]/40 transition-all font-medium text-[#A3A7AE]`}
                                                >
                                                    <option value="">Select Level</option>
                                                    <option value="PhD">PhD</option>
                                                    <option value="Masters">Masters</option>
                                                    <option value="Bachelors">Bachelors</option>
                                                </select>
                                                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
                                            </div>
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold text-[#A3A7AE] uppercase tracking-wider">Institution *</label>
                                            <input
                                                {...register("institution", { required: true })}
                                                type="text"
                                                placeholder="University of Example"
                                                className={`w-full bg-[#171A21] border ${errors.institution ? 'border-red-500/50' : 'border-white/5'} rounded-xl py-4 px-5 text-sm md:text-base placeholder:text-[#3B414A] focus:outline-none focus:border-[#00D1FF]/40 transition-all font-medium`}
                                            />
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold text-[#A3A7AE] uppercase tracking-wider">Field Of Study</label>
                                            <input
                                                {...register("fieldOfStudy")}
                                                type="text"
                                                placeholder="e.g., Molecular Biology, Cardiology"
                                                className="w-full bg-[#171A21] border border-white/5 rounded-xl py-4 px-5 text-sm md:text-base placeholder:text-[#3B414A] focus:outline-none focus:border-[#00D1FF]/40 transition-all font-medium"
                                            />
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold text-[#A3A7AE] uppercase tracking-wider">Research Experience *</label>
                                            <div className="relative group">
                                                <select
                                                    {...register("researchExperience", { required: true })}
                                                    className={`w-full bg-[#171A21] border ${errors.researchExperience ? 'border-red-500/50' : 'border-white/5'} rounded-xl py-4 px-5 text-sm md:text-base appearance-none focus:outline-none focus:border-[#00D1FF]/40 transition-all font-medium text-[#A3A7AE]`}
                                                >
                                                    <option value="">Select experience level</option>
                                                    <option value="expert">Expert (5+ years)</option>
                                                    <option value="intermediate">Intermediate (2-5 years)</option>
                                                    <option value="beginner">Beginner (0-2 years)</option>
                                                </select>
                                                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
                                            </div>
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold text-[#A3A7AE] uppercase tracking-wider">Portfolio Problem</label>
                                            <input
                                                {...register("portfolio")}
                                                type="text"
                                                placeholder="e.g., Portfolio, Evidence of Past Deliverables"
                                                className="w-full bg-[#171A21] border border-white/5 rounded-xl py-4 px-5 text-sm md:text-base placeholder:text-[#3B414A] focus:outline-none focus:border-[#00D1FF]/40 transition-all font-medium"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2.5">
                                                <label className="text-xs font-bold text-[#A3A7AE] uppercase tracking-wider">LinkedIn Profile</label>
                                                <input
                                                    {...register("linkedin")}
                                                    type="text"
                                                    placeholder="linkedin.com/in/username"
                                                    className="w-full bg-[#171A21] border border-white/5 rounded-xl py-4 px-5 text-sm md:text-base placeholder:text-[#3B414A] focus:outline-none focus:border-[#00D1FF]/40 transition-all font-medium"
                                                />
                                            </div>
                                            <div className="space-y-2.5">
                                                <label className="text-xs font-bold text-[#A3A7AE] uppercase tracking-wider">Personalized Message</label>
                                                <input
                                                    {...register("message")}
                                                    type="text"
                                                    placeholder="tell us a bit about yourself"
                                                    className="w-full bg-[#171A21] border border-white/5 rounded-xl py-4 px-5 text-sm md:text-base placeholder:text-[#3B414A] focus:outline-none focus:border-[#00D1FF]/40 transition-all font-medium"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8"
                                >
                                    <h2 className="text-xl font-bold text-white tracking-tight">Documents & Statement</h2>
                                    <div className="space-y-8">
                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold text-[#A3A7AE] uppercase tracking-wider">Upload CV/Resume</label>
                                            <div className="border-2 border-dashed border-white/5 bg-[#171A21] rounded-2xl p-10 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-[#00D1FF]/30 transition-all relative">
                                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00D1FF]/10 transition-all">
                                                    <Upload className="w-5 h-5 text-[#A3A7AE] group-hover:text-[#00D1FF] transition-all" />
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-white font-bold text-sm mb-1">Click to upload or drag and drop</p>
                                                    <p className="text-[#64748B] text-xs font-medium">PDF, DOC, or DOCX (max. 10MB)</p>
                                                </div>
                                                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                                            </div>
                                        </div>

                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold text-[#A3A7AE] uppercase tracking-wider">Cover Letter / Statement of Interest *</label>
                                            <textarea
                                                {...register("coverLetter", { required: true })}
                                                rows={6}
                                                placeholder=""
                                                className={`w-full bg-[#171A21] border ${errors.coverLetter ? 'border-red-500/50' : 'border-white/5'} rounded-xl py-4 px-5 text-sm md:text-base placeholder:text-[#3B414A] focus:outline-none focus:border-[#00D1FF]/40 transition-all font-medium resize-none`}
                                            />
                                        </div>

                                        <div className="space-y-6">
                                            <div className="flex gap-3 text-xs md:text-sm text-[#A3A7AE] font-medium leading-relaxed">
                                                <div className="w-5 h-5 rounded border border-[#00D1FF] bg-[#00D1FF]/10 shrink-0 mt-0.5 flex items-center justify-center">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D1FF]" />
                                                </div>
                                                <p>I confirm that all information provided is accurate and I agree to the <span className="text-[#00D1FF] cursor-pointer hover:underline">Privacy Policy</span> and <span className="text-[#00D1FF] cursor-pointer hover:underline">Terms of Service</span>.</p>
                                            </div>

                                            <div className="bg-[#171A21] border-l-4 border-[#00D1FF] p-5 rounded-r-xl">
                                                <div className="flex gap-4">
                                                    <div className="w-6 h-6 rounded-full bg-[#00D1FF]/10 flex items-center justify-center shrink-0">
                                                        <Calendar className="w-3.5 h-3.5 text-[#00D1FF]" />
                                                    </div>
                                                    <p className="text-xs md:text-sm text-[#A3A7AE] font-semibold leading-relaxed">
                                                        Your application will be reviewed by the research team. You will be notified via email of the outcome by March 25, 2026.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={prevStep}
                            className={`flex items-center gap-2 bg-[#171A21] border border-white/10 text-[#A3A7AE] hover:text-white font-bold py-3 px-8 rounded-xl text-sm transition-all duration-300 active:scale-[0.98] ${currentStep === 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/5 hover:border-white/20"}`}
                            disabled={currentStep === 1}
                        >
                            <ArrowLeft className="w-4 h-4" /> Previous
                        </button>

                        {currentStep < 3 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="bg-[#00E5FF] hover:bg-[#00D1FF] text-black font-extrabold py-3.5 px-8 rounded-xl text-sm transition-all duration-300 active:scale-[0.98] shadow-lg shadow-[#00E5FF]/10"
                            >
                                Continue
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="flex items-center gap-2 bg-[#00E5FF] hover:bg-[#00D1FF] text-black font-extrabold py-3.5 px-6 rounded-xl text-sm transition-all duration-300 active:scale-[0.98] shadow-lg shadow-[#00E5FF]/10"
                            >
                                <CheckCircle2 className="w-4.5 h-4.5" /> Submit Application
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
                {isSubmitted && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setIsSubmitted(false)}
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-[#111419] border border-white/10 rounded-[32px] p-10 max-w-sm w-full relative z-10 text-center shadow-2xl"
                        >
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="absolute top-6 right-6 text-[#A3A7AE] hover:text-white transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00D1FF] to-[#8B8FF9] flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#00D1FF]/20">
                                <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2.5} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Submit Application Successfull</h3>
                            <div className="w-full h-px bg-white/5 my-6" />
                            <Link
                                href="/researchopportunities"
                                className="block w-full bg-[#171A21] hover:bg-[#1C2129] border border-white/5 text-white font-bold py-4 rounded-2xl text-sm transition-all"
                            >
                                Back to Main Page
                            </Link>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ApplicationStepper;
