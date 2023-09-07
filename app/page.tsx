import s from "../components/CardBikeComponent.module.scss";
import { Dealer } from "@/sections/home_page/Dealer";
import SliderComponent from "@/components/SliderComponent";
import { HeroSection } from "@/sections/home_page/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SliderComponent id={["1", "2", "3", "4", "5", "6", "7"]} />
      <Dealer />
    </div>
  );
};

export default Home;
