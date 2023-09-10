import { FC, useState } from "react";
import s from "./Slider.module.scss";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import classNames from "classnames";

interface Props {
  pictures: string[];
  changeColor: (id: number) => void;
}

export const Slider: FC<Props> = ({ pictures, changeColor }) => {
  const [slide, setSlide] = useState(0);

  const handleSlideClick = (e: any) => {
    setSlide(Number(e.currentTarget.id));
    changeColor(Number(e.currentTarget.id));
  };

  const handleSlideChange = (index: number) => {
    setSlide(index);
    changeColor(index);
  };

  return (
    <div className={s.container}>
      <Carousel
        nextControlIcon={<MdKeyboardArrowRight />}
        previousControlIcon={<MdKeyboardArrowLeft />}
        className={s.slider}
        mx="auto"
        initialSlide={slide}
        onSlideChange={handleSlideChange}
        loop={true}
      >
        {pictures.map(img => {
          return (
            <Carousel.Slide className={s.slider__item}>
              <Image
                className={s.slider__item__img}
                src={img}
                alt="bike"
                width={500}
                height={500}
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>

      <Carousel
        className={s.bottom_slider}
        slideSize="33.333333%"
        align="center"
        withControls={false}
        slideGap={15}
        initialSlide={slide}
        styles={{ container: { alignItems: "center" } }}
      >
        {pictures.map((img, i) => {
          return (
            <Carousel.Slide
              className={s.bottom_slider__item}
              onClick={handleSlideClick}
              id={`${i}`}
            >
              <Image
                className={classNames(
                  s.bottom_slider__item__img,
                  i === slide ? s.bottom_slider__item__img__active : ""
                )}
                src={img}
                alt="bike"
                width={200}
                height={200}
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
};
