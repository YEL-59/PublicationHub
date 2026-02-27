import PartnershipHero from "@/page/partnership/PartnershipHero";
import PartnershipMission from "@/page/partnership/partnershipmission";
import Whatpartnership from "@/page/partnership/Whatpartnership";
import PartnershipValue from "@/page/partnership/partnershipvalue";
import CoreResearchValue from "@/page/partnership/Coreresearchvalue";
import Systematic from "@/page/partnership/Systematic";

const Partnership = () => {
    return (
        <main className="min-h-screen bg-[#0A0C0F]">
            <PartnershipHero />
            <Whatpartnership />
            <PartnershipValue />
            <CoreResearchValue />
            <Systematic />
            <PartnershipMission />
        </main>
    );
};

export default Partnership;
