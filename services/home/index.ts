"use server"

import { cookies } from "next/headers";

// get all faq service
export const getAllFaq = async (page: number = 1) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/faqs?page=${page}`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get hero banner service
export const getBannerContent = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cms/home-page/hero-section`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get counter/stats service
export const getCounterContent = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cms/home-page/counter-section`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get why researchers choose service
export const getWhyChooseContent = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cms/home-page/why-researchers-choose-section`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get meta academy service
export const getMetaAcademyContent = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cms/home-page/meta-academy-section`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get research journey service
export const getResearchJourneyContent = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cms/home-page/research-journey-section`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get all services
export const getAllServices = async (page: number = 1) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/services?page=${page}`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get faq categories
export const getFaqCategories = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/faqs-categories`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get faqs by category id
export const getFaqsByCategory = async (categoryId: number) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/faqs-categories/${categoryId}`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// send contact message
export const sendContactMessage = async (formData: FormData) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/contact-support-message/sent`, {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// subscribe newsletter
export const subscribeNewsletter = async (formData: FormData) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/newsletter/subscribe`, {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get system info
export const getSystemInfo = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/system-info`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get all opportunities with pagination
export const getAllOpportunities = async (page: number = 1) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/opportunities?page=${page}`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get opportunity by id
export const getOpportunityById = async (id: number) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/opportunities/?opportunity_id=${id}`, {
            method: "POST", // Changed to POST to allow passing a body. If it must be GET, body is not allowed. Let's send it POST.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ opportunity_id: id })
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// resolves a single opportunity item from API response
export const getSingleOpportunity = async (id: number) => {
    const res = await getOpportunityById(id);

    if (!res?.status || !Array.isArray(res.data) || res.data.length === 0) {
        return null;
    }

    return res.data.find((o: { id: number }) => o.id === id) || res.data[0] || null;
}

// submit opportunity application
export const submitOpportunityApplication = async (formData: FormData) => {
    const token = (await cookies()).get("token")?.value;
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/researcher/opportunity-applications`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: formData,
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get all publications with pagination
export const getAllPublications = async (page: number = 1) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/publications?page=${page}`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get single publication by id
export const getSinglePublication = async (id: number) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/publications/${id}`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get all courses with pagination
export const getAllCourses = async (page: number = 1, categoryId?: number) => {
    try {
        let url = `${process.env.NEXT_PUBLIC_BASE_API}/courses?page=${page}`;
        if (categoryId) {
            url += `&category_id=${categoryId}`;
        }
        const response = await fetch(url, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get course categories
export const getCourseCategories = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/courses-categories`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get course details by id
export const getCourseDetails = async (id: string | number) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/courses/${id}`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get meta academy hero content
export const getMetaAcademyHero = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cms/meta-academy-page/hero-section`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// get meta academy counter content
export const getMetaAcademyCounter = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cms/meta-academy-page/counter-section`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}
