"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";

const TICKER_ITEMS = [
    "Empowering Researchers",
    "Accelerating Scientific Output",
    "Delivering Excellence",
];

const PartnershipHero = () => {
    return (
        <section className="relative w-full flex flex-col overflow-hidden bg-[#0A0C0F]">
            {/* ── Background image ── */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroBg}
                    alt="Partnership Hero Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Dark overlay — matches the deep near-black in design */}
                <div className="absolute inset-0 bg-[#070A0D]/60" />
            </div>

            {/* ── Main centred content ── */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 min-h-[76vh]">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D1FF]/8 border border-[#00D1FF]/20 text-[#00D1FF] text-[10px] font-semibold tracking-[0.18em] uppercase mb-8 backdrop-blur-sm"
                >
                    <Sparkles size={10} strokeWidth={2.5} />
                    Global Research Network
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-gradient-to-r from-[#00D1FF] to-[#7B61FF] bg-clip-text text-transparent"
                >
                    PublicationHub
                </motion.h1>

                {/* Sub-heading */}
                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
                    className="text-white/85 text-lg md:text-xl font-normal leading-snug max-w-[300px] mb-10"
                >
                    Research Service &amp; Strategic<br className="hidden sm:block" /> Partnership Offer
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-3"
                >
                    {/* Primary — filled teal-to-purple gradient */}
                    <motion.button
                        whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(42,157,144,0.35)" }}
                        whileTap={{ scale: 0.97 }}
                        className="px-7 py-3 rounded-xl text-[13px] font-bold text-white transition-all duration-300"
                        style={{ background: "linear-gradient(135deg, #2A9D90 0%, #6467F2 100%)" }}
                    >
                        Become a Partner
                    </motion.button>

                    {/* Secondary — outline */}
                    <motion.button
                        whileHover={{ scale: 1.04, backgroundColor: "rgba(0,209,255,0.07)" }}
                        whileTap={{ scale: 0.97 }}
                        className="px-7 py-3 rounded-xl text-[13px] font-bold text-[#00D1FF] border border-[#00D1FF]/35 backdrop-blur-sm transition-all duration-300"
                    >
                        Schedule Partnership Consultation
                    </motion.button>
                </motion.div>
            </div>

            {/* ── Ticker strip ── */}
            <div className="relative z-10 w-full  bg-[#0A0C0F]/80 backdrop-blur-sm">
                <div className="container mx-auto px-6 py-4 flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
                    {TICKER_ITEMS.map((item, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.55 + i * 0.07 }}
                            className="flex items-center gap-3 text-white/75 text-[13px] font-medium"
                        >
                            {i !== 0 && (
                                <span className="w-1 h-1 rounded-full bg-white/30" />
                            )}
                            {item}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnershipHero;
