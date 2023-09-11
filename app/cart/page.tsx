"use client";

import Breadcrumbs from "@/components/BreadcrumbsComponent";
import CartMain from "@/components/cartpage/CartMainComponent";
import DeliverySection from "@/sections/delivery_page/DeliverySection";
import useCartlist from "@/hooks/useCartlist";

const Cart = () => {
  const links = [{ title: "Cart", href: "" }];
  const { cartItems, setItems } = useCartlist();

  return (
    <div>
      <p>{JSON.stringify(cartItems)}</p>
      <button
        onClick={() => {
          setItems("1", 5);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setItems("2", 2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setItems("3", 3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setItems("1", 0);
        }}
      >
        1
      </button>
      <Breadcrumbs links={links} />
      <CartMain />
      <DeliverySection />
    </div>
  );
};

export default Cart;
