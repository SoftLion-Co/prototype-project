import s from "./CartMainComponent.module.scss";
import CartCard from "./CartCardComponent";
import CartInfo from "./CartInfoComponent";

const CartMain = () => {
  return (
    <section className={s.container}>
      <h1 className={s.page}>cart</h1>
      <CartCard />
      <CartInfo />
    </section>
  );
};

export default CartMain;
