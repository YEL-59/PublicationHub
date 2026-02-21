import OpportunityDetail from "@/page/researchopportunities/OpportunityDetail";

import { opportunities } from "@/lib/opportunities";


export default async function DetailPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const opportunity = opportunities.find(o => o.id === id);

    return <OpportunityDetail opportunity={opportunity} />;
}
