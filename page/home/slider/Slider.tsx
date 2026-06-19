"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { getWhyChooseContent } from "@/services/home";
import { useState, useEffect } from "react";

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
            className="relative overflow-hidden rounded-[16px] border border-white/10 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row 2xl:flex-row gap-5 sm:gap-6 lg:gap-8 items-stretch group transition-all duration-300 h-full min-h-0"
            style={{
                background: "rgba(29, 32, 41, 0.88)",
                boxShadow: "0 1.593px 6.373px 0 rgba(29, 126, 135, 0.10)",
            }}
        >
            <div className="flex-1 min-w-0 flex flex-col justify-center gap-4 sm:gap-5 order-2 lg:order-1">
                <h3
                    className="text-[#E5E7EB] text-xl sm:text-2xl lg:text-[26px] xl:text-2xl 2xl:text-[28px] font-bold leading-snug"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    {data.title}
                </h3>
                <p
                    className="text-[#A3A7AE] text-sm sm:text-base font-medium leading-relaxed line-clamp-4 sm:line-clamp-5 lg:line-clamp-4 break-words"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    {data.description}
                </p>
            </div>

            {data.image && (
                <div className="relative shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 order-1 lg:order-2 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-none lg:w-[200px] xl:w-[240px] 2xl:w-[260px] min-[1536px]:w-[280px] h-[140px] sm:h-[160px] md:h-[180px] lg:h-auto lg:aspect-[3/4] min-[1536px]:aspect-[4/5] mx-auto lg:mx-0 shadow-2xl self-center lg:self-stretch">
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1536px) 200px, 300px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                    />
                </div>
            )}
        </div>
    );
};

interface SliderProps {
    initialContent?: SliderContent | null;
    initialItems?: SliderData[];
}

const Slider = ({ initialContent, initialItems }: SliderProps) => {
    const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
    const [content, setContent] = useState<SliderContent | null>(initialContent || null);
    const [items, setItems] = useState<SliderData[]>(initialItems || []);
    const [isLoading, setIsLoading] = useState(!initialContent);

    useEffect(() => {
        if (initialContent && initialItems) {
            setIsLoading(false);
            return;
        }

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
    }, [initialContent, initialItems]);

    return (
        <section className="w-full bg-[#0A0C0F] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden border-t border-[#2A9D90]/20">
            <div className="container mx-auto max-w-[1440px]">
                <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
                    {isLoading ? (
                        <div className="flex flex-col items-center gap-2">
                            <div className="h-8 sm:h-10 w-56 sm:w-72 md:w-96 bg-white/10 animate-pulse rounded" />
                        </div>
                    ) : (
                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            {content?.title || (
                                <>
                                    Why Researchers Choose{" "}
                                    <span className="bg-gradient-to-r from-[#00D1FF] to-[#7B61FF] bg-clip-text text-transparent">
                                        PublicationHub
                                    </span>
                                </>
                            )}
                        </h2>
                    )}
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{ prevEl, nextEl }}
                        spaceBetween={16}
                        slidesPerView={1}
                        breakpoints={{
                            640: { spaceBetween: 20 },
                            768: { spaceBetween: 24 },
                            1280: { slidesPerView: 1.15, spaceBetween: 24 },
                            1536: { slidesPerView: 2, spaceBetween: 28 },
                        }}
                        className="!pb-4 [&_.swiper-slide]:h-auto [&_.swiper-slide]:flex"
                    >
                        {isLoading
                            ? [1, 2].map((idx) => (
                                  <SwiperSlide key={`skeleton-${idx}`}>
                                      <div className="rounded-[16px] border border-white/10 p-5 sm:p-8 flex flex-col lg:flex-row gap-6 w-full min-h-[280px] sm:min-h-[320px] bg-white/5 animate-pulse">
                                          <div className="flex-1 space-y-4">
                                              <div className="h-7 sm:h-8 w-3/4 bg-white/10 rounded" />
                                              <div className="space-y-2">
                                                  <div className="h-4 w-full bg-white/10 rounded" />
                                                  <div className="h-4 w-full bg-white/10 rounded" />
                                                  <div className="h-4 w-5/6 bg-white/10 rounded" />
                                              </div>
                                          </div>
                                          <div className="w-full max-w-[360px] md:max-w-[400px] lg:max-w-none lg:w-[200px] h-[140px] sm:h-[160px] md:h-[180px] lg:h-auto lg:aspect-[3/4] rounded-2xl bg-white/10 shrink-0 mx-auto lg:mx-0" />
                                      </div>
                                  </SwiperSlide>
                              ))
                            : items.map((item, idx) => (
                                  <SwiperSlide key={item.id || idx}>
                                      <ResearcherCard data={item} />
                                  </SwiperSlide>
                              ))}
                    </Swiper>

                    <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                        <button
                            ref={(node) => setPrevEl(node)}
                            aria-label="Previous slide"
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#171A21] border border-white/10 text-white hover:border-[#00D1FF]/50 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed group shrink-0"
                        >
                            <ChevronLeft size={22} className="sm:w-6 sm:h-6 group-hover:text-[#00D1FF] transition-colors" />
                        </button>
                        <button
                            ref={(node) => setNextEl(node)}
                            aria-label="Next slide"
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#00D1FF] text-black hover:bg-[#00D1FF]/90 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,209,255,0.3)] shrink-0"
                        >
                            <ChevronRight size={22} className="sm:w-6 sm:h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;
