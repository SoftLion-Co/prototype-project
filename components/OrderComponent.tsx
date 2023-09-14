import React, { useState } from "react";
import { VscCopy } from "react-icons/vsc";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";
import s from "./OrderComponent.module.scss";
import CardComponent from "./CardComponent";
import data from "@/data/cards-bike.json";

interface CardProps {
  name: string;
  colors: {
    [color: string]: string;
  };
  price: number;
}

function findAllIdAndNumValuesInArray(
  array: Record<string, any>[]
): { id: number; num: number }[] {
  const foundIdAndNumValues: { id: number; num: number }[] = array
    .map((obj) => {
      const idKeys = Object.keys(obj).filter(
        (key) => key.startsWith("id") && typeof obj[key] === "number"
      );
      const numKeys = idKeys.map((idKey) => `num${idKey.slice(2)}`);

      const idAndNumValues = idKeys.map((idKey) => ({
        id: obj[idKey],
        num: numKeys.includes(`num${idKey.slice(2)}`)
          ? obj[`num${idKey.slice(2)}`]
          : 0,
      }));

      return idAndNumValues;
    })
    .reduce((acc, curr) => acc.concat(curr), []);

  return foundIdAndNumValues;
}

const OrderComponent: React.FC<{
  id: string;
  idCount: number;
  cardItems: { [key: string]: number }[];
  onCancelOrder: (orderId: string) => void;
}> = ({ id, idCount, cardItems, onCancelOrder }) => {
  const [showAllCards, setShowAllCards] = useState(false);
  const cards: { [key: string]: CardProps } = data;

  const allFoundIdAndNumValues = findAllIdAndNumValuesInArray(cardItems);

  const totalPrice = allFoundIdAndNumValues.reduce((accumulator, item) => {
    const card = cards[item.id.toString()];
    if (card) {
      return accumulator + card.price * item.num;
    }
    return accumulator;
  }, 0);

  const toggleHiddenCards = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <div>
      <div className={s.order}>
        <div className={s.order__placeholder}>
          <div className={s.order__number_container}>
            <h2 className={s.order__number_container__item}>Order #</h2>
            <VscCopy className={s.order__icon} />
          </div>
          <p className={s.order__time}>13.13.2033 in 19:43</p>
        </div>
        <div className={s.order__box}>
          <div className={s.order__box__items}>
            <p>Total price:</p>
          </div>
          <div className={s.order__box__items}>
            <p>{totalPrice}</p>
          </div>
        </div>
        <button className={s.order__btn} onClick={() => onCancelOrder(id)}>
          <IoCloseSharp />
          Cancel
        </button>
        <div className={s.order__list}>
          <div className={s.order__list__items}>
            <div className={s.order__list__items__item}>
              <p>List order</p>
              <div>{idCount}</div>
            </div>
            <div className={s.order__line}></div>
            <BiSolidDownArrow onClick={toggleHiddenCards} />
          </div>
          <div className={s.order__card}>
            {showAllCards
              ? allFoundIdAndNumValues.map((item, index) => (
                  <CardComponent key={index} id={item.id} count={item.num} />
                ))
              : allFoundIdAndNumValues
                  .slice(0, 2)
                  .map((item, index) => (
                    <CardComponent key={index} id={item.id} count={item.num} />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
