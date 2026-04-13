"use server"

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
