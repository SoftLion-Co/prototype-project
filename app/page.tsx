import { Dealer } from "@/sections/home_page/Dealer";
import { HeroSection } from "@/sections/home_page/HeroSection";
import SliderSeason from "@/sections/home_page/SliderSeason";
import SliderSale from "@/sections/home_page/SliderSale";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SliderSeason />
      <Dealer />
      <SliderSale />
    </div>
  );
};

export default Home;
