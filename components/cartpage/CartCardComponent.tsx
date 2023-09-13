"use client";

import s from "./CartCardComponent.module.scss";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { useEffect, useState } from "react";

import data from "../../data/cards-bike.json";

interface CardBikeProps {
  name: string;
  colors: {
    [color: string]: string;
  };
  series: string[];
  sizes: number[];
  equipment: string[];
  category: string;
  price: number;
  discount: number;
}

interface CartCardProps {
  id: string;
  quantity: number;
  setItems: (itemId: string, num: number) => void;
}

const CartCard = ({ id, quantity, setItems }: CartCardProps) => {
  const [colorPhoto, setColorPhoto] = useState("");
  const initialCards: { [key: string]: CardBikeProps } = data;

  const item = initialCards[id];

  useEffect(() => {
    const colors = Object.keys(item.colors);

    if (colors.length > 0) {
      setColorPhoto(colors[0]);
    }
  }, []);

  const heandleDelite = (id: string) => {
    setItems(id, 0);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setItems(id, quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 9) {
      setItems(id, quantity + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyCode = e.keyCode;

    if (keyCode === 8 && quantity > 0) {
      setItems(id, quantity - 1);
    }

    if (keyCode >= 48 && keyCode <= 57) {
      const newValue = parseInt(e.key);

      if (newValue >= 0 && newValue <= 9) {
        setItems(id, newValue);
      }
    }
  };

  const calculation = item.price - (item.price * item.discount) / 100;
  const roundedCalculation = Math.round(calculation);
  return (
    <div className={s.card}>
      <div className={s.card__bloсk_first}>
        <div className={s.card__wrapper_photo}>
          <Image
            src={item.colors[colorPhoto]}
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
            {item.discount ? (
              <p className={s.card__price}>{roundedCalculation}$</p>
            ) : (
              ""
            )}
            <p
              style={{
                textDecoration: item.discount ? "line-through" : "",
                color: item.discount ? "#8b8b8b" : "",
              }}
              className={s.card__price}
            >
              {item.price}$
            </p>
            {item.discount ? (
              <div className={s.card__discount}>{item.discount}%</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className={s.card__bloсk_second}>
        <div className={s.card__container_counter}>
          <AiOutlineMinus className={s.card__minus} onClick={handleDecrement} />
          <input
            type="number"
            className={s.card__counter}
            value={quantity}
            onKeyDown={handleKeyDown}
          />
          <AiOutlinePlus className={s.card__plus} onClick={handleIncrement} />
        </div>
        <p className={s.card__price}>{roundedCalculation * quantity}$</p>
        <div className={s.card__trash} onClick={() => heandleDelite(id)}>
          <GoTrash className={s.card__trash_item} />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
