"use client";

import s from "./CartCardComponent.module.scss";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GoTrash } from "react-icons/go";

import data from "../../data/cards-bike.json";

interface CardBikeProps {
  name: string;
  colors: {
    black: string;
    red: string;
  };
  series: string[];
  category: string;
  price: string;
  discount: string;
}

const CartCard = () => {
  const initialCards: { [key: string]: CardBikeProps } = data;
  const item = initialCards["6"];

  return (
    <div className={s.card}>
      <div className={s.card__main}>
        <div className={s.card__bloсk_first}>
          <div className={s.card__wrapper_photo}>
            <Image
              src={item.colors.black}
              alt="bike"
              width={250}
              height={150}
            />
          </div>
          <div className={s.card__wrapper_info}>
            <h4>
              {item.series} {item.name}
            </h4>
            <div className={s.card__wrapper_price}>
              {item.discount && <p className={s.card__price}>500$</p>}
              <p
                className={s.card__discound}
                style={{
                  textDecoration: item.discount ? "line-through" : "",
                  color: item.discount ? "#8b8b8b" : "",
                }}
              >
                {item.price}
              </p>
              {item.discount && (
                <div className={s.card__discount}>{item.discount}</div>
              )}
            </div>
          </div>
        </div>
        <div className={s.card__bloсk_second}>
          <div className={s.card__container_counter}>
            <AiOutlineMinus className={s.card__minus} />
            <div className={s.card__counter}>1</div>
            <AiOutlinePlus className={s.card__plus} />
          </div>
          <p className={s.card__price}>{item.price}</p>
          <div className={s.card__trash}>
            <GoTrash className={s.card__trash_item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
