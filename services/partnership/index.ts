/**
 * Fetches the Hero Section data for the Partnership page
 */
export const getPartnershipHeroData = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cms/partnership-page/hero-section`, {
            method: "GET",
        });
        
        if (!response.ok) {
            throw new Error(`Failed to fetch partnership hero data: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching partnership hero:", error);
        throw error;
    }
};

/**
 * Fetches the About Us Section data for the Partnership page
 */
export const getPartnershipAboutData = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cms/partnership-page/about-us-section`, {
            method: "GET",
        });
        
        if (!response.ok) {
            throw new Error(`Failed to fetch partnership about data: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching partnership about us:", error);
        throw error;
    }
};

/**
 * Fetches the Our Mission Section data for the Partnership page
 */
export const getPartnershipMissionData = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cms/partnership-page/our-mission-section`, {
            method: "GET",
        });
        
        if (!response.ok) {
            throw new Error(`Failed to fetch partnership mission data: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching partnership mission:", error);
        throw error;
    }
};

/**
 * Fetches the Partnership Value Section data
 */
export const getPartnershipValueData = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cms/partnership-page/partnership-value-section`, {
            method: "GET",
        });
        
        if (!response.ok) {
            throw new Error(`Failed to fetch partnership value data: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching partnership value:", error);
        throw error;
    }
};
