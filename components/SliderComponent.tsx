import TabletSliderComponent from "./TabletSliderComponent";
import DesktopSliderComponent from "./DesktopSliderComponent";
import MobileSliderComponent from "./MobileSliderComponent";
import s from "./SliderComponent.module.scss";
import { FC } from "react";

const SliderComponent: FC<{ id: number[] }> = ({ id }) => {
  return (
    <div className={s.container}>
      <DesktopSliderComponent id={id} />
      <MobileSliderComponent id={id} />
      <TabletSliderComponent id={id} />
    </div>
  );
};

export default SliderComponent;
