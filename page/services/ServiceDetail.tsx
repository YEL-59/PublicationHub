"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ServiceDetailProps {
    service: any;
}

const ServiceDetail = ({ service }: ServiceDetailProps) => (
    <section className="min-h-screen bg-[#0A0C0F] text-white py-12 px-6 md:px-12 lg:px-20 font-inter">
        <div className="container mx-auto max-w-4xl">
            <Link href="/service" className="flex items-center gap-2 text-[#A3A7AE] hover:text-white transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Services</span>
            </Link>

            {service.thumbnail && (
                <img src={service.thumbnail} alt={service.title} className="w-full h-64 object-cover rounded-2xl mb-8" />
            )}

            <h1 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h1>

            {service.overview && (
                <p className="text-[#A3A7AE] leading-relaxed mb-8">{service.overview}</p>
            )}

            {service.description && (
                <div
                    className="prose prose-invert max-w-none text-[#A3A7AE]"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                />
            )}
        </div>
    </section>
);

export default ServiceDetail;
