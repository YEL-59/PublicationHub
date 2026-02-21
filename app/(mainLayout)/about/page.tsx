import AboutHero from "@/page/about/AboutHero";
import Mission from "@/page/about/Mission";
import RecentPublication from "@/page/about/RecentPublication";

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-[#0A0C0F]">
            <AboutHero />
            <Mission />
            <RecentPublication />
        </main>
    );
};

export default AboutPage;