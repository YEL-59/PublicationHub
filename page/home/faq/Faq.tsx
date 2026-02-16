"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
    return (
        <div
            className={`w-full rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "bg-[#171A21]/80 border-[#00D1FF]/30" : "bg-[#171A21]/40 border-white/5 hover:border-white/12"
                }`}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left group"
            >
                <span className={`text-base md:text-lg font-semibold transition-colors duration-300 ${isOpen ? "text-[#00D1FF]" : "text-[#E5E7EB] group-hover:text-white"
                    }`}>
                    {question}
                </span>
                <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-0"}`}>
                    {isOpen ? (
                        <Minus size={20} className="text-[#00D1FF]" />
                    ) : (
                        <Plus size={20} className="text-[#A3A7AE] group-hover:text-white" />
                    )}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 mt-[-8px]">
                            <p className="text-[#A3A7AE] text-sm md:text-base leading-relaxed font-inter">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What types of research projects does Publication Hub handle?",
            answer: "We specialize in: Systematic Reviews and Meta-Analyses, Epidemiological Studies, and Cohort Studies (Prospective and Retrospective). We also provide support for Clinical Trials and Case-Control Studies across various medical specialties.",
        },
        {
            question: "Is publication guaranteed?",
            answer: "While we provide expert guidance and high-quality services to maximize your chances, the final decision lies with the journal's peer-review process. However, our track record shows a significantly higher acceptance rate for our mentees.",
        },
        {
            question: "Are consultants involved in the research process?",
            answer: "Yes, our team of expert consultants and mentors provides hands-on guidance throughout every stage, from methodology design to final manuscript preparation and submission.",
        },
        {
            question: "Can I request a certificate for my research participation?",
            answer: "Absolutely! Upon successful completion of your research project or course, we provide formalized certificates that recognize your contribution and mastery of research skills.",
        },
        {
            question: "Who are the mentors and coordinators?",
            answer: "Our mentors are seasoned researchers, PhD holders, and clinical experts from top-tier institutions worldwide who are dedicated to academic excellence and student success.",
        },
        {
            question: "Can I get a refund after registering?",
            answer: "Registrations are subject to our standard refund policy. Generally, withdrawals made before the project commencement or course access are eligible for partial or full refunds depending on the timing.",
        },
        {
            question: "Is previous research experience required?",
            answer: "No, we welcome researchers at all levels. Our programs are designed to support everyone from absolute beginners to advanced researchers looking to polish their skills.",
        },
    ];

    return (
        <section className="relative w-full bg-[#0A0C0F] py-24 px-4 overflow-hidden">
            {/* Background Glows */}
            <div
                className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-20 blur-[120px] z-0"
                style={{
                    background: "radial-gradient(circle, rgba(0, 230, 255, 0.4) 0%, transparent 70%)"
                }}
            />
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-50 blur-[130px] z-0"
                style={{
                    background: "radial-gradient(circle, rgba(0, 230, 255, 0.2) 0%, transparent 70%)"
                }}
            />

            <div className="container mx-auto max-w-4xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Frequently Asked <span className="bg-gradient-to-r from-[#00D1FF] to-[#7B61FF] bg-clip-text text-transparent">Questions</span>
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;