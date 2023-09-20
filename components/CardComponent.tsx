import React from "react";
import data from "@/data/cards-bike.json";
import Image from "next/image";
import s from "./CardComponent.module.scss";
import Link from "next/link";

interface CardProps {
  name: string;
  colors: {
    [color: string]: string;
  };
  price: number;
}

const CardComponent: React.FC<{ id: string; count: number }> = ({
  id,
  count,
}) => {
  const cards: { [key: string]: CardProps } = data;
  const item = cards[id];

  return (
    <Link className={s.card} href={`/catalog/a/${id}`}>
      <div className={s.card__image_container}>
        <Image
          src={item.colors[Object.keys(item.colors)[0]]}
          alt="Bike"
          width={73}
          height={52}
        />
      </div>
      <div className={s.card__box}>
        <p className={s.card__box__title}>{item.name}</p>
        <div className={s.card__box__info}>
          <div className={s.card__box__text}>{item.price} $</div>
          <div className={s.card__box__text}>{count}</div>
        </div>
      </div>
    </Link>
  );
};

export default CardComponent;
