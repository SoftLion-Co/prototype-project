import { useState, useEffect } from "react";

function useCartlist() {
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>(
    JSON.parse(localStorage.getItem("cartItems") || "{}")
  );

  useEffect(() => {
    const savedcartItems = localStorage.getItem("cartItems");
    if (savedcartItems) {
      setCartItems(JSON.parse(savedcartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const setItems = (itemId: string, num: number) => {
    let savedcartItems = localStorage.getItem("cartItems");
    let likeIds: { [key: string]: number } = {};
    if (savedcartItems) {
      likeIds = JSON.parse(savedcartItems);
    }
    likeIds[itemId] = num;
    if (num === 0) {
      delete likeIds[itemId];
    }

    setCartItems(likeIds);
  };

  return { cartItems, setItems };
}

export default useCartlist;
