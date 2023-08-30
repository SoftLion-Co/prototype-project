import s from "./CardBikeComponent.module.scss";

import React from "react";
import Image from "next/image";
import { PiHeartBold } from "react-icons/pi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { TbTrash } from "react-icons/tb";
import Link from "next/link";
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
  const cards: { [key: string]: CardBikeProps } = data;

  const infoCard = cards[id];
  const category = infoCard.category;

  return (
    <div className={s.card}>
      <Link href={`/catalog/${category}/${id}`}>
        <Image
          src={infoCard.image}
          alt="Bike"
          width={295}
          height={300}
          className={s.card__photo}
        />
      </Link>
      <div className={s.card__wrapper}>
        <div className={s.card__wrapper_color}>
          <div className={s.card__color_dark}></div>
          <div className={s.card__color_light}></div>
        </div>
        <Link href={`/catalog/${category}/${id}`}>
          <h4>{infoCard.name}</h4>
        </Link>
        <p className={s.card__price}>{infoCard.price}</p>
        <div className={s.card__wrapper_icon}>
          {!infoCard.like && <PiHeartBold className={s.card__icon_heard} />}
          {/* <div className={s.card__icon}> */}
          <PiShoppingCartSimpleBold className={s.card__icon_cart} />
          {/* <p>Add to cart</p> */}
          {/* </div> */}
          {infoCard.like && <TbTrash />}
        </div>
      </div>
      {infoCard.discount !== "" && (
        <div className={s.card__discount}>
          <p className={s.card__discount_text}>{infoCard.discount}</p>
        </div>
      )}
    </div>
  );
};

export default CardBikeComponent;
