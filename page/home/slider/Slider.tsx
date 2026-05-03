"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Search, Sparkles } from "lucide-react";
import Image from "next/image";
import { getWhyChooseContent } from "@/services/home";
import { useState, useEffect } from "react";
import heroBg from "@/assets/images/hero-bg.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface SliderData {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface SliderContent {
    title: string;
}



const ResearcherCard = ({ data }: { data: SliderData }) => {
    return (
        <div
            className="relative overflow-hidden rounded-[16px] border border-white/10 p-8 md:p-14 flex flex-col md:flex-row gap-8 items-start group transition-all duration-300 min-h-[350px]"
            style={{
                background: "rgba(29, 32, 41, 0.88)",
                boxShadow: "0 1.593px 6.373px 0 rgba(29, 126, 135, 0.10)",
            }}
        >
            <div className="flex-1 min-w-0 flex flex-col items-start gap-6">
                {/* Number Badge */}
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg shrink-0"
                    style={{ background: "linear-gradient(135deg, #00D1FF 0%, #6467F2 100%)" }}
                >
                    {data.id}
                </div>

                {/* Content */}
                <div className="space-y-4">
                    <h3
                        className="text-[#E5E7EB] text-[30px] font-bold leading-normal"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", }}
                    >
                        {data.title}
                    </h3>
                    <p
                        className="text-[#A3A7AE] text-base font-medium leading-[28px] line-clamp-4 break-all"
                        style={{ fontFamily: "'Inter', sans-serif", }}
                    >
                        {data.description}
                    </p>
                </div>
            </div>

            {/* Image Container */}
            {data.image && (
                <div
                    className="relative shrink-0 rounded-3xl overflow-hidden border border-white/5 mx-auto md:mx-0 w-full md:w-[300px] aspect-square md:aspect-[4/5] shadow-2xl"
                >
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                    />
                </div>
            )}
        </div>
    );
};

const Slider = () => {
    const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
    const [content, setContent] = useState<SliderContent | null>(null);
    const [items, setItems] = useState<SliderData[]>([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSlider = async () => {
            setIsLoading(true);
            const res = await getWhyChooseContent();
            if (res?.status) {
                setContent(res.data.content);
                setItems(res.data.items);
            }
            setIsLoading(false);
        };
        fetchSlider();
    }, []);

    const displayItems = items;

    return (
        <section className="w-full bg-[#0A0C0F] pt-40 pb-20 px-4 md:px-8 overflow-hidden border border-t-[#2A9D90]/20">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    {isLoading ? (
                        <div className="flex flex-col items-center gap-2">
                            <div className="h-10 w-64 md:w-96 bg-white/10 animate-pulse rounded"></div>
                        </div>
                    ) : (
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            {content?.title || "Why Researchers Choose"}{" "}
                            {!content?.title && (
                                <span className="bg-gradient-to-r from-[#00D1FF] to-[#7B61FF] bg-clip-text text-transparent">
                                    PublicationHub
                                </span>
                            )}
                        </h2>
                    )}
                </div>

                {/* Swiper Slider */}
                <div className="relative px-2">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl,
                            nextEl,
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
                            },
                        }}
                        className="!pb-16"
                    >
                        {isLoading ? (
                            [1, 2].map((idx) => (
                                <SwiperSlide key={`skeleton-${idx}`}>
                                    <div className="relative overflow-hidden rounded-[16px] border border-white/10 p-8 md:p-14 flex flex-col md:flex-row gap-8 items-start group min-h-[350px] bg-white/5 animate-pulse">
                                        <div className="flex-1 min-w-0 flex flex-col items-start gap-6 w-full">
                                            <div className="w-10 h-10 rounded-full bg-white/10 shrink-0"></div>
                                            <div className="space-y-4 w-full">
                                                <div className="h-8 w-3/4 bg-white/10 rounded"></div>
                                                <div className="space-y-2 w-full">
                                                    <div className="h-4 w-full bg-white/10 rounded"></div>
                                                    <div className="h-4 w-full bg-white/10 rounded"></div>
                                                    <div className="h-4 w-5/6 bg-white/10 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative shrink-0 rounded-3xl overflow-hidden border border-white/5 mx-auto md:mx-0 w-full md:w-[300px] aspect-square md:aspect-[4/5] bg-white/10"></div>
                                    </div>
                                </SwiperSlide>
                            ))
                        ) : (
                            displayItems.map((item, idx) => (
                                <SwiperSlide key={item.id || idx}>
                                    <ResearcherCard data={item} />
                                </SwiperSlide>
                            ))
                        )}
                    </Swiper>

                    {/* Custom Navigation */}
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <button
                            ref={(node) => setPrevEl(node)}
                            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#171A21] border border-white/10 text-white hover:border-[#00D1FF]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group z-20"
                        >
                            <ChevronLeft size={24} className="group-hover:text-[#00D1FF] transition-colors" />
                        </button>
                        <button
                            ref={(node) => setNextEl(node)}
                            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#00D1FF] text-black hover:bg-[#00D1FF]/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,209,255,0.3)] z-20"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;