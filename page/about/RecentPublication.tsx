"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────
interface Publication {
    id: number;
    category: string;
    categoryColor: string;  // bg colour class
    categoryText: string;   // text colour class
    year: number;
    title: string;
    journal: string;
    group: string;
    link: string;
}

// ── Static data (swap for API call) ────────────────────────────────────
const ALL_PUBLICATIONS: Publication[] = [
    {
        id: 1,
        category: "Cardiology",
        categoryColor: "bg-emerald-500/10",
        categoryText: "text-emerald-400",
        year: 2025,
        title: "TCT-235 Efficacy of Bioresorbable Vascular Scaffold vs Drug-Eluting Stents After PCI: A GRADE-Assessed Systematic Review and Meta-Analysis of Randomised Controlled Trials",
        journal: "Journal of the American College of Cardiology",
        group: "PublicationHub Group",
        link: "#",
    },
    {
        id: 2,
        category: "Pharmacology",
        categoryColor: "bg-blue-500/10",
        categoryText: "text-blue-400",
        year: 2025,
        title: "Decline in ESBL Production and Carbapenem Resistance in Urinary Tract Infections among Key Bacterial Species during the COVID-19 Pandemic",
        journal: "Antibiotics (MDP)",
        group: "PublicationHub Group",
        link: "#",
    },
    {
        id: 3,
        category: "Metabolic Disorders",
        categoryColor: "bg-orange-500/10",
        categoryText: "text-orange-400",
        year: 2025,
        title: "Long-term trends in diabetes mellitus and sepsis-related mortality in the united states: a population-based retrospective analysis (1999-2024)",
        journal: "Journal of Diabetes & Metabolic Disorders",
        group: "PublicationHub Group",
        link: "#",
    },
    {
        id: 4,
        category: "Endocrinology",
        categoryColor: "bg-purple-500/10",
        categoryText: "text-purple-400",
        year: 2025,
        title: "Glycemic control and body mass index (BMI) as risk factors for erectile dysfunction among Saudi men with diabetes: a systematic review and meta-analysis",
        journal: "Annals of Medicine & Surgery",
        group: "PublicationHub Group",
        link: "#",
    },
    {
        id: 5,
        category: "Infectious Disease",
        categoryColor: "bg-cyan-500/10",
        categoryText: "text-cyan-400",
        year: 2025,
        title: "Pandemic shadows in the operating room how COVID-19 altered the risk and timing of surgical site infections: a multivariable risk assessment and time-to-event analysis in a cohort of abdominal surgery patients",
        journal: "BMC Infectious Diseases",
        group: "PublicationHub Group",
        link: "#",
    },
    {
        id: 6,
        category: "Neurology",
        categoryColor: "bg-pink-500/10",
        categoryText: "text-pink-400",
        year: 2025,
        title: "Stroke incidence and outcomes in patients with atrial fibrillation: a population-based cohort analysis across five regional hospitals",
        journal: "The Lancet Neurology",
        group: "PublicationHub Group",
        link: "#",
    },
    {
        id: 7,
        category: "Oncology",
        categoryColor: "bg-red-500/10",
        categoryText: "text-red-400",
        year: 2025,
        title: "Survival outcomes of neoadjuvant chemotherapy in locally advanced breast cancer: a multicenter retrospective study",
        journal: "Journal of Clinical Oncology",
        group: "PublicationHub Group",
        link: "#",
    },
    {
        id: 8,
        category: "Cardiology",
        categoryColor: "bg-emerald-500/10",
        categoryText: "text-emerald-400",
        year: 2024,
        title: "Predictors of major adverse cardiac events following elective coronary artery bypass grafting: insights from the Saudi cardiac registry",
        journal: "Journal of the American College of Cardiology",
        group: "PublicationHub Group",
        link: "#",
    },
    {
        id: 9,
        category: "Pharmacology",
        categoryColor: "bg-blue-500/10",
        categoryText: "text-blue-400",
        year: 2024,
        title: "Antimicrobial resistance trends in nosocomial infections across ICUs in Saudi Arabia: a five-year surveillance study",
        journal: "Antibiotics (MDP)",
        group: "PublicationHub Group",
        link: "#",
    },
    {
        id: 10,
        category: "Metabolic Disorders",
        categoryColor: "bg-orange-500/10",
        categoryText: "text-orange-400",
        year: 2024,
        title: "Association between visceral adiposity index and non-alcoholic fatty liver disease in Saudi adults: a cross-sectional study",
        journal: "Journal of Diabetes & Metabolic Disorders",
        group: "PublicationHub Group",
        link: "#",
    },
];

const PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(ALL_PUBLICATIONS.length / PER_PAGE);

// ── Sub-components ─────────────────────────────────────────────────────
const PublicationCard = ({ pub, index }: { pub: Publication; index: number }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#111419] border border-white/5 rounded-2xl p-6 flex flex-col gap-4 hover:border-white/10 transition-colors duration-300 group"
    >
        {/* Top row: badge + year */}
        <div className="flex items-center justify-between">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${pub.categoryColor} ${pub.categoryText}`}>
                {pub.category}
            </span>
            <span className="text-[#4B5563] text-xs font-semibold">{pub.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-white text-[13px] md:text-sm font-semibold leading-snug line-clamp-3">
            {pub.title}
        </h3>

        {/* Journal */}
        <div className="flex items-center gap-2 text-[#6B7280] text-[11px]">
            <FileText className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{pub.journal}</span>
        </div>

        {/* Bottom row: group + read link */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/[0.04]">
            <span className="text-[10px] font-bold text-[#374151] uppercase tracking-widest">
                {pub.group}
            </span>
            <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#00D1FF] text-[11px] font-bold uppercase tracking-widest hover:gap-2 transition-all duration-200 group-hover:text-[#00E5FF]"
            >
                Read <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
        </div>
    </motion.div>
);

// ── Pagination ─────────────────────────────────────────────────────────
const Pagination = ({
    current,
    total,
    onChange,
}: {
    current: number;
    total: number;
    onChange: (p: number) => void;
}) => {
    const pages: (number | "…")[] = [];

    if (total <= 7) {
        for (let i = 1; i <= total; i++) pages.push(i);
    } else {
        pages.push(1, 2);
        if (current > 4) pages.push("…");
        const mid = [current - 1, current, current + 1].filter(
            (p) => p > 2 && p < total - 1
        );
        pages.push(...mid);
        if (current < total - 3) pages.push("…");
        pages.push(total - 1, total);
    }

    const btnBase =
        "flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold transition-all duration-200";

    return (
        <div className="flex items-center justify-center gap-1.5 mt-10">
            <button
                onClick={() => onChange(Math.max(1, current - 1))}
                disabled={current === 1}
                className={`flex items-center gap-1 px-3 h-8 rounded-full text-xs font-semibold transition-all ${current === 1
                        ? "text-[#374151] cursor-not-allowed"
                        : "text-[#9CA3AF] hover:text-white hover:bg-white/5"
                    }`}
            >
                <ChevronLeft className="w-4 h-4" /> Prev
            </button>

            {pages.map((page, i) =>
                page === "…" ? (
                    <span key={`ellipsis-${i}`} className="text-[#374151] text-xs px-1">
                        …
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => onChange(page as number)}
                        className={`${btnBase} ${page === current
                                ? "bg-[#00D1FF] text-[#0A0C0F] shadow-lg shadow-[#00D1FF]/20"
                                : "text-[#6B7280] hover:text-white hover:bg-white/5"
                            }`}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                onClick={() => onChange(Math.min(total, current + 1))}
                disabled={current === total}
                className={`flex items-center gap-1 px-3 h-8 rounded-full text-xs font-semibold transition-all ${current === total
                        ? "text-[#374151] cursor-not-allowed"
                        : "text-[#9CA3AF] hover:text-white hover:bg-white/5"
                    }`}
            >
                Next <ChevronRight className="w-4 h-4" />
            </button>
        </div>
    );
};

// ── Main Component ─────────────────────────────────────────────────────
const RecentPublication = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const paginated = ALL_PUBLICATIONS.slice(
        (currentPage - 1) * PER_PAGE,
        currentPage * PER_PAGE
    );

    // Split into 2-column grid: last item full-width if odd count
    const isOdd = paginated.length % 2 !== 0;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="relative py-16 px-6 md:px-12 lg:px-20 bg-[#0A0C0F]">
            <div className="container mx-auto">
                {/* Section heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight"
                >
                    Recent Publications
                </motion.h2>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    >
                        {paginated.map((pub, i) => {
                            const isLastOdd = isOdd && i === paginated.length - 1;
                            return (
                                <div
                                    key={pub.id}
                                    className={isLastOdd ? "md:col-span-2 md:max-w-[calc(50%-10px)]" : ""}
                                >
                                    <PublicationCard pub={pub} index={i} />
                                </div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination */}
                <Pagination
                    current={currentPage}
                    total={TOTAL_PAGES}
                    onChange={handlePageChange}
                />
            </div>
        </section>
    );
};

export default RecentPublication;