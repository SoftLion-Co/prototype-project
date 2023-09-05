"use client";

import s from "./DesktopSliderComponent.module.scss";
import { Carousel } from "@mantine/carousel";
import CardBikeComponent from "./CardBikeComponent";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import React from "react";

const DesktopSliderComponent: React.FC<{ id: string[] }> = ({ id }) => {
  return (
    <Carousel
      slideSize="33.333333%"
      slideGap="lg"
      align="start"
      slidesToScroll={3}
      previousControlIcon={<SlArrowLeft className={s.arrow} alt="<" />}
      nextControlIcon={<SlArrowRight className={s.arrow} alt=">" />}
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
      className={s.slider}
    >
      {id.map((idValue) => (
        <Carousel.Slide key={idValue}>
          <CardBikeComponent id={idValue} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default DesktopSliderComponent;
