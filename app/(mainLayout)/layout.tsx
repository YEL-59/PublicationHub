




import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SmoothScroll>
            <div className="min-h-screen bg-white">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </SmoothScroll>
    );
};

export default MainLayout;