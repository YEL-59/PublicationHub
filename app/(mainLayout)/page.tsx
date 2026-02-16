import Banner from "@/page/home/banner/Banner";
import Slider from "@/page/home/slider/Slider";
import Featured from "@/page/home/featured/Featured";
import Skill from "@/page/home/skill/Skill";
import Career from "@/page/home/career/Career";
import Faq from "@/page/home/faq/Faq";

const Home = () => {
  return (
    <div>
      <Banner />
      <Slider />
      <Featured />
      <Skill />
      <Career />
      <Faq />
    </div>
  );
};

export default Home;