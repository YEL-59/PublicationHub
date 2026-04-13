import OpportunityDetail from "@/page/researchopportunities/OpportunityDetail";
import { getOpportunityById } from "@/services/home";

export default async function DetailPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    
    let opportunity = null;
    try {
        const res = await getOpportunityById(Number(id));
        if (res?.status && res.data && res.data.length > 0) {
            // Wait, maybe the backend returns just that one opportunity if opportunity_id is passed
            opportunity = res.data.find((o: any) => o.id === Number(id)) || res.data[0];
        }
    } catch (e) {
        console.error(e);
    }

    if (!opportunity) {
        return (
            <div className="min-h-screen bg-[#0A0C0F] text-white flex justify-center items-center">
                <h2>Opportunity not found</h2>
            </div>
        );
    }

    return <OpportunityDetail opportunity={opportunity} />;
}
