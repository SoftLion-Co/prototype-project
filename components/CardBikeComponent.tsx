"use client";

import s from "./CardBikeComponent.module.scss";

import React from "react";
import useWishlist from "@/hooks/useWishlist";
import { PiHeartBold } from "react-icons/pi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import data from "../data/cards-bike.json";

interface CardBikeProps {
  name: string;
  colors?: {
    [color: string]: string;
  };
  series: string[];
  category: string;
  price: number;
  discount: number;
}

const CardBikeComponent: React.FC<{ id: string }> = ({ id }) => {
  const { likedItems, toggleLike } = useWishlist();
  const initialCards: { [key: string]: CardBikeProps } = data;
  const item = initialCards[id];

  return (
    <div className={s.card}>
      <Link href={`/catalog/${item.category}/${id}`}>
        <Image src={item.colors!["black"] || ""} alt="Bike" width={390} height={314} />
      </Link>

      <div className={s.card__wrapper}>
        <div className={s.card__wrapper_color}>
          <div className={s.card__color_dark}></div>
          <div className={s.card__color_light}></div>
        </div>
        <Link href={`/catalog/${item.category}/${id}`}>
          <h4 className={s.card__name}>{item.name}</h4>
        </Link>
        <p className={s.card__price}>{item.price}$</p>
        <div className={s.card__wrapper_icon}>
          <div
            onClick={() => {
              toggleLike(id);
            }}
            className={s.card__wrapper_heard}
          >
            <PiHeartBold className={s.card__icon_heard} />
            <p>{likedItems.includes(id) ? "y" : "n"}</p>
          </div>
          <div className={s.card__wrapper_cart} onClick={() => {}}>
            <PiShoppingCartSimpleBold className={s.card__icon_cart} />
            <p className={s.card__text_cart}>Add to cart</p>
          </div>
        </div>
      </div>
      {item.discount && (
        <div className={s.card__discount}>
          <p className={s.card__discount_text}>-{item.discount}%</p>
        </div>
      )}
    </div>
  );
};

export default CardBikeComponent;
