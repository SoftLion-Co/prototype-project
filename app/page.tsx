import s from "../components/CardBikeComponent.module.scss";
import { Dealer } from "@/sections/home_page/Dealer";
import SliderComponent from "@/components/SliderComponent";
import { HeroSection } from "@/sections/home_page/HeroSection";
import data from "../data/cards-bike.json";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SliderComponent id={Object.keys(data)} />
      <Dealer />
    </div>
  );
};

export default Home;
