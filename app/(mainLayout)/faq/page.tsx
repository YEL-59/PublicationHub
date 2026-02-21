import FaqHero from "@/page/faq/FaqHero";
import FaqContent from "@/page/faq/FaqContent";
import FaqExtraQus from "@/page/faq/FaqExtraQus";

const FaqPage = () => {
    return (
        <main className="min-h-screen bg-[#0A0C0F]">
            <FaqHero />
            <FaqContent />
            <FaqExtraQus />
        </main>
    );
};

export default FaqPage;
