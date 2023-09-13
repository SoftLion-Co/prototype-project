"use client";

import s from "./CartInfoComponent.module.scss";

import { BsTruck, BsCreditCard2Front } from "react-icons/bs";
import { BiCog } from "react-icons/bi";

interface Info {
  title: string;
  icon?: React.ReactNode;
  description: string;
}

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

const info: Info[] = [
  {
    title: "Fast delivery",
    icon: <BsTruck className={s.block__icon} />,
    description: "We deliver orders within 48 hours",
  },
  {
    title: "Secure payment",
    icon: <BsCreditCard2Front className={s.block__icon} />,
    description: "We use 3D-Secure to protect all payments",
  },
  {
    title: "Impeccable service",
    icon: <BiCog className={s.block__icon} />,
    description: "We help assemble the bike after delivery",
  },
];

interface CartInfoProps {
  cartItems: { [key: string]: number };
  initialCards: { [key: string]: CardBikeProps };
}

const CartInfo = ({ cartItems, initialCards }: CartInfoProps) => {
  // Вычисляем общую стоимость на основе данных в корзине
  const totalPrice = Object.keys(cartItems).reduce((total, id) => {
    const quantity = cartItems[id];
    const item = initialCards[id];
    const calculation = item.price - (item.price * item.discount) / 100;
    return total + quantity * calculation;
  }, 0);

  const roundedCalculation = Math.round(totalPrice);

  return (
    <div className={s.block}>
      <div className={s.block__first}>
        {info.map((item) => (
          <div key={item.title}>
            <div>{item.icon}</div>
            <h4 className={s.block__title}>{item.title}</h4>
            <p className={s.block__description}>{item.description}</p>
          </div>
        ))}
      </div>
      <div className={s.block__second}>
        <div className={s.block__box_price}>
          <h4 className={s.block__total}>Total:</h4>
          <p className={s.block__price}>{roundedCalculation}$</p>
        </div>
        <button className={s.block__btn}>Checkout</button>
      </div>
    </div>
  );
};

export default CartInfo;
