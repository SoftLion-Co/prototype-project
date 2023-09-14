import TabletSliderComponent from "./TabletSliderComponent";
import DesktopSliderComponent from "./DesktopSliderComponent";
import MobileSliderComponent from "./MobileSliderComponent";
import s from "./SliderComponent.module.scss";
import { FC } from "react";

const SliderComponent: FC<{ id: string[] }> = ({ id }) => {
  return (
    <div>
      <DesktopSliderComponent id={id} />
      <MobileSliderComponent id={id} />
      <TabletSliderComponent id={id} />
    </div>
  );
};

export default SliderComponent;
