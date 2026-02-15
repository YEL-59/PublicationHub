"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface SliderData {
    id: number;
    title: string;
    description: string;
    image: string;
}

const sliderData: SliderData[] = [
    {
        id: 1,
        title: "High-Quality Research Services",
        description:
            "At Publication Hub, we are committed to advancing research excellence by empowering researchers and increasing both the quality and impact of scientific publications.",
        image: "https://images.unsplash.com/photo-1579165466511-703398321689?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Career Growth Focus",
        description:
            "At Publication Hub, we are committed to advancing research excellence by empowering researchers and increasing both the quality and impact of scientific publications across Saudi Arabia and the Middle East.",
        image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Expert Mentorship",
        description:
            "Connect with world-class mentors who guide you through complex research methodologies and help accelerate your academic publishing journey.",
        image: "https://images.unsplash.com/photo-1532094349884-543bb11783cf?q=80&w=600&auto=format&fit=crop",
    },
];

const ResearcherCard = ({ data }: { data: SliderData }) => {
    return (
        <div
            className="relative overflow-hidden rounded-[16px] border border-white/10 p-8 md:p-14 flex flex-col md:flex-row gap-8 items-start group transition-all duration-300 min-h-[350px]"
            style={{
                background: "rgba(29, 32, 41, 0.88)",
                boxShadow: "0 1.593px 6.373px 0 rgba(29, 126, 135, 0.10)",
            }}
        >
            <div className="flex-1 flex flex-col items-start gap-6">
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
                        className="font-bold text-[#E5E7EB] tracking-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "30px", lineHeight: "1.2" }}
                    >
                        {data.title}
                    </h3>
                    <p
                        className="text-[#A3A7AE] font-medium"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", lineHeight: "28px" }}
                    >
                        {data.description}
                    </p>
                </div>
            </div>

            {/* Image Container */}
            <div
                className="relative shrink-0 rounded-2xl overflow-hidden border border-white/5 mx-auto md:mx-0"
                style={{ width: "266px", height: "284px", aspectRatio: "133/142" }}
            >
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
        </div>
    );
};

const Slider = () => {
    const [prevEl, setPrevEl] = React.useState<HTMLButtonElement | null>(null);
    const [nextEl, setNextEl] = React.useState<HTMLButtonElement | null>(null);

    return (
        <section className="w-full bg-[#0A0C0F] pt-40 pb-20 px-4 md:px-8 overflow-hidden border border-t-[#2A9D90]/20">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Why Researchers Choose{" "}
                        <span className="bg-gradient-to-r from-[#00D1FF] to-[#7B61FF] bg-clip-text text-transparent">
                            PublicationHub
                        </span>
                    </h2>
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
                        {sliderData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <ResearcherCard data={item} />
                            </SwiperSlide>
                        ))}
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