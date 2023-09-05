import s from "./CartMainComponent.module.scss";
import CartCardComponent from "./CartCardComponent";

const CartMain = () => {
  return (
    <div className={s.container}>
      <h1 className={s.page}>Basket</h1>
      <CartCardComponent />
    </div>
  );
};

export default CartMain;
