"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import aboutBg from "@/assets/images/about-bg.png";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { getAboutHeroData } from "@/services/about";

interface ApiHeroData {
    title: string;
    sub_title: string;
    description: string;
}

const AboutHero = () => {
    const [data, setData] = useState<ApiHeroData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAboutHeroData();
                if (res?.status) {
                    setData(res.data);
                }
            } catch (error) {
                console.error("Error fetching about hero data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="py-32 bg-[#0A0C0F] flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 text-[#00D1FF] animate-spin" />
            </div>
        );
    }

    if (!data) return null;

    // A helper to specifically apply the primary color gradient to "Hub" in "ResearchHub"
    const renderSubtitle = (subtitle: string) => {
        if (subtitle.endsWith("Hub")) {
            return (
                <>
                    {subtitle.slice(0, -3)}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D1FF] to-[#8B8FF9]">
                        Hub
                    </span>
                </>
            );
        }
        return subtitle;
    };

    return (
        <section className="relative pt-12 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#0A0C0F]">
            {/* Background Image */}
            <Image
                src={aboutBg}
                alt="Research Network Background"
                fill
                className="object-cover"
                priority
            />
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full aspect-[21/9] md:aspect-[21/7] rounded-[32px] overflow-hidden border border-white/5"
                >

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 lg:px-24">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#00D1FF]/30 bg-[#00D1FF]/5 backdrop-blur-sm rounded-full text-[9px] md:text-[10px] font-bold text-[#00D1FF] uppercase tracking-[0.15em] mb-6 w-fit"
                        >
                            <span className="w-1 h-1 rounded-full bg-[#00D1FF] animate-pulse" />
                            {data.title}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight leading-tight"
                        >
                            {renderSubtitle(data.sub_title)}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
                            className="text-[#A3A7AE] text-sm md:text-base lg:text-lg max-w-sm md:max-w-md leading-relaxed font-medium"
                        >
                            {data.description}
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;