import ApplicationStepper from "@/page/researchopportunities/apply/ApplicationStepper";
import { opportunities } from "@/lib/opportunities";
import { notFound } from "next/navigation";

export default async function ApplyPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const opportunity = opportunities.find(o => o.id === id);

    if (!opportunity) {
        notFound();
    }

    return <ApplicationStepper opportunity={opportunity} />;
}
