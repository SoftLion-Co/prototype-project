"use client";

import s from "./TabletSliderComponent.module.scss";
import { Carousel } from "@mantine/carousel";
import CardBikeComponent from "./CardBikeComponent";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import React from "react";

const TabletSliderComponent: React.FC<{ id: string[] }> = ({ id }) => {
  return (
    <Carousel
      slideSize="50%"
      slideGap="lg"
      align="start"
      slidesToScroll={2}
      previousControlIcon={<SlArrowLeft className={s.arrow} alt="<" />}
      nextControlIcon={<SlArrowRight className={s.arrow} alt=">" />}
      className={s.slider}
      styles={{
        viewport: {
          padding: "19px",
        },
        controls: {
          bottom: 0,
          top: 0,
          padding: 0,
          maxWidth: "100vw",
          width: "106%",
          left: "-3%",
        },
        control: {
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "0",
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

export default TabletSliderComponent;
