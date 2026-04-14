import PartnershipHero from "@/page/partnership/PartnershipHero";
import PartnershipMission from "@/page/partnership/partnershipmission";
import Whatpartnership from "@/page/partnership/Whatpartnership";
import PartnershipValue from "@/page/partnership/partnershipvalue";
import CoreResearchValue from "@/page/partnership/Coreresearchvalue";
import Systematic from "@/page/partnership/Systematic";
import Manuscript from "@/page/partnership/Manuscript";
import PartnershipModel from "@/page/partnership/Partnershipmodel";

const Partnership = () => {
    return (
        <main className="min-h-screen bg-[#0A0C0F]">
            <PartnershipHero />
             <PartnershipMission />
            <Whatpartnership />
            <PartnershipValue />
            <CoreResearchValue />
            <Systematic />
            <Manuscript />
            <PartnershipModel />
           
        </main>
    );
};

export default Partnership;
