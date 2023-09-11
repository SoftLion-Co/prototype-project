"use client";

import s from "./CardBikeComponent.module.scss";

import React from "react";
import useWishlist from "@/hooks/useWishlist";
import { PiHeartBold } from "react-icons/pi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import data from "../data/cards-bike.json";

interface CardBikeProps {
  name: string;
  colors: {
    [color: string]: string;
  };
  series: string[];
  category: string;
  price: number;
  discount: number;
}

const CardBikeComponent: React.FC<{
  id: string;
  handleToggle?: (id: string) => void;
}> = ({ id, handleToggle }) => {
  const [colorPhoto, setColorPhoto] = useState("black");
  const { likedItems, toggleLike } = useWishlist();
  const initialCards: { [key: string]: CardBikeProps } = data;
  const item = initialCards[id];

  const handleColorChange = (el: string) => {
    setColorPhoto(el);
  };

  return (
    <div className={s.card}>
      <Link
        href={`/catalog/${item.category}/${id}`}
        className={s.card__photo_bike}
      >
        <Image
          src={item.colors[colorPhoto]}
          alt="Bike"
          width={390}
          height={314}
        />
      </Link>
      <div className={s.card__wrapper_color}>
        {Object.keys(item.colors).map((el) => {
          return (
            <div
              className={s.card__color}
              style={{
                backgroundColor: el,
                border:
                  colorPhoto === el
                    ? "3px solid rgba(255, 255, 255, 0.6)"
                    : "none",
              }}
              onClick={() => handleColorChange(el)}
            ></div>
          );
        })}
      </div>
      <Link href={`/catalog/${item.category}/${id}`} className={s.card__name}>
        <h4>
          {item.series} {item.name}
        </h4>
      </Link>
      <p className={s.card__price}>{item.price}$</p>
      <div className={s.card__wrapper_icon}>
        <div
          onClick={
            handleToggle
              ? () => {
                  handleToggle(id);
                }
              : () => {
                  toggleLike(id);
                }
          }
          className={s.card__wrapper_heard}
        >
          <PiHeartBold
            className={`${s.card__icon_heard} ${
              likedItems.includes(id) ? s.card__icon_liked : ""
            }`}
          />
        </div>
        <div className={s.card__wrapper_cart}>
          <PiShoppingCartSimpleBold className={s.card__icon_cart} />
          <p className={s.card__text_cart}>Add to cart</p>
        </div>
      </div>
      {item.discount !== 0 && (
        <div className={s.card__discount}>
          <p className={s.card__discount_text}>-{item.discount}%</p>
        </div>
      )}
    </div>
  );
};

export default CardBikeComponent;
