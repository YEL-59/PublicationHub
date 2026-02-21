"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────
interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

interface FaqCategory {
    id: string;
    title: string;
    items: FaqItem[];
}

// ── Data (API-ready) ───────────────────────────────────────────────────
const FAQ_DATA: FaqCategory[] = [
    {
        id: "general",
        title: "General",
        items: [
            {
                id: "g1",
                question: "What is Meta Scholars?",
                answer:
                    "Meta Scholars is a premier academic network connecting students, researchers, and institutions across Saudi Arabia. It provides access to research opportunities, mentorship programmes, and world-class publishing support.",
            },
            {
                id: "g2",
                question: "Who can apply for research opportunities?",
                answer:
                    "Any enrolled undergraduate, postgraduate, or doctoral student — as well as early-career researchers — can browse and apply for research opportunities listed on the platform.",
            },
            {
                id: "g3",
                question: "Is Meta Scholars free to use?",
                answer:
                    "The core platform, including browsing research opportunities and accessing community resources, is completely free. Premium services such as statistical analysis and manuscript writing carry separate fees.",
            },
        ],
    },
    {
        id: "applications",
        title: "Applications",
        items: [
            {
                id: "a1",
                question: "How do I apply for a research opportunity?",
                answer:
                    "Navigate to the Research Opportunities page, find an opportunity that matches your profile, and click 'Apply Now'. You will be guided through a multi-step application form covering personal info, academic background, and document uploads.",
            },
            {
                id: "a2",
                question: "What documents do I need to apply?",
                answer:
                    "Typically you will need your CV/resume, a cover letter, and proof of current enrolment or affiliation. Specific requirements are listed on each opportunity's detail page.",
            },
            {
                id: "a3",
                question: "How long does the application review process take?",
                answer:
                    "Review times vary by opportunity, but you can generally expect a response within 2–4 weeks of submitting your application. You will be notified via email once a decision has been made.",
            },
            {
                id: "a4",
                question: "Can I apply to multiple opportunities at once?",
                answer:
                    "Yes. There is no limit on the number of opportunities you can apply for simultaneously. We recommend tailoring your cover letter for each application to improve your chances.",
            },
        ],
    },
    {
        id: "meta-academy",
        title: "Meta Academy",
        items: [
            {
                id: "m1",
                question: "What is Meta Academy?",
                answer:
                    "Meta Academy is the educational arm of ResearchHub, offering structured online courses in research methodology, biostatistics, academic writing, and more — all designed for healthcare and research professionals.",
            },
            {
                id: "m2",
                question: "How do I access premium courses?",
                answer:
                    "After registering on the platform, visit the Meta Academy section and choose a course. Premium courses require a one-time purchase or an active subscription, both manageable from your profile settings.",
            },
            {
                id: "m3",
                question: "Are course certificates recognized?",
                answer:
                    "Our certificates are recognised by a growing number of academic institutions and healthcare organisations across the Kingdom. We are actively expanding our partnerships to broaden recognition.",
            },
            {
                id: "m4",
                question: "Can I access courses on mobile devices?",
                answer:
                    "Yes. The platform is fully responsive and optimised for mobile, tablet, and desktop. You can continue a course on any device and your progress is saved automatically.",
            },
        ],
    },
    {
        id: "account-support",
        title: "Account & Support",
        items: [
            {
                id: "s1",
                question: "How do I create an account?",
                answer:
                    "Click 'Sign Up' in the navigation bar, fill in your details, and verify your email address. Your account will be ready to use immediately after verification.",
            },
            {
                id: "s2",
                question: "How can I contact support?",
                answer:
                    "You can reach our support team via the Contact Us page, by emailing support@publicationhub.sa, or through the WhatsApp support button available throughout the site.",
            },
            {
                id: "s3",
                question: "Can institutions partner with Meta Scholars?",
                answer:
                    "Absolutely. Hospitals, universities, and research centres can partner with us to list opportunities, sponsor courses, or co-develop training programmes. Please visit the Partnership page for more details.",
            },
            {
                id: "s4",
                question: "I forgot my password. What should I do?",
                answer:
                    "Click 'Sign In', then 'Forgot Password'. Enter your registered email address and you will receive a password reset link within a few minutes. Check your spam folder if you do not see it.",
            },
        ],
    },
];

// ── Accordion Item ─────────────────────────────────────────────────────
const AccordionItem = ({
    item,
    isOpen,
    onToggle,
}: {
    item: FaqItem;
    isOpen: boolean;
    onToggle: () => void;
}) => (
    <div
        className={`border border-white/[0.06] rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? "bg-[#111419] border-white/10" : "bg-[#0D0F13] hover:border-white/10"
            }`}
    >
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        >
            <span
                className={`text-sm font-medium transition-colors duration-200 ${isOpen ? "text-white" : "text-[#9CA3AF]"
                    }`}
            >
                {item.question}
            </span>
            <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="shrink-0"
            >
                <ChevronDown
                    className={`w-4 h-4 transition-colors duration-200 ${isOpen ? "text-[#00D1FF]" : "text-[#4B5563]"
                        }`}
                />
            </motion.div>
        </button>

        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                >
                    <p className="px-5 pb-5 text-[13px] text-[#6B7280] leading-relaxed">
                        {item.answer}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

// ── Category Block ──────────────────────────────────────────────────────
const CategoryBlock = ({
    category,
    openId,
    setOpenId,
    index,
}: {
    category: FaqCategory;
    openId: string | null;
    setOpenId: (id: string | null) => void;
    index: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
    >
        {/* Category heading with cyan left border accent */}
        <div className="flex items-center gap-3 mb-4">
            <span className="w-[3px] h-5 bg-[#00D1FF] rounded-full" />
            <h2 className="text-base font-bold text-white tracking-tight">
                {category.title}
            </h2>
        </div>

        {/* Accordion items */}
        <div className="flex flex-col gap-2">
            {category.items.map((item) => (
                <AccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openId === item.id}
                    onToggle={() =>
                        setOpenId(openId === item.id ? null : item.id)
                    }
                />
            ))}
        </div>
    </motion.div>
);

// ── Main Component ─────────────────────────────────────────────────────
const FaqContent = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section className="relative bg-[#0A0C0F] py-12 px-6 md:px-12 lg:px-20">
            <div className="container mx-auto max-w-2xl">
                {FAQ_DATA.map((category, index) => (
                    <CategoryBlock
                        key={category.id}
                        category={category}
                        openId={openId}
                        setOpenId={setOpenId}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default FaqContent;