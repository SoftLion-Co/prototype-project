"use client";

import { FC } from "react";
import s from "./FindLocation.module.scss";
import Image from "next/image";

export const FindLocation: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.text}>
        <h2 className={s.find_location__title}>Location doesn't matter.</h2>
        <p>
          At Specialized, our guiding principle is “The Rider is the Boss.” Our
          main goal is to provide riders with the most innovative cycling
          products in the world and be responsible for their quality. That's why
          we're excited to introduce one of the most generous and rider-friendly
          warranty policies in the industry.
        </p>
      </div>

      <Image
        className={s.image}
        src={
          "https://static.vecteezy.com/system/resources/previews/012/986/891/original/doodle-freehand-drawing-of-europe-map-free-png.png"
        }
        width={270}
        height={366}
        alt="Map"
      />
    </div>
  );
};
