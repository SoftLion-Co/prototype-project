"use client";

import s from "./CardBikeComponent.module.scss";

import React from "react";
import { useState } from "react";
import { PiHeartBold } from "react-icons/pi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import data from "../data/cards-bike.json";

interface CardBikeProps {
  name: string;
  image: string;
  category: string;
  price: string;
  basket: boolean;
  like: boolean;
  discount: string;
}

const CardBikeComponent: React.FC<{ id: number }> = ({ id }) => {
  const initialCards: { [key: string]: CardBikeProps } = data;
  const [cards, setCards] = useState(initialCards);

  const infoCard = cards[id];
  const category = infoCard.category;

  const clickOnCart = () => {
    setCards({
      ...cards,
      [id]: { ...infoCard, basket: !infoCard.basket },
    });
  };

  const clickOnLike = () => {
    setCards({
      ...cards,
      [id]: { ...infoCard, like: !infoCard.like },
    });
  };

  return (
    <div className={s.card}>
      <Link href={`/catalog/${category}/${id}`}>
        <Image src={infoCard.image} alt="Bike" width={390} height={314} />
      </Link>

      <div className={s.card__wrapper}>
        <div className={s.card__wrapper_color}>
          <div className={s.card__color_dark}></div>
          <div className={s.card__color_light}></div>
        </div>
        <Link href={`/catalog/${category}/${id}`} className={s.card__name}>
          <h4 className={s.card__name}>{infoCard.name}</h4>
        </Link>
        <p className={s.card__price}>{infoCard.price}</p>
        <div className={s.card__wrapper_icon}>
          <div onClick={clickOnLike} className={s.card__wrapper_heard}>
            <PiHeartBold className={s.card__icon_heard} />
          </div>
          <div className={s.card__wrapper_cart} onClick={clickOnCart}>
            <PiShoppingCartSimpleBold className={s.card__icon_cart} />
            <p className={s.card__text_cart}>Add to cart</p>
          </div>
        </div>
      </div>
      {infoCard.discount && (
        <div className={s.card__discount}>
          <p className={s.card__discount_text}>{infoCard.discount}</p>
        </div>
      )}
    </div>
  );
};

export default CardBikeComponent;
