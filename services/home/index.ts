"use server"

// get all faq service
export const getAllFaq = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/faq`, {
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
