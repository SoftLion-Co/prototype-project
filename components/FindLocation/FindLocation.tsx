"use client";

import { ChangeEvent, FC, FormEvent, useState } from "react";
import s from "./FindLocation.module.scss";
import Image from "next/image";
import map from "@/images/map.png";
import { AiOutlineSearch } from "react-icons/ai";

export const FindLocation: FC = () => {
  const [locationInput, setLocationInput] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLocationInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={s.FindLocation}>
      <h2 className={s.FindLocation__title}>Location</h2>

      <div className={s.FindLocation__my_location_wrap}>
        <button className={s.FindLocation__my_location_btn} type="button">
          Use my location
        </button>
        <span>Or</span>
      </div>

      <form onSubmit={handleSubmit} className={s.FindLocation__form}>
        <div className={s.FindLocation__form__input_container}>
          <input
            onChange={handleInput}
            value={locationInput}
            placeholder="Enter address"
            type="text"
          />
          <AiOutlineSearch className={s.FindLocation__form__search_icon} />
        </div>

        <button type="submit">Search</button>
      </form>

      <Image className={s.FindLocation__map_img} src={map} width={270} height={366} alt="Map" />
    </div>
  );
};
