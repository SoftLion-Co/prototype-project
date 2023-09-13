"use client";

import s from "./CartCardComponent.module.scss";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { useState } from "react";

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
  const [counter, setCounter] = useState(1);

  const initialCards: { [key: string]: CardBikeProps } = data;
  const item = initialCards["6"];

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleIncrement = () => {
    if (counter < 9) {
      setCounter(counter + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyCode = e.keyCode;

    // Если нажата клавиша Backspace (код 8) и значение больше 1, уменьшаем на 1
    if (keyCode === 8 && counter > 1) {
      setCounter(counter - 1);
    }

    // Если нажата клавиша с цифрами (коды 48-57), обновляем значение
    if (keyCode >= 48 && keyCode <= 57) {
      const newValue = parseInt(e.key);

      if (newValue >= 1 && newValue <= 9) {
        setCounter(newValue);
      }
    }
  };

  const calculation =
    parseFloat(item.price) +
    (parseFloat(item.price) * parseFloat(item.discount)) / 100;

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
              {item.discount && <p className={s.card__price}>{calculation}$</p>}
              <p
                style={{
                  textDecoration: item.discount ? "line-through" : "",
                  color: item.discount ? "#8b8b8b" : "",
                }}
                className={s.card__price}
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
            <AiOutlineMinus
              className={s.card__minus}
              onClick={handleDecrement}
            />
            <input
              type="number"
              min={1}
              max={9}
              className={s.card__counter}
              value={counter}
              onKeyDown={handleKeyDown}
            />
            <AiOutlinePlus className={s.card__plus} onClick={handleIncrement} />
          </div>
          <p className={s.card__price}>{parseInt(item.price) * counter}$</p>
          <div className={s.card__trash}>
            <GoTrash className={s.card__trash_item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
