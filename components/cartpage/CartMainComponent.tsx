"use client";

import s from "./CartMainComponent.module.scss";
import CartCard from "./CartCardComponent";
import CartInfo from "./CartInfoComponent";
import useCartlist from "@/hooks/useCartlist";
import data from "../../data/cards-bike.json";

const CartMain = () => {
  const { cartItems, setItems } = useCartlist();
  const initialCards = data;

  return (
    <section className={s.container}>
      <h1 className={s.page}>cart</h1>
      <div className={s.cards}>
        {Object.keys(cartItems).map((id) => (
          <CartCard
            key={id}
            id={id}
            quantity={cartItems[id]}
            setItems={setItems}
          />
        ))}
      </div>
      <CartInfo
        cartItems={cartItems}
        initialCards={initialCards}
        setItems={setItems}
      />
    </section>
  );
};

export default CartMain;
