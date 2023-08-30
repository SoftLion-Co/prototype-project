import HeroSection from "@/sections/HeroSection";
import { Dealer } from "@/sections/home_page/Dealer";

const Home = () => {
  return (
    <div className={s.container}>
      <h1>Home</h1>
      <HeroSection />  
      <Dealer />
    </div>
  );
};

export default Home;
