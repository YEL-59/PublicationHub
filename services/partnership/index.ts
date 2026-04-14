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
