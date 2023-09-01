"use client";

import s from "./MobileSliderComponent.module.scss";
import React from "react";
import { Carousel } from "@mantine/carousel";
import CardBikeComponent from "./CardBikeComponent";
import { useState } from "react";

const MobileSliderComponent: React.FC<{ id: number[] }> = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Carousel
      onSlideChange={(index) => {
        setCurrentSlide(index);
      }}
      withIndicators
      withControls={false}
      align="center"
      className={s.slider}
      styles={{
        indicators: {
          alignItems: "center",
          marginTop: "49px",
          position: "relative",
          gap: 0,
        },
        indicator: {
          borderRadius: 0,
          ":last-of-type": {
            borderRadius: "0 100px 100px 0",
          },
          ":first-of-type": {
            borderRadius: "100px 0 0 100px",
          },
          height: "calc(clamp(220px,90vw,400px)*0.02)",
          width: `calc(clamp(220px,90vw,400px)/${id.length})`,
          backgroundColor: "#E8E8E8",
          [`:nth-of-type(${currentSlide + 1})`]: {
            margin: "-0.2vw",
            zIndex: 1,
            backgroundColor: "#979A86",
            borderRadius: "100px",
            height: "calc(clamp(220px,90vw,450px)*0.02*1.5)",
            width: `calc(clamp(220px,90vw,450px)/${id.length}*1.3)`,
          },
        },
      }}
    >
      {id.map((idValue) => (
        <Carousel.Slide key={idValue}>
          <CardBikeComponent id={idValue} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default MobileSliderComponent;
