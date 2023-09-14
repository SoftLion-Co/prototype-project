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

const OrderComponent: React.FC<{
  id: string;
  idCount: number;
  orderNumber: string;
  cardItems: { [key: string]: number }[];
  onCancelOrder: (orderId: string) => void;
}> = ({ id, idCount, orderNumber, cardItems, onCancelOrder }) => {
  const [showAllCards, setShowAllCards] = useState(false);
  const cards: { [key: string]: CardProps } = data;

  const totalPrice = cardItems.map((item) => {
    let total = 0;
    for (const [id, num] of Object.entries(item)) {
      const card = cards[id.toString()];
      if (card) {
        total += card.price * num;
      }
    }
    return total;
  });

  const copyOrderNumber = () => {
    const orderNumberText = `${orderNumber}`;
    const tempInput = document.createElement("textarea");
    tempInput.value = orderNumberText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  };

  const toggleHiddenCards = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <div>
      <div className={s.order}>
        <div className={s.order__placeholder}>
          <div className={s.order__number_container}>
            <h2 className={s.order__number_container__item}>
              Order {orderNumber}
            </h2>
            <VscCopy onClick={copyOrderNumber} className={s.order__icon} />
          </div>
        </div>
        <div className={s.order__box}>
          <div className={s.order__box__items}>
            <p>Total price:</p>
          </div>
          <div className={s.order__box__items}>
            <p>{totalPrice} $</p>
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
            <BiSolidDownArrow
              className={s.order__list__btn}
              onClick={toggleHiddenCards}
            />
          </div>
          <div className={s.order__card}>
            {cardItems.map((order, index) => (
              <>
                {showAllCards
                  ? Object.keys(order).map((key) => (
                      <CardComponent key={key} id={key} count={order[key]} />
                    ))
                  : Object.keys(order)
                      .slice(0, 2)
                      .map((key) => (
                        <CardComponent key={key} id={key} count={order[key]} />
                      ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
