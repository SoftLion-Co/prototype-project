import { useState, useEffect } from "react";

function useCartlist(initialValue: Record<string, number> = {}) {
  const [cartItems, setCartItems] =
    useState<Record<string, number>>(initialValue);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("CartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("CartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const setCartList = (itemId: string, quantity: number) => {
    if (quantity >= 1) {
      setCartItems((prevCartItems) => ({
        ...prevCartItems,
        [itemId]: quantity,
      }));
    } else {
      setCartItems((prevCartItems) => {
        const updatedCartItems = { ...prevCartItems };
        delete updatedCartItems[itemId];
        return updatedCartItems;
      });
    }
  };

  return { cartItems, setCartList };
}

export default useCartlist;
