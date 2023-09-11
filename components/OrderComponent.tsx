import React, { useState } from "react";
import { VscCopy } from "react-icons/vsc";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";
import s from "./OrderComponent.module.scss";
import CardComponent from "./CardComponent";

const OrderComponent: React.FC<{
  id: string;
  totalPrice: number;
  cardItems: { id: string }[];
  onCancelOrder: (orderId: string) => void;
}> = ({ id, totalPrice, onCancelOrder, cardItems }) => {
  const [showHiddenCards, setShowHiddenCards] = useState(false);
  const displayedCards = showHiddenCards ? cardItems : cardItems.slice(0, 2);

  const toggleHiddenCards = () => {
    setShowHiddenCards(!showHiddenCards);
  };

  return (
    <div>
      <div className={s.order}>
        <div className={s.order__placeholder}>
          <div className={s.order__number_container}>
            <h2 className={s.order__number_container__item}>Order #{id}</h2>
            <VscCopy className={s.order__icon} />
          </div>
          <p className={s.order__time}>13.13.2033 in 19:43</p>
        </div>
        <div className={s.order__box}>
          <div className={s.order__box__items}>
            <p>Price:</p>
            <p>Delivery:</p>
            <p>Payment:</p>
          </div>
          <div className={s.order__box__items}>
            <p>{totalPrice} $</p>
            <p>Pickup</p>
            <p>Online card</p>
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
              <div>{cardItems.length}</div>
            </div>
            <div className={s.order__line}></div>
            <BiSolidDownArrow onClick={toggleHiddenCards} />
          </div>
          <div className={s.order__card}>
            {displayedCards.map((item) => (
              <CardComponent
                key={item.id}
                id={item.id}
                count={cardItems.length}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
