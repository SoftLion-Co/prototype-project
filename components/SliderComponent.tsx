import TabletSliderComponent from "./TabletSliderComponent";
import DesktopSliderComponent from "./DesktopSliderComponent";
import MobileSliderComponent from "./MobileSliderComponent";
import { FC } from "react";

const SliderComponent: FC<{ id: number[] }> = ({ id }) => {
  return (
    <div>
      <DesktopSliderComponent id={id} />
      <MobileSliderComponent id={id} />
      <TabletSliderComponent id={id} />
    </div>
  );
};

export default SliderComponent;
