import s from "../components/CardBikeComponent.module.scss";

import { Dealer } from "@/sections/home_page/Dealer";
import SliderComponent from "@/components/SliderComponent";

const Home = () => {
  return (
    <div className={s.container}>
      <SliderComponent id={[1, 2, 3, 4, 5, 6]} />
      <Dealer />
    </div>
  );
};

export default Home;
