"use client";

import React, { useState } from "react";
import {
    BarChart3,
    FileSearch,
    PenTool,
    CheckSquare,
    LayoutGrid,
    Microscope,
    ChevronDown,
    Check,
    MessageCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
    {
        id: 1,
        title: "Statistical Analysis",
        shortDesc: "Advanced statistical methods for robust research conclusions.",
        longDesc: "Comprehensive statistical support including descriptive analysis, inferential statistics, regression modeling, survival analysis, and more. Our experts use SPSS, R, and Stata to ensure accuracy.",
        icon: BarChart3,
        color: "#00D1FF",
        features: ["Data cleaning & preparation", "Hypothesis testing", "Multivariate analysis", "Results interpretation"],
        price: "$299"
    },
    {
        id: 2,
        title: "Systematic Review",
        shortDesc: "Rigorous literature synthesis following PRISMA guidelines.",
        longDesc: "Expert guidance in conducting systematic reviews and meta-analyses. We help with search strategy development, study selection, data extraction, and quality assessment.",
        icon: FileSearch,
        color: "#8B8FF9",
        features: ["PRISMA compliance", "Meta-analysis support", "Quality assessment", "Protocol registration"],
        price: "$399"
    },
    {
        id: 3,
        title: "Manuscript Writing",
        shortDesc: "Expert scientific writing and editing services.",
        longDesc: "High-quality medical and scientific writing services tailored to your research. From drafting to final polish, we ensure your message is clear and compelling.",
        icon: PenTool,
        color: "#FF6B9C",
        features: ["Structured abstracts", "Discussion development", "Reference management", "Clarity & flow optimization"],
        price: "$499"
    },
    {
        id: 4,
        title: "Publication Support",
        shortDesc: "Navigate the publication process with confidence.",
        longDesc: "Comprehensive assistance in getting your research published. We help with journal selection, submission management, and responding to peer review comments.",
        icon: CheckSquare,
        color: "#FF6B6B",
        features: ["Journal matching", "Cover letter drafting", "Peer review response", "Formatting guidance"],
        price: "$199"
    },
    {
        id: 5,
        title: "Research Methodology",
        shortDesc: "Design robust studies with proper methodological frameworks.",
        longDesc: "Strategic consulting on study design, sampling methods, and data collection protocols to ensure your research meets high scientific standards.",
        icon: LayoutGrid,
        color: "#FFA726",
        features: ["Study design optimization", "Sample size calculation", "Protocol development", "Ethics submission support"],
        price: "$349"
    },
    {
        id: 6,
        title: "Lab & Clinical Studies",
        shortDesc: "Support for experimental and clinical research projects.",
        longDesc: "Specialized support for laboratory-based research and clinical trials, ensuring rigorous data collection and adherence to safety protocols.",
        icon: Microscope,
        color: "#4CAF50",
        features: ["Clinical trial design", "Lab data management", "Safety monitoring", "Regulatory compliance"],
        price: "$599"
    }
];

const ServiceCard = ({
    service,
    isHovered,
    onHover
}: {
    service: typeof services[0];
    isHovered: boolean;
    onHover: (active: boolean) => void;
}) => {
    return (
        <motion.div
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative bg-[#111419] border border-white/5 rounded-[24px] p-8 transition-all duration-500 cursor-pointer overflow-hidden ${isHovered ? "border-[#00D1FF]/30 shadow-2xl shadow-[#00D1FF]/5" : "hover:border-white/10"
                }`}
        >
            <div className="flex items-start justify-between mb-6">
                <div
                    className="p-3.5 rounded-2xl transition-transform duration-500"
                    style={{
                        backgroundColor: `${service.color}15`,
                        color: service.color,
                        transform: isHovered ? "scale(1.1)" : "scale(1)"
                    }}
                >
                    <service.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <motion.div
                    animate={{ rotate: isHovered ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-5 h-5 text-[#3B414A]" />
                </motion.div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-white tracking-tight leading-tight">
                {service.title}
            </h3>

            <p className="text-[#A3A7AE] text-sm leading-relaxed mb-6 font-medium">
                {service.shortDesc}
            </p>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <p className="text-[#A3A7AE]/80 text-[13px] leading-relaxed">
                            {service.longDesc}
                        </p>

                        <ul className="space-y-3">
                            {service.features.map((feature, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                    className="flex items-center gap-3 text-xs md:text-sm text-[#A3A7AE] font-medium"
                                >
                                    <Check className="w-4 h-4 text-[#00D1FF]" strokeWidth={3} />
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="pt-4 flex items-center justify-between border-t border-white/5">
                            <div>
                                <p className="text-[11px] text-[#00D1FF] font-bold uppercase tracking-wider mb-1">Starting from</p>
                                <p className="text-xl font-bold text-white">{service.price}</p>
                            </div>
                            <button className="bg-gradient-to-r from-[#00D1FF] to-[#8B8FF9] hover:from-[#00E5FF] hover:to-[#9B9FFF] text-white px-5 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-[#00D1FF]/20">
                                <MessageCircle className="w-4 h-4" /> Start on WhatsApp
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Services = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section className="relative min-h-screen bg-[#0A0C0F] text-white py-20 px-6 md:px-12 lg:px-20 font-inter overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00D1FF]/5 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8B8FF9]/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#111419] border border-[#00D1FF]/20 rounded-full text-[11px] font-bold text-[#00D1FF] uppercase tracking-widest mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse" />
                        Research Services
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter"
                    >
                        Expert <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D1FF] to-[#8B8FF9]">Research</span> Support
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="text-[#A3A7AE] text-sm md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        Advancing clinical excellence and evidence-based medicine across the Kingdom.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <ServiceCard
                                service={service}
                                isHovered={activeId === service.id}
                                onHover={(active) => setActiveId(active ? service.id : null)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
