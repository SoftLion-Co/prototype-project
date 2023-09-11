import s from "./CartInfoComponent.module.scss";

import { BsTruck, BsCreditCard2Front } from "react-icons/bs";
import { BiCog } from "react-icons/bi";

const CartInfo = () => {
  return (
    <div className={s.block}>
      <div className={s.block__first}>
        <div>
          <BsTruck className={s.block__icon} />
          <h4 className={s.block__title}>Fast delivery</h4>
          <p className={s.block__description}>
            We deliver orders within 48 hours
          </p>
        </div>
        <div>
          <BsCreditCard2Front className={s.block__icon} />
          <h4 className={s.block__title}>Secure payment</h4>
          <p className={s.block__description}>
            We use 3D-Secure to protect all payments
          </p>
        </div>
        <div>
          <BiCog className={s.block__icon} />
          <h4 className={s.block__title}>Impeccable service</h4>
          <p className={s.block__description}>
            We help assemble the bike after delivery
          </p>
        </div>
      </div>
      <div className={s.block__second}>
        <div className={s.block__box_price}>
          <h4 className={s.block__total}>Total:</h4>
          <p className={s.block__price}>1231$</p>
        </div>
        <button className={s.block__btn}>Checkout</button>
      </div>
    </div>
  );
};

export default CartInfo;
